const { useSession, getSession } = require("next-auth/react");


export const getShopService = async () => {
    const session = await getSession();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/service/shopService`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.user?.token}`,
      },
    }
  );
  const data = await res.json();
  return data.payload;
};

export const getBookService = async () => {
    const session = await getSession();

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/book`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session?.user?.token}`,
    },
  });
  const data = await res.json();
  return data;
};
