"use client";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Delivery, Product } from "@prisma/client";
import Image from "next/image";
import {
  BoxIcon,
  CalendarIcon,
  ChevronRight,
  CreditCardIcon,
} from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Badge } from "@/app/_components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/_components/ui/sheet";
import { Button } from "@/app/_components/ui/button";
import { getTotalPrice } from "@/app/_helpers/product-price";

interface DeliveryItemProps {
  productItem: Product;
  deliveryItem: Delivery;
}

export default function DeliveryItem({
  productItem,
  deliveryItem,
}: DeliveryItemProps) {
  return (
    <Sheet>
      <SheetTrigger>
        <div>
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
                <ChevronRight size={20} />
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
        </div>
      </SheetTrigger>
      <SheetContent>
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
              <Button className="items-center-center">Confirmar Entrega</Button>
            </div>
          </CardContent>
        </Card>
      </SheetContent>
    </Sheet>
  );
}
