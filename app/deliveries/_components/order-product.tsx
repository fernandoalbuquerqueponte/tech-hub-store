"use client";
import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { recieveProduct } from "../_actions/receiveProduct";
import { Delivery, Product } from "@prisma/client";

interface DeliveryItemProps {
  productItem: Product;
  deliveryItem: Delivery;
}

export default function DeliveryItem({
  productItem,
  deliveryItem,
}: DeliveryItemProps) {
  async function handleRecieveDelivery() {
    await recieveProduct(deliveryItem);
  }
  return (
    <div>
      {deliveryItem.orderStatus === "ORDER_RECEIVED" ? (
        <Card className="py-3 w-full bg-zinc-900">
          <CardContent className="flex flex-col gap-4">
            <div className="w-auto">
              <Badge className="bg-zinc-600">Pedido Recebido</Badge>
            </div>
            <h1 className="text-ellipsis text-nowrap overflow-hidden">
              {productItem.name}
            </h1>
            <Button className="bg-zinc-600" onClick={handleRecieveDelivery}>
              Avaliar Pedido
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Card className="py-3 w-full bg-zinc-900">
          <CardContent className="flex flex-col gap-4">
            <div className="w-auto">
              <Badge className="bg-green-700">Entrega em Andamento</Badge>
            </div>
            <h1 className="text-ellipsis text-nowrap overflow-hidden">
              {productItem.name}
            </h1>
            <Button className="bg-green-700" onClick={handleRecieveDelivery}>
              Confirmar Pedido
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
