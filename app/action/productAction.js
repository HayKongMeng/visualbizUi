"use server"

import { revalidateTag } from "next/cache";
import { deleteProductById } from "../services/product.service"

export async function deleteProductAction(productId){
    await deleteProductById(productId);
    console.log("productAction",productId)
    revalidateTag("product")
}