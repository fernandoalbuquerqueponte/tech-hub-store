import ProductCard from "../_components/product-card";
import { db } from "../_lib/prisma";
import { getTotalPrice } from "../_helpers/product-price";
import Search from "../_components/search";

interface ProductsPageProps {
  searchParams: {
    search?: string;
  };
}

export default async function Products({ searchParams }: ProductsPageProps) {
  const products = await db.product.findMany({
    where: {
      name: {
        contains: searchParams.search,
        mode: "insensitive",
      },
    },
  });
  return (
    <div className="flex flex-col items-center justify-center px-5">
      <div className="w-full px-5 py-6">
        <Search />
        <h1 className="text-md pt-4 text-center">
          Resultados para {searchParams.search}
        </h1>
      </div>
      {products.length > 0 ? (
        <div className="grid grid-cols-2 gap-4">
          {products.map((p) => (
            <div className="max-w-[180px] min-w-[180px]" key={p.id}>
              <ProductCard
                product={{
                  ...p,
                  totalPrice: getTotalPrice(p),
                }}
              />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h1 className="text-xl">
            Não foi encontrado nenhum produto com o nome {searchParams.search}
          </h1>
        </div>
      )}
    </div>
  );
}
