import { db } from "../_lib/prisma";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "../_lib/auth";

export default async function Deliveries() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return redirect("/");
  }

  const deliveries = await db.delivery.findMany({
    where: {
      userId: (session?.user as any).id,
    },
    include: {
      product: true,
    },
  });
  return (
    <div>
      {deliveries.map((deliverie) => (
        <div key={deliverie.id}>
          <h1>{deliverie.product.name}</h1>
        </div>
      ))}
    </div>
  );
}
