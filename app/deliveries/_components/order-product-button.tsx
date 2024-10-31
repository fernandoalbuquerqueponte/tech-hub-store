"use client";
import Image from "next/image";
import {
  BoxIcon,
  CalendarIcon,
  ChevronRight,
  CreditCardIcon,
} from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { DeliveryItemProps } from "./order-product";

import { Badge } from "@/app/_components/ui/badge";
import { Card, CardContent } from "@/app/_components/ui/card";

export function OrderProductButton({
  productItem,
  deliveryItem,
}: DeliveryItemProps) {
  return (
    <Card className="bg-neutral-900">
      <CardContent className="py-5 px-5 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BoxIcon size={20} />
            <h2>
              {deliveryItem.orderStatus === "ORDER_RECEIVED"
                ? "Pedido Recebido"
                : "Entrega em andamento"}
            </h2>
          </div>
          <ChevronRight aria-label="Informações do pedido" size={20} />
        </div>

        <div className="flex items-center gap-3">
          <Image
            alt={productItem.name}
            src={productItem.imageUrl}
            width={100}
            height={100}
          />
          <h1 className="line-clamp-2 text-ellipsis overflow-hidden font-semibold">
            {productItem.name}
          </h1>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <CalendarIcon size={20} />
            <p className="text-[#c4c4c4]">
              {format(
                new Date(deliveryItem.createdAt),
                "dd/MM/yyyy 'ás' HH:mm",
                { locale: ptBR }
              )}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <CreditCardIcon size={20} />
            <p className="text-[#c4c4c4]">Status de pagamento:</p>
            <Badge
              className={
                deliveryItem.paymentStatus === "PAYMENT_CONFIRMED"
                  ? "bg-green-500 text-white"
                  : "bg-blue-500 text-white"
              }
            >
              {deliveryItem.paymentStatus === "PAYMENT_CONFIRMED"
                ? "PAGO"
                : "PAGAMENTO PENDENTE"}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
