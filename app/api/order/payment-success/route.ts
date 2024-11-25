import { NextResponse } from "next/server";
import Stripe from "stripe";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-09-30.acacia",
});

export async function POST(request: Request) {
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.error();
  }

  const text = await request.text();
  const event = stripe.webhooks.constructEvent(
    text,
    signature,
    process.env.STRIPE_WEBHOOK_SECRET_KEY
  );

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
      event.data.object.id,
      {
        expand: ["line_items"],
      }
    );
    const lineItems = sessionWithLineItems.line_items;
    console.log(lineItems);

    await prisma.delivery.update({
      where: {
        id: session?.metadata?.deliveryId,
      },
      data: {
        paymentStatus: "PAYMENT_CONFIRMED",
      },
    });
  }
  return NextResponse.json({ received: true });
}
