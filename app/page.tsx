import { db } from "@/app/_lib/prisma";
import { Card, CardContent } from "./_lib/_components/ui/card";

export default async function Home() {
  const products = await db.product.findMany({
    include: {
      store: true,
    },
  });
  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <p>{product.name}</p>
          </div>
        );
      })}
    </div>
  );
}
