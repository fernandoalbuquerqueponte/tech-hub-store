"use client";
import { Product } from "@prisma/client";
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";

interface CartContextProps extends Product {
  quantity: number;
}

export interface CartProviderProps {
  products: CartContextProps[];
  cartTotalPrice: number;
  cartBasePrice: number;
  cartTotalDiscount: number;
  addProduct: (product: Product) => void;
  incrementProduct: (product: Product) => void;
}
export const CartContext = createContext<CartProviderProps>({
  products: [],
  cartTotalPrice: 0,
  cartBasePrice: 0,
  cartTotalDiscount: 0,
  addProduct: () => {},
  incrementProduct: () => {},
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
  }

  const incrementProduct = useCallback((product: Product) => {
    setProducts((prevItem) => {
      const newProduct = prevItem.map((p) => {
        return p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p;
      });
      localStorage.setItem("@techhub-store", JSON.stringify(newProduct));

      return newProduct;
    });
  }, []);

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
        incrementProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
