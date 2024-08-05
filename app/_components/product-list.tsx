import { Product } from "@prisma/client";
import { getTotalPrice } from "../_helpers/product-price";
import ProductCard from "./product-card";

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className="flex flex-row gap-3 overflow-hidden overflow-x-auto [&::-webkit-scrollbar]:hidden">
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
  );
}
