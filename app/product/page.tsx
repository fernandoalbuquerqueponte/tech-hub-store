import Image from "next/image";
import { db } from "../_lib/prisma";

import Search from "../_components/search";
import ProductCard from "../_components/product-card";

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
      <div className="w-full py-6 lg:py-6 lg:hidden">
        <Search />
      </div>
      <h1 className="text-lg font-bold py-9">
        Resultados para: {`"${searchParams.search}"`}
      </h1>
      {products.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
          {products.map((product) => (
            <div
              className="lg:max-w-[250px] lg:min-w-[250px] max-w-[180px] min-w-[180px]"
              key={product.id}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-lg">
            Não foi encontrado nenhum produto com o nome {searchParams.search}
          </h1>

          <Image
            src="/no-results.png"
            width={250}
            height={250}
            quality={100}
            alt={`Sem resultados para ${searchParams.search}`}
          />
        </div>
      )}
    </div>
  );
}
