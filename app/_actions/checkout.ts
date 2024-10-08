"use server";
import { CartContextProps } from "../_providers/cart-provider";
import Stripe from "stripe";

export async function createCheckout(
  products: CartContextProps[],
  deliveryId: string
) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2024-09-30.acacia",
  });

  const checkout = await stripe.checkout.sessions.create({
    payment_method_types: ["card", "boleto"],
    mode: "payment",
    success_url: "http://localhost:3000",
    cancel_url: "http://localhost:3000",
    metadata: {
      deliveryId,
    },
    line_items: products.map((product) => {
      return {
        price_data: {
          currency: "brl",
          product_data: {
            name: product.name,
            images: [product.imageUrl],
            description: product.description,
          },
          unit_amount: Number(product.basePrice) * 100,
        },
        quantity: product.quantity,
      };
    }),
  });
  return checkout;
}
