"use client";
import { Delivery, Product } from "@prisma/client";

import { Sheet, SheetContent, SheetTrigger } from "@/app/_components/ui/sheet";
import { OrderProductContent } from "./order-product-content";
import { OrderProductButton } from "./order-product-button";

export interface DeliveryItemProps {
  productItem: Product;
  deliveryItem: Delivery;
}

export default function DeliveryItem({
  productItem,
  deliveryItem,
}: DeliveryItemProps) {
  return (
    <Sheet>
      <SheetTrigger className="w-full">
        <OrderProductButton
          productItem={productItem}
          deliveryItem={deliveryItem}
        />
      </SheetTrigger>
      <SheetContent>
        <OrderProductContent
          productItem={productItem}
          deliveryItem={deliveryItem}
        />
      </SheetContent>
    </Sheet>
  );
}
