import React from "react";
import EditProfile from "./EditProfile";
import { getCurrentUser } from "@/app/services/user.service";

const page = async () => {
  const user = await getCurrentUser();
  console.log("user ", user);

  return <EditProfile userId={user?.user_id} />;
};

export default page;
