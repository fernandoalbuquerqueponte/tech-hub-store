"use client";

import { DeliveryItemProps } from "./order-product";
import Image from "next/image";
import { getTotalPrice } from "@/app/_helpers/product-price";
import { confirmReceivedProductItem } from "../_actions/confirm-received-product";

import { SheetHeader, SheetTitle } from "@/app/_components/ui/sheet";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Button } from "@/app/_components/ui/button";

import { loadStripe } from "@stripe/stripe-js";
import { createCheckout } from "@/app/_actions/checkout";

export function OrderProductContent({
  productItem,
  deliveryItem,
}: DeliveryItemProps) {
  async function handleConfirmReceivedProduct() {
    await confirmReceivedProductItem(deliveryItem);
    console.log(deliveryItem);
  }

  async function handleConfirmPayment() {
    const checkout = await createCheckout(productItem, deliveryItem.id);
    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

    stripe?.redirectToCheckout({
      sessionId: checkout.id,
    });
  }

  return (
    <div>
      <SheetHeader>
        <SheetTitle>Detalhes do Pedido</SheetTitle>
      </SheetHeader>
      <div className="flex items-center gap-3 py-8">
        <Image
          src={productItem.imageUrl}
          alt={productItem.name}
          width={100}
          height={100}
        />
        <h1>{productItem.name}</h1>
      </div>
      <Card>
        <CardContent className="p-0 px-4 py-5">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h3>Sub-total</h3>
              <p>R$ {Number(productItem.basePrice).toFixed(2)}</p>
            </div>
            <div className="flex items-center justify-between">
              <h3>Entrega:</h3>
              <p>GRÁTIS</p>
            </div>
            <div className="flex items-center justify-between">
              <h3>Status:</h3>
              <p>
                {deliveryItem.paymentStatus === "PAYMENT_CONFIRMED"
                  ? "PAGO"
                  : "PAGAMENTO PENDENTE"}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="font-bold">Total:</h3>
              <h4 className="font-bold">
                R$ {getTotalPrice(productItem).toFixed(2)}
              </h4>
            </div>
            {deliveryItem.paymentStatus === "WAITING_FOR_PAYMENT" && (
              <Button
                onClick={() => handleConfirmPayment()}
                className="items-center-center bg-green-600"
              >
                Fazer pagamento
              </Button>
            )}

            {deliveryItem.paymentStatus === "PAYMENT_CONFIRMED" && (
              <Button
                onClick={() => handleConfirmReceivedProduct()}
                className="items-center-center"
              >
                Confirmar Entrega
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
