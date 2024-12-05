"use server";
import { CartContextProps } from "../_providers/cart-provider";
import Stripe from "stripe";

type CheckoutProduct = Omit<CartContextProps, "quantity"> & {
  quantity?: number;
};

export async function createCheckout(
  productsOrProduct: CheckoutProduct | CheckoutProduct[],
  deliveryId: string
) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2024-09-30.acacia",
  });

  const items = Array.isArray(productsOrProduct)
    ? productsOrProduct
    : [productsOrProduct];

  const checkout = await stripe.checkout.sessions.create({
    payment_method_types: ["card", "boleto"],
    mode: "payment",
    success_url: process.env.APP_URL as string,
    cancel_url: process.env.APP_URL as string,
    metadata: {
      deliveryId,
    },
    line_items: items.map((product) => ({
      price_data: {
        currency: "brl",
        product_data: {
          name: product.name,
          images: [product.imageUrl],
          description: product.description,
        },
        unit_amount: Number(product.basePrice) * 100,
      },
      quantity: product.quantity ?? 1,
    })),
  });

  return checkout;
}
