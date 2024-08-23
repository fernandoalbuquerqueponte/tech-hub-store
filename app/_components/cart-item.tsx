import Image from "next/image";
import { Button } from "./ui/button";
import { ChevronLeftIcon, ChevronRightIcon, Trash2Icon } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../_providers/cart-provider";
import { Product } from "@prisma/client";

export default function CartItem() {
  const { products, incrementProduct, decrementProduct, removeProduct } =
    useContext(CartContext);

  function handleIncrement(productId: string) {
    incrementProduct(productId);
  }

  function handleDecrement(productId: string) {
    decrementProduct(productId);
  }

  function handleRemoveProduct(productId: string) {
    removeProduct(productId);
  }
  return (
    <div className="flex flex-col gap-6">
      {products.map((product) => (
        <div key={product.id} className="flex flex-row gap-3">
          <Image
            src={product.imageUrl}
            width={100}
            height={100}
            style={{
              objectFit: "contain",
            }}
            alt={product.name}
          />

          <div className="flex flex-col gap-2 w-full">
            <h1>{product.name}</h1>
            <h2>R$ {Number(product.basePrice)}</h2>
            <div className="flex justify-between w-full">
              <div className="flex flex-row gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleDecrement(product.id)}
                >
                  <ChevronLeftIcon size={20} />
                </Button>

                <span className="text-center">{product.quantity}</span>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleIncrement(product.id)}
                >
                  <ChevronRightIcon size={20} />
                </Button>
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleRemoveProduct(product.id)}
              >
                <Trash2Icon size={20} />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
