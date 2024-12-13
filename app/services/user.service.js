import { reqHeader } from "../config/header.config";

export const getCurrentUser = async () => {
  try {
    const headers = await reqHeader();
    const res = await fetch(`${process.env.BASE_URL}/user`, {
      headers,
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const getUserById = async (userId) => {
  try {
    const headers = await reqHeader();
    const res = await fetch(
      `${process.env.BASE_URL}/auths/{userId}?userId=${userId}`,
      { headers }
    );

    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

// update User
export const updateUserByCurrentUser = async (data) => {
  console.log("new data in server : ", data);

  // return;

  const headers = await reqHeader();
  console.log("data", data);
  const updateUser = {
    userId: data?.userId,
    userName: data?.userName,
    dateOfBirth: data?.dateOfBirth,
    gender: data?.gender,
    location: data?.location,
    profilePicture: data?.profilePicture,
    coverImage: data?.coverImage,
  };
  console.log("updateUser", updateUser);
  const res = await fetch(
    `${process.env.BASE_URL}/user/edit`,
    {
      method: "PUT",
      headers,
      body: JSON.stringify(updateUser),
    },
    {
      next: {
        tag: ["updateUserByCurrentUser"],
      },
    }
  );
  const update = await res.json();
  console.log("after update data :", update);
  return update;
};
