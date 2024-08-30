"use server";
import { PrismaClient } from "@prisma/client";
import { CartContextProps } from "../_providers/cart-provider";

const prisma = new PrismaClient();

export async function saveProduct(
  products: CartContextProps[],
  userId: string
) {
  const order = await prisma.delivery.create({
    data: {
      userId: userId,
      deliveriesItem: {
        create: products.map((product) => ({
          productId: product.id,
          quantity: product.quantity,
          basePrice: product.basePrice,
        })),
      },
    },
  });
  return order;
}
