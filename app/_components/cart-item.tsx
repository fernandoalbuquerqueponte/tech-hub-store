"use client";
import { useContext, useState } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  Loader2,
  Trash2Icon,
} from "lucide-react";
import { CartContext } from "../_providers/cart-provider";
import { getTotalPrice } from "../_helpers/product-price";
import Image from "next/image";

import { toast } from "sonner";

import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { saveProduct } from "../_actions/save-product";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { createCheckout } from "../_actions/checkout";

import { loadStripe } from "@stripe/stripe-js";

export default function CartItem() {
  const [loading, setLoading] = useState(false);
  const {
    products,
    incrementProduct,
    decrementProduct,
    removeProduct,
    subtotal,
    total,
    discount,
  } = useContext(CartContext);

  const { data } = useSession();
  const router = useRouter();

  function handleIncrement(productId: string) {
    incrementProduct(productId);
  }

  function handleDecrement(productId: string) {
    decrementProduct(productId);
  }

  async function handleRemoveProduct(productId: string) {
    removeProduct(productId);
  }

  async function handleCreateOrder() {
    if (!data?.user) {
      return;
    }

    const delivery = await saveProduct(products, (data?.user as any).id);

    const checkout = await createCheckout(products, delivery.id);
    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

    stripe?.redirectToCheckout({
      sessionId: checkout.id,
    });
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
            <h2>R$ {getTotalPrice(product).toFixed(2)}</h2>
            <div className="flex justify-between w-full">
              <div className="flex flex-row gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleDecrement(product.id)}
                >
                  <ChevronLeftIcon size={20} />
                </Button>

                <div className="flex items-center">
                  <span>{product.quantity}</span>
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleIncrement(product.id)}
                >
                  <ChevronRightIcon size={20} />
                </Button>
              </div>

              <AlertDialog>
                <AlertDialogTrigger>
                  <Button variant="outline" size="icon">
                    <Trash2Icon size={20} />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Tem certeza que deseja remover o item do carrinho?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      Essa ação é irreversivel
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() => handleRemoveProduct(product.id)}
                    >
                      Remover Produto
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>
      ))}
      <div className="py-7">
        {products.length > 0 ? (
          <Card>
            <CardContent className="py-5">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                  <h1>Subtotal</h1>
                  <h2>R$ {subtotal.toFixed(2)}</h2>
                </div>
                <div className="flex justify-between">
                  <h1>Entrega</h1>
                  <h2>R$ 00,00</h2>
                </div>
                <div className="flex justify-between">
                  <h1>Descontos</h1>
                  <h2>- R$ {discount.toFixed(2)}</h2>
                </div>
                <div className="flex justify-between">
                  <h1 className="font-bold">Total</h1>
                  <h2 className="font-bold">R$ {Number(total).toFixed(2)}</h2>
                </div>

                <Button onClick={handleCreateOrder} className="w-full">
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {loading ? "Carregando" : "Confirmar Compra"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="w-full h-full flex flex-col gap-2">
            <h1 className="font-bold text-xl">
              Você ainda não adicionou nada ao seu carrinho.
            </h1>
            <span className="text-center text-sm text-[#C4C4C4]">
              Dê uma olhada em nossa seleção e escolha o que mais gosta!
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
