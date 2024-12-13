
const { useSession, getSession } = require("next-auth/react");

export const shopManagement = async () => {
    const session =await getSession()
    console.log(session)
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/shop/currentShop`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.user?.token}`,
        },
      });
      const data = await res.json();
      return data.payload;
};
