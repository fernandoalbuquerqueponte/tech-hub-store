"use client";
import { Product } from "@prisma/client";
import { createContext, ReactNode, useEffect, useState } from "react";

interface CartContextProps extends Product {
  quantity: number;
}

export interface CartProviderProps {
  products: CartContextProps[];
  cartTotalPrice: number;
  cartBasePrice: number;
  cartTotalDiscount: number;
  addProduct: (product: Product) => void;
}
export const CartContext = createContext<CartProviderProps>({
  products: [],
  cartTotalPrice: 0,
  cartBasePrice: 0,
  cartTotalDiscount: 0,
  addProduct: () => {},
});

export default function CartProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<CartContextProps[]>([]);

  function addProduct(product: Product) {
    setProducts((prevItem) => {
      const isProductInCart = products.some((p) => p.id === product.id);
      if (!!isProductInCart) {
        const updatedProducts = prevItem.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
        localStorage.setItem("@techhub-store", JSON.stringify(updatedProducts));
        return updatedProducts;
      } else {
        const newProduct: CartContextProps = {
          ...product,
          quantity: 1,
        };

        const newProducts = [...prevItem, newProduct];

        localStorage.setItem("@techhub-store", JSON.stringify(newProducts));
        return newProducts;
      }
    });
    console.log({ products });
  }

  useEffect(() => {
    const storedData = localStorage.getItem("@techhub-store");

    const parsedData = storedData ? JSON.parse(storedData) : [];
    setProducts(parsedData);
  }, []);

  return (
    <CartContext.Provider
      value={{
        products,
        cartTotalPrice: 0,
        cartBasePrice: 0,
        cartTotalDiscount: 0,
        addProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
