import { useContext } from "react";
import CartItem from "./cart-item";
import { SheetHeader, SheetTitle } from "./ui/sheet";
import { CartContext } from "../_providers/cart-provider";

export default function CartMenuContent() {
  const { products } = useContext(CartContext);
  return (
    <div>
      <SheetHeader>
        <SheetTitle className="text-left px-5 py-6 text-2xl">
          Carrinho ({products.length})
        </SheetTitle>
      </SheetHeader>
      <div className="py-6 px-5 w-full">
        <CartItem />
      </div>
    </div>
  );
}
