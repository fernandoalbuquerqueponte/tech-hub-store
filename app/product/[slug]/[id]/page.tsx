import { redirect } from "next/navigation";

import getProducts from "@/app/_data/get-product";

import SectionListTitle from "@/app/_components/section-list";
import ProductDetails from "./_components/product-details";
import ProductList from "@/app/_components/product-list";

interface ProductDetailsProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ProductDetailsProps) {
  return {
    title: params.slug,
  };
}

export default async function ProductDetailsPage({
  params,
}: ProductDetailsProps) {
  const { product, featuredProducts } = await getProducts({ params });

  if (!product) {
    return redirect("/");
  }

  return (
    <div className="mx-auto flex flex-col lg:container">
      <ProductDetails
        product={product}
        store={product.store}
        category={product.category}
      />
      <div className="py-7 px-2">
        <SectionListTitle title="PRODUTOS RECOMENDADOS" />
        <ProductList products={featuredProducts} />
      </div>
    </div>
  );
}
