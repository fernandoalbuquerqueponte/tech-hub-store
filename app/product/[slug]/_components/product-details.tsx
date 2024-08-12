import { Product, Store } from "@prisma/client";
import Image from "next/image";

import {
  ChevronLeftIcon,
  PackageIcon,
  ShoppingCartIcon,
  StarIcon,
} from "lucide-react";

import SectionListTitle from "@/app/_components/section-list";
import ProductList from "@/app/_components/product-list";
import { Button } from "@/app/_components/ui/button";
import { Badge } from "@/app/_components/ui/badge";

interface ProductDetailsProps {
  featuredProducts: Product[];
  product: Product;
  store: Store;
}

export default function ProductDetails({
  product,
  store,
  featuredProducts,
}: ProductDetailsProps) {
  return (
    <div>
      <div className="w-full bg-neutral-900 h-[300px] flex items-center justify-center relative mb-5">
        <Button className="absolute top-3 left-5" variant="outline" size="icon">
          <ChevronLeftIcon size={20} />
        </Button>
        <Badge className="absolute top-3 right-5 text-lg px-4 bg-violet-600">
          {product.discountPercentage}%
        </Badge>
        <Image
          alt={product.name}
          src={product.imageUrl}
          width={300}
          height={300}
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      <div className="px-5">
        <h1 className="text-2xl font-medium w-full ">{product.name}</h1>

        <div className="flex flex-col gap-1">
          <span className="text-[#A1A1AA]">
            Vendido e entregue por {store.name}
          </span>
          <div className="flex flex-row gap-3">
            <StarIcon color="#7c3aed" size={20} />
            <span className="font-bold text-[#A1A1AA]">
              5.0{" "}
              <span className="font-normal">(47 avaliações) 255 Vendidos</span>
            </span>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <PackageIcon size={20} color="#7c3aed" />
            <span className="text-[#A1A1AA]">Frete Grátis</span>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center py-2">
          <h2 className="text-2xl font-bold">R$ 450,00</h2>
          <span className="text-[#c4c4c4] line-through">{`R$ ${product.basePrice.toFixed(
            2
          )}`}</span>
        </div>

        <span className="text-[#A1A1AA]">Em 12x s/juros de R$ 35,00</span>

        <Button className="w-full my-4" variant="default">
          <ShoppingCartIcon size={20} className="mr-2" />
          Comprar Agora
        </Button>

        <h3 className="text-2xl py-3">Descrição</h3>
        <p className="text-[#A1A1AA] break-all">{product.description}</p>

        <div className="py-6">
          <SectionListTitle title="PRODUTOS RECOMENDADOS" />
          <ProductList products={featuredProducts} />
        </div>
      </div>
    </div>
  );
}
