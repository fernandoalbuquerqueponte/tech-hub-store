import { Product } from "@prisma/client";
import { getTotalPrice } from "../_helpers/product-price";
import ProductCard from "./product-card";

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className="flex flex-row gap-4 overflow-hidden overflow-x-auto [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <div key={product.id} className="max-w-[180px] min-w-[180px]">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
