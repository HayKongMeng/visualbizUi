"use client";
import Image from "next/image";
import ProfileHeader from "./ProfileHeader";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import CheckIcon from "../icons/SidebarIcon/Active/CheckIcon";
import DenyIcon from "../icons/SidebarIcon/Active/DenyIcon";

const ScheduleContent = () => {
  const [events, setEvents] = useState([
    { title: "MakeUp", id: "1" },
    { title: "Nail Coloring", id: "2" },
    { title: "Waxing", id: "3" },
    { title: "Facial", id: "4" },
    { title: "Hair Cut", id: "5" },
  ]);
  const [allEvents, setAllEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    allDay: false,
    id: 0,
  });

  useEffect(() => {
    let draggableEl = document.getElementById("draggable-el");
    if (draggableEl) {
      new Draggable(draggableEl, {
        itemSelector: ".fc-event",
        eventData: function (eventEl) {
          let title = eventEl.getAttribute("title");
          let id = eventEl.getAttribute("data");
          let start = eventEl.getAttribute("start");
          return { title, id, start };
        },
      });
    }
  }, []);

  function handleDateClick(arg) {
    setNewEvent({
      ...newEvent,
      start: arg.date,
      allDay: arg.allDay,
      id: new Date().getTime(),
    });
    setShowModal(true);
  }

  function addEvent(data) {
    const event = {
      ...newEvent,
      start: data.date.toISOString(),
      title: data.draggedEl.innerText,
      allDay: data.allDay,
      id: new Date().getTime(),
    };
    setAllEvents([...allEvents, event]);
  }

  function handleDeleteModal(data) {
    setShowDeleteModal(true);
    setIdToDelete(Number(data.event.id));
  }

  function handleDelete() {
    setAllEvents(
      allEvents.filter((event) => Number(event.id) !== Number(idToDelete))
    );
    setShowDeleteModal(false);
    setIdToDelete(null);
  }

  function handleCloseModal() {
    setShowModal(false);
    setNewEvent({
      title: "",
      start: "",
      allDay: false,
      id: 0,
    });
    setShowDeleteModal(false);
    setIdToDelete(null);
  }

  const handleChange = (e) => {
    setNewEvent({
      ...newEvent,
      title: e.target.value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    setAllEvents([...allEvents, newEvent]);
    setShowModal(false);
    setNewEvent({
      title: "",
      start: "",
      allDay: false,
      id: 0,
    });
  }
  return (
    <section className=" w-full h-full bg-white text-black">
      <section className="flex mt-10 flex-col gap-5">
        <ProfileHeader title={"Schedule"} />
        <section className="flex px-5 flex-col gap-5 h-[90%]">
          <div className="w-full flex justify-evenly">
            {/* main page  */}
            <div className="h-full w-[100%]">
              <main className="flex  w-full text-near_normal flex-col pt-5">
                <div className="grid grid-cols-12">
                  <div className="col-span-10 ">
                    <FullCalendar
                      viewClassNames={"h-[70%]"}
                      plugins={[
                        dayGridPlugin,
                        interactionPlugin,
                        timeGridPlugin,
                      ]}
                      headerToolbar={{
                        left: "prev,next today",
                        center: "title",
                        right: "dayGridMonth,timeGridWeek",
                      }}
                      events={allEvents}
                      nowIndicator={true}
                      editable={true}
                      droppable={true}
                      selectable={true}
                      selectMirror={true}
                      dateClick={handleDateClick}
                      drop={(data) => addEvent(data)}
                      eventClick={(data) => handleDeleteModal(data)}
                    />
                  </div>
                  <div
                    id="draggable-el"
                    className="col-span-2 text-description ml-md_margin border-2 p-2 rounded-md lg:h-1/2 bg-violet-50"
                  >
                    {" "}
                    <h1 className="font-bold text-center">Drag Event</h1>
                    {events.map((event) => (
                      <div
                        className="fc-event border-2 p-3 m-2 w-full rounded-md ml-auto text-center bg-white"
                        title={event.title}
                        key={event.id}
                      >
                        {event.title}
                      </div>
                    ))}
                  </div>
                </div>

                <Transition.Root show={showDeleteModal} as={Fragment}>
                  <Dialog
                    as="div"
                    className="relative z-10"
                    onClose={setShowDeleteModal}
                  >
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                      <div className="flex items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                          enterTo="opacity-100 translate-y-0 sm:scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                          <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all py-5 w-[35%] ">
                            <div className="px-10 pb-4 pt-5 sm:p-6 sm:pb-4">
                              <div className="sm:flex sm:items-start items-center">
                                <div className="mx-auto flex h-52 w-52 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-20 sm:w-20">
                                  <DenyIcon width="30px" height="30px" />
                                </div>
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                  <Dialog.Title
                                    as="h3"
                                    className="text-description font-semibold leading-6 text-gray-900"
                                  >
                                    Delete Event
                                  </Dialog.Title>
                                  <div className="mt-2">
                                    <p className="text-description text-gray-500">
                                      Are you sure you want to delete this
                                      event?
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-gray-50 px-4 text-description py-3 sm:flex sm:flex-row-reverse sm:px-6">
                              <button
                                type="button"
                                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                onClick={handleDelete}
                              >
                                Delete
                              </button>
                              <button
                                type="button"
                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                onClick={handleCloseModal}
                              >
                                Cancel
                              </button>
                            </div>
                          </Dialog.Panel>
                        </Transition.Child>
                      </div>
                    </div>
                  </Dialog>
                </Transition.Root>
                <Transition.Root show={showModal} as={Fragment}>
                  <Dialog
                    as="div"
                    className="relative z-10"
                    onClose={setShowModal}
                  >
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                          enterTo="opacity-100 translate-y-0 sm:scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                          <Dialog.Panel className="relative text-description transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[30%] sm:p-6">
                            <div>
                              <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-red-100">
                                <CheckIcon width="50px" height="50px" />
                              </div>
                              <div className="mt-3 text-center sm:mt-5">
                                <Dialog.Title
                                  as="h3"
                                  className=" font-semibold leading-6 text-gray-900"
                                >
                                  Add Event
                                </Dialog.Title>
                                <form action="submit" onSubmit={handleSubmit}>
                                  <div className="mt-2">
                                    <input
                                      type="text"
                                      name="title"
                                      className="block w-full pl-5 rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-description sm:leading-6"
                                      value={newEvent.title}
                                      onChange={handleChange}
                                      placeholder="Title"
                                    />
                                  </div>
                                  <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                                    <button
                                      type="submit"
                                      className="inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 sm:col-start-2 disabled:opacity-25"
                                      disabled={newEvent.title === ""}
                                    >
                                      Create
                                    </button>
                                    <button
                                      type="button"
                                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                                      onClick={handleCloseModal}
                                    >
                                      Cancel
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </Dialog.Panel>
                        </Transition.Child>
                      </div>
                    </div>
                  </Dialog>
                </Transition.Root>
              </main>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default ScheduleContent;
