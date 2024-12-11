import { useContext } from "react";
import CartItem from "./cart-item";
import { SheetHeader, SheetTitle } from "./ui/sheet";
import { CartContext } from "../_providers/cart-provider";
import { ScrollArea } from "./ui/scroll-area";

export default function CartMenuContent() {
  const { products } = useContext(CartContext);
  return (
    <ScrollArea className="h-full">
      <SheetHeader>
        <SheetTitle className="text-left px-5 py-6 text-2xl">
          Carrinho ({products.length})
        </SheetTitle>
      </SheetHeader>
      <div className="py-5 px-2">
        <CartItem />
      </div>
    </ScrollArea>
  );
}
