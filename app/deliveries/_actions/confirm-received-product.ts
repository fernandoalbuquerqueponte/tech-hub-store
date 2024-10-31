"use server";
import { db } from "@/app/_lib/prisma";
import { Delivery, OrderStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function confirmReceivedProductItem(deliveryItem: Delivery) {
  const product = await db.delivery.update({
    where: {
      id: deliveryItem.id,
      paymentStatus: "PAYMENT_CONFIRMED",
    },
    data: {
      orderStatus: OrderStatus.ORDER_RECEIVED,
    },
  });
  revalidatePath("/deliveries");
  return product;
}
