import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { ProductWithTotalPrice } from "../_helpers/product-price";
import Link from "next/link";

interface ProductCardProps {
  product: ProductWithTotalPrice;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="min-w-[156px] min-h-[225]">
      <Link href="/">
        <CardContent className="px-2 py-2 pb-5">
          <div className="flex flex-col gap-1">
            <div className="flex bg-zinc-900 w-full h-[100px] rounded-md justify-center items-center">
              <Image
                width={100}
                height={100}
                className="max-h-[90px] max-w-[90px]"
                src={product.imageUrl}
                alt={product.name}
              />
            </div>
            <h1 className="text-md font-medium text-ellipsis overflow-hidden text-nowrap">
              {product.name}
            </h1>

            <div>
              {product.discountPercentage > 0 ? (
                <div className="text-ellipsis overflow-hidden text-nowrap w-full flex flex-row gap-2 items-center ">
                  <h2 className="text-base ">
                    R$ {product.totalPrice.toFixed(2)}
                  </h2>
                  <span className="text-xs line-through text-[#c4c4c4]">
                    R$ {Number(product.basePrice)}
                  </span>
                </div>
              ) : (
                <div className="text-ellipsis overflow-hidden text-nowrap w-full flex flex-row gap-2 items-center">
                  <h2 className="text-bold">R$ {product.totalPrice}</h2>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
