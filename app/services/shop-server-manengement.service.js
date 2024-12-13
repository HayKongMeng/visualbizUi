import next from "next";
import { reqHeader } from "../config/header.config";
import { table } from "console";
//get shop info
export const getShopInfo = async () =>{
    const headers = await reqHeader();
    const res = await fetch(
        `${process.env.BASE_URL}/shop/currentShop`,
        {
            headers,
        },
        {
            next:{
                tag:["getShopInfo"],
            },
        }
    );
    const {payload} = await res.json();
    console.log("Shop info: ",payload);
    return payload;
}

//get shop servsice description
export const getShopServiceDescription = async () =>{
    // const headers = await
}