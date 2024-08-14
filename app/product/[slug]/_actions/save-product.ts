"use server";

import { db } from "@/app/_lib/prisma";
import { revalidatePath } from "next/cache";

interface SaveProductProps {
  productId: string;
  userId: string;
  storeId: string;
  categoryId: string;
  date: Date;
}

export async function saveProduct(params: SaveProductProps) {
  await db.delivery.create({
    data: {
      productId: params.productId,
      userId: params.userId,
      storeId: params.storeId,
      categoryId: params.categoryId,
      date: params.date,
    },
  });
  revalidatePath("/");
  revalidatePath("/deliveries");
}
