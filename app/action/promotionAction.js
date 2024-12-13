"use server"

import { revalidateTag } from "next/cache";
import { deletePromotionById } from "../services/promotion.service";


export async function deletePromotionAction(promotionId){
    console.log(promotionId)
    await deletePromotionById(promotionId);
    console.log("promotion",promotionId);
    revalidateTag("promotion")

}