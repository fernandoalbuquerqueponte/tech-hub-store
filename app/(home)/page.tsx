import { db } from "@/app/_lib/prisma";
import Search from "../_components/search";
import ProductCard from "../_components/product-card";
import { getTotalPrice } from "../_helpers/product-price";
export default async function Home() {
  const products = await db.product.findMany({
    include: {
      store: true,
    },
  });
  return (
    <div className="py-6 px-6 flex flex-col gap-3 items-center">
      <div className="w-full mb-6">
        <Search />
      </div>

      <div>
        <h2 className="font-xl">
          Olá, <span className="font-bold">Fernando Albuquerque!</span>
        </h2>
        <p className="font-sm capitalize">Quinta, 28 de Julho.</p>
      </div>

      <div className="flex flex-row gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden w-full">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={{
              ...product,
              totalPrice: getTotalPrice(product),
            }}
          />
        ))}
      </div>
    </div>
  );
}
