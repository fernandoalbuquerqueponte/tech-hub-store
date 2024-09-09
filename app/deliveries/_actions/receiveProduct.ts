"use server";
import { Delivery, OrderStatus, PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export async function recieveProduct(deliveryItem: Delivery) {
  const product = await prisma.delivery.update({
    where: {
      id: deliveryItem.id,
    },
    data: {
      orderStatus: OrderStatus.ORDER_RECEIVED,
    },
  });
  revalidatePath("/deliveries");
  return product;
}
