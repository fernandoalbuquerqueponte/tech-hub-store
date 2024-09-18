import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { ProductWithTotalPrice } from "../_helpers/product-price";
import Link from "next/link";
import DiscountBadgde from "./discount-badge";

interface ProductCardProps {
  product: ProductWithTotalPrice;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="w-full">
      <Link href={`/product/${product.slug}`}>
        <CardContent className="px-2 py-2 pb-5">
          <div className="flex flex-col gap-1">
            <div className="relative flex bg-zinc-900 w-full h-[100px] rounded-md justify-center items-center">
              {product.discountPercentage > 0 && (
                <div className="absolute top-1 left-2">
                  <DiscountBadgde
                    discountPercentage={product.discountPercentage}
                  />
                </div>
              )}
              <Image
                width={100}
                height={100}
                className="max-h-[100px] max-w-[100px]"
                src={product.imageUrl}
                alt={product.name}
              />
            </div>
            <h1 className="text-base font-medium text-ellipsis overflow-hidden text-nowrap">
              {product.name}
            </h1>

            <div>
              {product.discountPercentage > 0 ? (
                <div className="text-ellipsis overflow-hidden text-nowrap w-full flex flex-col gap-1">
                  <h2 className="text-base font-bold">
                    R$ {product.totalPrice.toFixed(2)}
                  </h2>
                  <span className="text-xs line-through text-[#c4c4c4]">
                    R$ {Number(product.basePrice).toFixed(2)}
                  </span>
                </div>
              ) : (
                <div className="text-ellipsis overflow-hidden text-nowrap w-full flex flex-row gap-2 items-center">
                  <h2 className="text-bold">R$ {product.totalPrice}</h2>
                </div>
              )}
              <span className="text-xs text-[#c4c4c4]">Frete grátis</span>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
