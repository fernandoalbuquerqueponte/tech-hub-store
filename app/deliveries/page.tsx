import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import { db } from "../_lib/prisma";
import { authOptions } from "../_lib/auth";

import DeliveryItem from "./_components/order-product";
import { Button } from "../_components/ui/button";

import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Meus produtos",
};

export default async function OrdersPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return redirect("/");
  }

  const receivedProducts = await db.deliveryItem.findMany({
    where: {
      delivery: {
        orderStatus: "ORDER_RECEIVED",
        paymentStatus: "PAYMENT_CONFIRMED",
      },
    },
    include: {
      delivery: true,
      product: true,
    },
  });

  const inProgress = await db.deliveryItem.findMany({
    where: {
      delivery: {
        orderStatus: "DELIVERY_IN_PROGRESS",
      },
    },
    include: {
      delivery: true,
      product: true,
    },
  });

  const noProducts = receivedProducts.length === 0 && inProgress.length === 0;

  return (
    <div>
      <h1 className="font-bold text-xl px-6 py-6">MEUS PRODUTOS</h1>

      {inProgress.length > 0 && (
        <div className="flex flex-col gap-5 px-5 py-6">
          <h1 className="px-5 font-bold text-xl">ENTREGAS EM ANDAMENTO</h1>
          {inProgress.map((deliverie) => (
            <div key={deliverie.id}>
              <DeliveryItem
                deliveryItem={deliverie.delivery}
                productItem={deliverie.product}
              />
            </div>
          ))}
        </div>
      )}

      {receivedProducts.length > 0 ? (
        <div className="flex flex-col gap-5 px-5 py-6">
          <h1 className="px-5 text-xl font-bold">PEDIDOS ENTREGUES</h1>
          {receivedProducts.map((deliverie) => (
            <div key={deliverie.id}>
              <DeliveryItem
                deliveryItem={deliverie.delivery}
                productItem={deliverie.product}
              />
            </div>
          ))}
        </div>
      ) : null}

      {noProducts && (
        <div className="w-full flex flex-col items-center justify-center py-9">
          <h1 className="px-5 text-xl font-bold">Nenhum produto encontrado.</h1>
          <p className="px-5 text-sm">Você não possui nenhum produto salvo.</p>

          <Image
            src="/no-products.png"
            width={250}
            height={250}
            quality={100}
            alt="Nenhum produto encontrado."
          />

          <Link href="/">
            <Button>Procurar produtos</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
