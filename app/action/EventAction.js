"use server"
import { deleteEventById, getEventById, postEvent, updateEventById } from "@/app/services/event.service";
import { revalidateTag } from "next/cache";
import { getAllService } from "../services/eventserviceprovider.service";

// delete event actions
export async function deleteEventAction(eventId){
    await deleteEventById(eventId);
    console.log("dddd",eventId)
    revalidateTag ('event')
}
// add event action
export async function addEventAction (newEvent){  
    await postEvent(newEvent);
    console.log("first",newEvent)
    revalidateTag('event');
}
// update event action
export async function updateEventAction (eventId,newData){
    await updateEventById(eventId,newData);
        console.log("new data",newData);
        revalidateTag("updateEventById")
    }

//get event by Id
export async function getEventByIdAction(eventId){
    const data = await getEventById(eventId);
    console.log("data",data)
    revalidateTag("event");
    return data;
}
// get all event service
export async function getAllEventServiceAction (){
 const data =  await getAllService();
    revalidateTag("getAllEvent")
    console.log("data",data);
    return data;
}

