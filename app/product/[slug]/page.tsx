import { db } from "@/app/_lib/prisma";
import { redirect } from "next/navigation";

import ProductDetails from "./_components/product-details";

interface ProductDetailsProps {
  params: {
    slug: string;
  };
}

export default async function ProductDetailsPage({
  params,
}: ProductDetailsProps) {
  const product = await db.product.findUnique({
    where: {
      slug: params.slug,
    },
    include: {
      store: true,
      category: true,
    },
  });

  const featuredProducts = await db.product.findMany({
    where: {
      categoryId: product?.categoryId,
    },
  });

  if (!product) {
    return redirect("/");
  }

  return (
    <div>
      <ProductDetails
        featuredProducts={featuredProducts}
        product={product}
        store={product.store}
      />
    </div>
  );
}
