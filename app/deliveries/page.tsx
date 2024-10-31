import { db } from "../_lib/prisma";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "../_lib/auth";
import DeliveryItem from "./_components/order-product";

export default async function Orders() {
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

      {receivedProducts.length > 0 && (
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
      )}
    </div>
  );
}
