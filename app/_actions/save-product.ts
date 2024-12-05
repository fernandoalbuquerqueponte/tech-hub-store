"use server";
import { CartContextProps } from "../_providers/cart-provider";
import { db } from "../_lib/prisma";

export async function saveProduct(
  products: CartContextProps[],
  userId: string
) {
  const order = await db.delivery.create({
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
