"use client";
import { Product } from "@prisma/client";
import { createContext, ReactNode } from "react";

interface CartContext extends Product {
  quantity: number;
}

interface CartProviderProps {
  products: CartContext[];
  cartTotalPrice: number;
  cartBasePrice: number;
  cartTotalDiscount: number;
}
const CartContext = createContext<CartProviderProps>({
  products: [],
  cartTotalPrice: 0,
  cartBasePrice: 0,
  cartTotalDiscount: 0,
});

export default function CartProvider({ children }: { children: ReactNode }) {
  return (
    <CartContext.Provider
      value={{
        products: [],
        cartTotalPrice: 0,
        cartBasePrice: 0,
        cartTotalDiscount: 0,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
