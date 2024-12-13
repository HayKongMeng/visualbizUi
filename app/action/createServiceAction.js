"use server";
import { revalidateTag } from "next/cache";
import { createNewService, deleteServiceByID, getServiceById } from "../services/service.service";

// create service action
export const createServiceAction = async (newService) =>{
     await createNewService(newService);
    console.log(newService)
       revalidateTag ("createNewService")
       console.log("ddd",newService)
   }       

// delete service action
export const deleteServiceAction = async (serviceId) => {
    await deleteServiceByID(serviceId);
    console.log("serciceId",serviceId);
    revalidateTag("deleteServiceByID")

}   

// get service by Id 
export async function getServiceByIdAction(serviceId){
    const data = await getServiceById(serviceId);
    console.log("service data",data);
    revalidateTag("getServiceById")
    return data;
}