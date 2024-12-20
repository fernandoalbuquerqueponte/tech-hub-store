"use client";
import { useContext } from "react";
import Image from "next/image";
import { Category, Product, Store } from "@prisma/client";
import { PackageIcon, ShoppingCartIcon, StarIcon } from "lucide-react";

import { getTotalPrice } from "@/app/_helpers/product-price";
import { CartContext } from "@/app/_providers/cart-provider";

import { Button } from "@/app/_components/ui/button";
import { Badge } from "@/app/_components/ui/badge";
import { toast } from "sonner";
interface ProductDetailsProps {
  product: Product;
  store: Store;
  category: Category;
}

export default function ProductDetails({
  product,
  store,
}: ProductDetailsProps) {
  const { addProduct } = useContext(CartContext);
  async function handleAddProduct(product: Product) {
    try {
      addProduct(product);
      toast.success("Produto adicionado ao carrinho!");
    } catch (error) {
      toast.error("Ocorreu um erro ao adicionar o produto ao carrinho!");
      throw new Error();
    }
  }

  return (
    <div className="lg:grid lg:gap-5 lg:grid-cols-2 lg:mt-6">
      <div className="w-full bg-neutral-900 h-[300px] lg:h-full flex justify-center relative">
        <Badge className="absolute top-3 right-5 text-md px-4 bg-primary/20">
          {product.discountPercentage} %
        </Badge>
        <Image
          alt={product.name}
          src={product.imageUrl}
          width={350}
          height={350}
          quality={100}
          style={{
            objectFit: "contain",
          }}
        />
      </div>

      <div className="lg:space-y-3 py-6 lg:py-0 px-4 lg:px-0">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <span className="text-[#A1A1AA]">
            Vendido e entregue por {store.name}
          </span>
          <div className="flex flex-row gap-3 items-center">
            <StarIcon color="#7c3aed" size={18} />
            <span className="font-bold text-[#A1A1AA]">
              5.0{" "}
              <span className="font-normal">(47 avaliações) 255 Vendidos</span>
            </span>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <PackageIcon size={18} color="#7c3aed" />
            <span className="text-[#A1A1AA]">Frete Grátis</span>
          </div>
        </div>
        <div className="flex flex-row gap-5 items-center mt-2">
          <h2 className="text-2xl font-bold">
            {getTotalPrice(
              Number(product.basePrice) *
                (1 - Number(product.discountPercentage) / 100)
            )}
          </h2>

          <span className="text-[#c4c4c4] line-through">
            {getTotalPrice(Number(product.basePrice))}
          </span>
        </div>
        <span className="text-[#A1A1AA]">
          Em 12x s/juros de R${" "}
          {getTotalPrice(
            (Number(product.basePrice) *
              (1 - product.discountPercentage / 100)) /
              12
          )}
        </span>

        <Button
          className="w-full my-4 lg:my-0"
          onClick={() => handleAddProduct(product)}
        >
          <ShoppingCartIcon size={20} className="mr-2" />
          Adicionar ao Carrinho
        </Button>

        <div className="flex flex-col gap-5 mt-5">
          <h3 className="text-2xl font-bold">Descrição</h3>
          <p className="text-[#A1A1AA] text-sm break-all">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
}
