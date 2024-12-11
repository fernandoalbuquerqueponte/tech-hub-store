"use client";
import { useContext, useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  Loader2,
  ShoppingCartIcon,
  Trash2Icon,
} from "lucide-react";

import { CartContext } from "../_providers/cart-provider";
import { getTotalPrice } from "../_helpers/product-price";
import { saveProduct } from "../_actions/save-product";
import { createCheckout } from "../_actions/checkout";
import { loadStripe } from "@stripe/stripe-js";

import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { toast } from "sonner";
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
import Link from "next/link";

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
      toast.error("Faça login para continuar a compra ");
      return;
    }

    try {
      setLoading(true);
      const delivery = await saveProduct(products, (data?.user as any).id);

      const checkout = await createCheckout(products, delivery.id);

      if (!process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY) {
        throw new Error("Chave pública do Stripe não está configurada.");
      }

      const stripe = await loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY
      );

      stripe?.redirectToCheckout({
        sessionId: checkout.id,
      });
    } catch (error) {
      toast.error("Erro ao continuar a compra");
      console.error("Erro ao fazer processamento da compra.", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-6 px-7">
      {products.map((product) => (
        <div key={product.id} className="flex flex-row gap-2">
          <Link href={`/product/${product.slug}/${product.id}`}>
            <Image
              src={product.imageUrl}
              width={100}
              height={100}
              alt={product.name}
              style={{
                objectFit: "contain",
              }}
            />
          </Link>

          <div className="flex flex-col gap-2 w-full">
            <div className="space-y-2">
              <h1 className="font-bold">{product.name}</h1>
              <div className="flex flex-row items-center gap-3">
                <h2 className="font-medium text-md">
                  {Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(total)}
                </h2>
                <h4 className="font-medium text-sm line-through text-neutral-400">
                  {Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(subtotal)}
                </h4>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-row gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleDecrement(product.id)}
                >
                  <ChevronLeftIcon size={18} />
                </Button>

                <div className="flex items-center">
                  <span>{product.quantity}</span>
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleIncrement(product.id)}
                >
                  <ChevronRightIcon size={18} />
                </Button>
              </div>

              <div className="ml-2">
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
        </div>
      ))}
      <div className="py-7">
        {products.length > 0 ? (
          <Card>
            <CardContent className="py-5">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                  <h1>Subtotal</h1>
                  <h2>
                    {Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(subtotal)}
                  </h2>
                </div>
                <div className="flex justify-between">
                  <h1>Entrega</h1>
                  <h2>R$ 00,00</h2>
                </div>
                <div className="flex justify-between">
                  <h1>Descontos</h1>
                  <h2>
                    -{" "}
                    {Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(discount)}
                  </h2>
                </div>
                <div className="flex justify-between">
                  <h1 className="font-bold">Total</h1>
                  <h2 className="font-bold">
                    {Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(total)}
                  </h2>
                </div>

                <Button onClick={handleCreateOrder} className="w-full">
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {loading ? "Carregando" : "Confirmar Compra"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="flex flex-col gap-2 justify-center items-center">
            <Image
              src="/cart-empyt.png"
              height={250}
              width={250}
              quality={100}
              alt="Carrinho vazio"
            />
            <h1 className="font-bold text-xl">Seu carrinho está vazio</h1>
            <span className="text-center text-sm text-[#C4C4C4]">
              Dê uma olhada em nossa seleção e escolha o que mais gosta!
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
