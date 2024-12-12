import Image from "next/image";
import Link from "next/link";

import { Product } from "@prisma/client";
import { getTotalPrice } from "../_helpers/product-price";

import DiscountBadgde from "./discount-badge";
import { Card, CardContent } from "./ui/card";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.slug}/${product.id}`}>
      <Card className="w-full">
        <CardContent className="px-2 py-2 pb-4">
          <div className="flex flex-col gap-1">
            <div className="relative flex bg-zinc-900 w-full h-[135px] rounded-md justify-center items-center">
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
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <h1 className="font-medium text-ellipsis overflow-hidden text-nowrap">
              {product.name}
            </h1>

            <div>
              {product.discountPercentage > 0 ? (
                <div className="text-ellipsis overflow-hidden text-nowrap w-full flex flex-col gap-1">
                  <h2 className=" font-bold">
                    {getTotalPrice(
                      Number(product.basePrice) *
                        (1 - product.discountPercentage / 100)
                    )}
                  </h2>

                  <span className="text-xs line-through text-[#c4c4c4]">
                    R$ {Number(product.basePrice).toFixed(2)}
                  </span>
                </div>
              ) : (
                <div className="text-ellipsis overflow-hidden text-nowrap w-full flex flex-row gap-2 items-center">
                  <h2 className="text-bold">
                    {getTotalPrice(Number(product.basePrice))}
                  </h2>
                </div>
              )}
              <span className="text-xs text-[#c4c4c4]">Frete grátis</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
