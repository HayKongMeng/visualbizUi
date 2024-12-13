"use server";

import { revalidateTag } from "next/cache";
import { updateUserByCurrentUser } from "../services/user.service";

export const userServerAction = async (newData) => {
  //   console.log("new data user :", newData);
  const updateUser = await updateUserByCurrentUser(newData);
  //   console.log("new data", newData);
  revalidateTag("updateUserByCurrentUser");
  return updateUser;
};
