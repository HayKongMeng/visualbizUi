
import { reqHeader } from "../config/header.config";

//get all service event 
export const getAllService = async (page = 1, size = 2) => {
    const headers = await reqHeader();
    const res = await fetch(`${process.env.BASE_URL}/event/serviceType`,
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