"use client";
import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction"; // Import Draggable from interactionPlugin
import { toast } from "react-toastify";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Spinner,
  useDisclosure,
} from "@nextui-org/react";
import InputComp from "@/app/(service_provider)/Event Components/InputComp";
import { useQuery } from "@tanstack/react-query";
import { getAllBooking } from "@/app/services/book.service";
import { useSession } from "next-auth/react";
import {
  getBookService,
  getShopService,
} from "@/app/services/client-services/service/calendarService";

function CalendarContent() {
  async function postEventData(data) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/service`, {
      method: "POST",
      body: JSON.stringify({
        serviceName,
        servicePrice,
        serviceDescription,
        serviceImg,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.user?.token}`,
      },
    });
  }
  const {
    data: bookData = [],
    isError: bookError,
    isLoading: loadingError,
  } = useQuery({
    queryKey: ["book"],
    queryFn: getBookService,
  });

  const {
    data: serviceData = [],
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["services"],
    queryFn: getShopService,
  });

  console.log("serrice", serviceData);

  console.log("data", bookData);
  const [services, setServices] = useState([
    { title: "MakeUp", id: "1" },
    { title: "Nail Coloring", id: "2" },
    { title: "Waxing", id: "3" },
    { title: "Facial", id: "4" },
    { title: "Hair Cut", id: "5" },
  ]);
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [getDate, setGetDate] = useState("");
  const [event, setEvent] = useState("");
  const [eventData, setEventData] = useState([
    { id: "6", title: "Event 1", start: "2024-07-02T08:00:00" },
    { id: "7", title: "Event 2", start: "2024-06-30T10:00:00" },
  ]);

  const [updatedEvent, setUpdatedEvent] = useState([]);
  let draggableEl = document.getElementById("draggable-el");

  useEffect(() => {
    if (draggableEl) {
      let draggableInstance = new Draggable(draggableEl, {
        itemSelector: ".draggable-item",
        eventData: function (eventEl) {
          let title = eventEl.getAttribute("title");
          let id = eventEl.getAttribute("data");
          let start = eventEl.getAttribute("start");
          return { title, id, start };
        },
      });
      return () => {
        draggableInstance.destroy();
      };
    } else {
      return;
    }
  }, [draggableEl]);

  function handleDateClick(info) {
    onOpen();
    // setEventData({
    //     ...updatedEvent,
    //     start:getDate,
    //     allDay:info.allDay,
    //     id: new Date().getTime()
    // })
    setGetDate(info.dateStr);
  }

  function dropEvent(data) {
    const event = {
      ...updatedEvent,
      start: data.date.toISOString(),
      title: data.draggedEl.innerText,
      allDay: data.allDay,
      id: new Date().getTime(),
    };

    setEventData([...eventData, event]);
    // console.lol(eventData)
  }
  function addEvent(e) {
    e.preventDefault();
    if (event === "") {
      toast.error("Please enter event", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    setEventData([
      ...eventData,
      {
        id: new Date().getTime(),
        title: event,
        allDay: e.allDay,
        start: getDate,
        backgroundColor: "green",
      },
    ]);

    toast.success("Event added successfully", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setEvent("")
    onClose();
  }

  function handleEventDrop(info) {
    const id = Number(info.event.id);
    const newStart = info.event.startStr; // Use startStr to get the formatted start time

    setEventData((prevEventData) =>
      prevEventData.map((event) =>
        event.id === id ? { ...event, start: newStart } : event
      )
    );
  }

  const [allEvents, setAllEvents] = useState([]);

  if (isError) {
    return <div className="h-full w-full flex justify-center items-center text-3xl font-semibold">
      There an error while fetching schedule data
    </div>;
  }
  return (
    <div className="flex h-full w-full gap-5">
      {isLoading ? (
        <div className="h-full w-full flex justify-center items-center">
          <Spinner color="primary" label="Loading...." size="lg"/>
        </div>
      ) : (
        <>
          <div className="h-full w-full flex flex-col gap-5">
            <FullCalendar
              allDaySlot={false}
              height={"100%"}
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,listMonth",
              }}
              editable={true}
              eventDrop={handleEventDrop}
              eventOverlap={(stillEvent, movingEvent) => {
                return stillEvent.allDay && movingEvent.allDay;
                // return stillEvent.startStr && movingEvent.startStr;
              }}
              eventDidMount={(info) => {
                info.el.style.borderRadius = "10px";
                info.el.style.textTransform = "capitalize";
                info.el.style.backgroundColor = "#D2DCE8";
                info.el.style.color = "red";
                info.el.style.padding = "10px";
                info.el.style.fontWeight = "400";

                if (info.event.extendedProps.status === "done") {
                  info.el.style.backgroundColor = "yellow";
                }
              }}
              drop={(data) => dropEvent(data)}
              droppable={true}
              dateClick={handleDateClick}
              validRange={() => {
                const today = new Date();
                const start = new Date(
                  today.getFullYear(),
                  today.getMonth(),
                  today.getDate(),
                  8,
                  0
                );
                return { start: start };
              }}
              plugins={[
                timeGridPlugin,
                dayGridPlugin,
                listPlugin,
                interactionPlugin,
              ]}
              eventDisplay="auto"
              events={eventData}
            />
            <div className=" bg-primary text-white  rounded-xl  flex justify-around">
              <div className="flex justify-between w-full p-5">
                <div className="text-white">Total Book Today</div>
                <div className="font-semibold text-green-500">10</div>
              </div>
              <div className="h-full border-white border "></div>
              <div className="flex justify-between w-full p-5">
                <div className="text-white">Total Book</div>
                <div className="font-semibold text-green-500">10</div>
              </div>
            </div>
            <Modal
              isDismissable={false}
              isOpen={isOpen}
              onOpenChange={onOpenChange}
              size="5xl"
              hideCloseButton
              disableAnimation
              classNames={{ base: "w-[50rem] p-5" }}
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="text-3xl">
                      Add Appointment
                    </ModalHeader>
                    <ModalBody className="text-2xl">
                      <InputComp
                        required
                        onChange={(e) => setEvent(e.target.value)}
                        label={"Event Title"}
                      />
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        size="lg"
                        className="text-xl"
                        color="danger"
                        variant="light"
                        onPress={onClose}
                      >
                        Close
                      </Button>
                      <Button
                        onClick={addEvent}
                        size="lg"
                        className="text-xl"
                        color="primary"
                        radius="sm"
                        type="submit"
                      >
                        Add
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </div>
          <div className="flex flex-col gap-[22px] w-[30rem] h-full">
            <div className="border bg-primary text-white p-[18.5px]  rounded-2xl">
              Drag and Drop Event
            </div>
            <div
              id="draggable-el"
              className="border bg-primary text-white p-5 rounded-2xl h-full flex flex-col gap-4 overflow-y-scroll"
            >
              {serviceData.map((service) => (
                <div
                  className="draggable-item bg-white p-4 border rounded-xl cursor-pointer "
                  key={service.serviceId}
                >
                  <div className="text-primary font-semibold text-center">
                    {service.serviceName}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CalendarContent;
