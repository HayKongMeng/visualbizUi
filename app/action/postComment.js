"use server";
import { revalidateTag } from "next/cache";
import { postCommentEvent } from "../services/event.service";

export const postCommentAction = async (eventId, commentDescription) => {
  await postCommentEvent(parseInt(eventId), commentDescription);
  revalidateTag("getEventById");
};
