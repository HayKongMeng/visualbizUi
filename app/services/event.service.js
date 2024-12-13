import { reqHeader } from "../config/header.config";

//get all event
export const getAllEvent = async (page = 1, size = 2) => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL}/event?page=${page}&size=${size}`,
    {
      headers,
    },
    {
      next: {
        tag: ["getAllEvent"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

//get event by ID
export const getEventById = async (event_id) => {
  console.log("event_Id", event_id);
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL}/event/get/${event_id}`,
    {
      headers,
      cache: "no-store",
    },
    {
      next: {
        tag: ["getEventById"],
      },
    }
  );
  const { payload } = await res.json();
  console.log("payload", payload);
  return payload;
};

//get event by shop id
export const getEventByShopId = async (shopId) => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL}/event/shop/${shopId}`,
    {
      headers,
    },
    {
      next: {
        tag: ["getEventByShopId"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

//Update Event
export const updateEventById = async (event_id, data) => {
  const headers = await reqHeader();
  console.log("data", data);
  const updateEvent = {
    eventTitle: data?.eventTitle,
    eventDescription: data?.eventDescription,
    eventImage: data?.eventImage,
    eventAddress: data?.eventAddress,
    startDate: new Date(data?.startDate)?.toISOString(),
    endDate: new Date(data?.endDate)?.toISOString(),
  };
  console.log("updateEvent", updateEvent);
  const res = await fetch(
    `${process.env.BASE_URL}/event/update/${event_id}`,
    {
      method: "PUT",
      headers,
      body: JSON.stringify(updateEvent),
    },
    {
      next: {
        tag: ["updateEventById"],
      },
    }
  );
  const update = await res.json();
  console.log("after update data :", update);
  return update;
};

// post event
export const postEvent = async (event_data) => {
  const headers = await reqHeader();
  console.log("Event data", event_data);
  const newEvent = {
    eventTitle: event_data?.eventTitle,
    eventDescription: event_data?.eventDescription,
    eventImage: event_data?.eventImage,
    startDate: new Date(event_data?.startDate).toISOString(),
    endDate: new Date(event_data?.endDate).toISOString(),
  };

  const res = await fetch(
    `${process.env.BASE_URL}/event/create`,
    {
      method: "POST",
      headers,
      body: JSON.stringify(newEvent),
    },
    {
      next: {
        tag: ["postEvent"],
      },
    }
  );
  // const payload = await res.json();
  return res.json();
};

//delete event by id
export const deleteEventById = async (event_id) => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL}/event/delete/${event_id}`,
    {
      method: "DELETE",
      headers,
    },
    {
      next: {
        tag: ["deleteEventById"],
      },
    }
  );
  const { payload } = res.json();
  return payload;
};

//get Event ThisWeek
export const getEventThisWeek = async () => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL}/event/get/this-week`,
    {
      headers,
    },
    {
      next: {
        tag: ["getEventThisWeek"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

//get event oldest
export const getEventOldest = async () => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL}/event/get/older-event`,
    {
      headers,
    },
    {
      next: {
        tag: ["getEventOldest"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

//get event seller
export const getEventSeller = async () => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL}/event/sellerType`,
    {
      headers,
    },
    {
      next: {
        tag: ["getEventSeller"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

// get event service
export const getEventService = async () => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL}/event/serviceType`,
    {
      headers,
    },
    {
      next: {
        tag: ["getEventService"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

export const postCommentEvent = async (eventId, commentDescription) => {
  console.log(eventId, commentDescription, process.env.BASE_URL);
  const headers = await reqHeader();
  const res = await fetch(`${process.env.BASE_URL}/event/comment`, {
    headers,
    method: "POST",
    body: JSON.stringify({
      eventId,
      commentDescription,
    }),
  });
  const data = await res.json();
  console.log("data : ", data);
  return data;
};
