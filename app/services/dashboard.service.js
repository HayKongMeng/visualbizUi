import next from "next";
import { reqHeader } from "../config/header.config";

//get overview of service provider
export const getOverview = async ()=>{
    const headers = await reqHeader();
    const res = await fetch(
        `${process.env.BASE_URL}/shop/service/provider/overview`,
        {
            headers,
        },
        {
            next:{
                tag:["getOverview"],
            },
        }
    );
    const {payload} = await res.json();
    return payload;
};


//get all feedbackk
export const getAllFeedback = async ()=>{
    const headers = await reqHeader();
    const res = await fetch(
        `${process.env.BASE_URL}/rate-feedback/service/currentShop`,
        {
            headers,
        },
        {
            next:{
                tag:["getAllFeedback"],
            },
        }
    );
    const {payload} = await res.json();
    console.log("all feedback: ",payload);
    return payload;
}