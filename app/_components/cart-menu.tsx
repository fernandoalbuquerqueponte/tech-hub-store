import CartItem from "./cart-item";
import { SheetHeader, SheetTitle } from "./ui/sheet";

export default function CartMenuContent() {
  return (
    <div>
      <SheetHeader>
        <SheetTitle className="text-left px-5 py-6 text-2xl">
          Carrinho
        </SheetTitle>
      </SheetHeader>
      <div className="py-6 px-5 w-full">
        <CartItem />
      </div>
    </div>
  );
}
