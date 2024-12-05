import { redirect } from "next/navigation";
import ProductDetails from "./_components/product-details";
import { getTotalPrice } from "@/app/_helpers/product-price";
import getProducts from "@/app/_data/get-product";

interface ProductDetailsProps {
  params: {
    slug: string;
  };
}

export default async function ProductDetailsPage({
  params,
}: ProductDetailsProps) {
  const { product, featuredProducts } = await getProducts({ params });
  console.log({ params });

  if (!product) {
    return redirect("/");
  }

  return (
    <div>
      <ProductDetails
        featuredProducts={JSON.parse(JSON.stringify(featuredProducts))}
        product={JSON.parse(
          JSON.stringify({
            ...product,
            totalPrice: getTotalPrice(product),
          })
        )}
        store={product.store}
        category={product.category}
      />
    </div>
  );
}
