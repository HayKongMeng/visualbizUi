const { reqHeader } = require("../config/header.config")


export const getAllAppointmentRequest = async (page , size)=> {
    const headers =await  reqHeader();
    const response = await fetch(`${process.env.BASE_URL}/book/request?page=${page}&size=${size}`,{
        method: "GET",
        headers,
    })
    const data= await response.json();

    return data;
}