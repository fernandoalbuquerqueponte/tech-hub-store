"use client";
import { useContext } from "react";
import { PackageIcon, ShoppingCartIcon, StarIcon } from "lucide-react";
import { ProductWithTotalPrice } from "@/app/_helpers/product-price";
import { CartContext } from "@/app/_providers/cart-provider";
import { Category, Product, Store } from "@prisma/client";
import Image from "next/image";

import SectionListTitle from "@/app/_components/section-list";
import ProductList from "@/app/_components/product-list";
import { Button } from "@/app/_components/ui/button";
import { Badge } from "@/app/_components/ui/badge";

import { toast } from "sonner";
import { format } from "date-fns/format";
import { ptBR } from "date-fns/locale";

interface ProductDetailsProps {
  featuredProducts: Product[];
  product: ProductWithTotalPrice;
  store: Store;
  category: Category;
}

export default function ProductDetails({
  product,
  store,
  featuredProducts,
}: ProductDetailsProps) {
  const { addProduct } = useContext(CartContext);
  async function handleAddProduct(product: Product) {
    try {
      addProduct(product);
    } catch (error) {
      throw new Error();
    } finally {
      toast("Produto adicionado ao carrinho!", {
        description: format(new Date(), " dd 'de' MMMM 'ás' HH':'mm '.'", {
          locale: ptBR,
        }),
      });
    }
  }
  return (
    <div>
      <div className="w-full bg-neutral-900 h-[300px] flex items-center justify-center relative mb-5">
        <Badge className="absolute top-3 right-5 text-lg px-4 bg-primary/30">
          {product.discountPercentage} %
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
          <h2 className="text-2xl font-bold">
            R$ {product.totalPrice.toFixed(2)}
          </h2>
          <span className="text-[#c4c4c4] line-through">
            R$ {Number(product.basePrice).toFixed(2)}
          </span>
        </div>

        <span className="text-[#A1A1AA]">
          Em 12x s/juros de R$ {(product.totalPrice / 12).toFixed(2)}
        </span>

        <Button
          className="w-full my-4"
          variant="default"
          onClick={() => handleAddProduct(product)}
        >
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
