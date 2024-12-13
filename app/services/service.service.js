import { Jersey_10, M_PLUS_1 } from "next/font/google";
import { reqHeader } from "../config/header.config";

/**
 * 1
 * get all services (customer)
 * @param {number} page for how may pages
 * @param {number} size how many objects in ...page
 * @returns {object} payload
 */
export const getAllServices = async (page = 1, size = 10) => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL}/service?page=${page} & size=${size}`,
    {
      headers,
    },
    {
      next: {
        tag: ["getAllServices"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

/**
 * 2
 * create new service in shop
 * @param {object} service service object
 * @returns {object} payload
 */

export const createNewService = async (data) => {
  const headers = await reqHeader();
  console.log("data", data);
  const createService = {
    serviceName: data.serviceName,
    servicePrice: data.servicePrice,
    serviceDescription: data.serviceDescription,
    serviceImg: data.serviceImg,
    categoryId: data.categoryId,
    active: data.active,
  };
  const res = await fetch(
    `http://localhost:8080/api/v1/service`,
    {
      method: "POST",
      headers,
      body: JSON.stringify(createService),
    },
    {
      next: {
        tag: ["createNewService"],
      },
    }
  );
  const { payload } = res.json();
  return payload;
};

/**
 * 3
 * get services by id (customer)
 * @param {number} service_id for service id
 * @returns {object} payload
 */
export const getServiceById = async (service_id) => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL}/service/${service_id}`,
    {
      headers,
    },
    {
      next: {
        tag: ["getServiceById"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

/**
 * 4
 * delete service by id (service provider)
 * @param {number} service_id for service id
 * @returns {object} payload
 */
export const deleteServiceByID = async (service_id) => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL}/service/${service_id}`,
    {
      method: "DELETE",
      headers,
    },
    {
      next: {
        tag: ["deleteServiceByID"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

/**
 * 4
 * delete service by id (service provider)
 * @param {object} serviceObj for service object at 1 parameter
 * @param {number} service_id for service id
 * @returns {object} payload
 */
export const updateServiceByID = async (
  {
    serviceName,
    servicePrice,
    serviceDescription,
    serviceImg,
    categoryId,
    active,
  },
  service_id
) => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL}/service/${service_id}`,
    {
      method: "PATCH",
      headers,
      body: JSON.stringify({
        serviceName,
        servicePrice,
        serviceDescription,
        serviceImg,
        categoryId,
        active,
      }),
    },
    {
      next: {
        tag: ["updateServiceByID"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

/**
 * 5
 * get all services in shop (service provider)
 * @returns {object} payload
 */
export const getAllServicesInShop = async () => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL}/service/shopService`,
    {
      headers,
    },
    {
      next: {
        tag: ["getAllServicesInShop"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

/**
 * 6
 * get all services by shop id (customer)
 * @param {number} page for how may pages
 * @param {number} size how many objects in ...page
 * @returns {object} payload
 */
export const getAllServicesByShopId = async (page = 1, size = 10, shop_id) => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL}/service/serviceShopId/${shop_id}?page=${page}&size=${size}`,
    {
      headers,
    },
    {
      next: {
        tag: ["getAllServicesByShopId"],
      },
    }
  );
  const { payload } = await res.json();
  console.log("Payload : ", payload);
  return payload;
};

/**
 * 7
 * get all services by category id (customer)
 * @param {number} page for how may pages
 * @param {number} size how many objects in ...page
 * @param {number} categoryId categoryId
 * @returns {object} payload
 */
export const getAllServicesByCateId = async (
  page = 1,
  size = 10,
  categoryId
) => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL}/service/product-by-categoryId/${categoryId}?page=${page}&size=${size}`,
    {
      headers,
    },
    {
      next: {
        tag: ["getAllServicesByCateId"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

/**
 * 8
 * get all services by shop name (service provider)
 * @param {number} page for how may pages
 * @param {number} size how many objects in ...page
 * @param {number} categoryId categoryId
 * @returns {object} payload
 */
export const getAllServicesByShopName = async (page = 1, size = 10, name) => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL}/service/nameInShop/${name}?page=${page}&size=${size}`,
    {
      headers,
    },
    {
      next: {
        tag: ["getAllServicesByShopName"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

/**
 * 9
 * get service by name (customer)
 * @param {string} name categoryId
 * @returns {object} payload
 */
export const getServicesByName = async (name) => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL}/service/name/${name}`,
    {
      headers,
    },
    {
      next: {
        tag: ["getServicesByName"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

/**
 * 10
 * get service by id (service provider)
 * @param {number} id id for service
 * @returns {object} payload
 */
export const getServicesById = async (id) => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL}/service/idInShop/${id}`,
    {
      headers,
    },
    {
      next: {
        tag: ["getServicesById"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

/**
 * 11
 * get service by cate id (service provider)
 * @param {number} page for how may pages
 * @param {number} size how many objects in ...page
 * @param {number} id id for cate
 * @returns {object} payload
 */
export const getServicesByCateId = async (page = 1, size = 10, id) => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL}/service/ServiceByCategoryId/${id}?page=${page}&size=${size}`,
    {
      headers,
    },
    {
      next: {
        tag: ["getServicesByCateId"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};

//get all appointment current shop
export const getAllAppointmentCurrentShop = async (page = 1, size = 10) => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL}/book/request?page=${page}&size=${size}`,
    {
      headers,
    },
    {
      next: {
        tag: ["getAllAppointmentCurrentShop"],
      },
    }
  );
  const { payload } = await res.json();
  return payload;
};
export const getAllAppointmentInShopByServiceId = async (id) => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL}/book/all/request/serviceId/${id}`,
    {
      headers,
    },
    {
      next: {
        tag: ["getAllAppointmentInShopByServiceId"],
      },
    }
  );
  const { payload } = await res.json();
  console.log("payload : ", payload);
  return payload;
};

//get all appointment accepted
export const getAllAppointmentAccepted = async (page = 1, size = 10) => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL}/book/accept?page=${page}&size=${size}`,
    {
      headers,
    },
    {
      next: {
        tag: ["getAllAppointmentAccepted"],
      },
    }
  );
  const { payload } = await res.json();
  console.log("all appointment accepted : ", payload);
  return payload;
};

//accept booking service
export const acceptAppointment = async (bookId) => {
  const headers = await reqHeader();
  const res = await fetch(
    `${process.env.BASE_URL}/book/accept/${parseInt(bookId)}`,
    {
      method: "PUT",
      headers,
    },
    {
      next: {
        tag: ["acceptAppointment"],
      },
    }
  );
  const { payload } = await res.json();
  console.log("accept apppointment: ", payload);
  return payload;
};
