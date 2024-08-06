import {
  LogOutIcon,
  MenuIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
} from "lucide-react";

import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../_components/ui/sheet";

import { Avatar, AvatarFallback, AvatarImage } from "../_components/ui/avatar";

export default function Header() {
  return (
    <header>
      <Card>
        <CardContent className="flex p-5 h-24 items-center flex-row justify-between">
          <Link className="text-lg font-bold" href="/">
            TecHub
          </Link>
          <div className="flex flex-row gap-5">
            <Button className="w-8 h-8" variant="outline" size="icon">
              <ShoppingCartIcon size={16} />
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button className="w-8 h-8" variant="outline" size="icon">
                  <MenuIcon size={16} />
                </Button>
              </SheetTrigger>
              <SheetContent className="p-0">
                <SheetHeader>
                  <SheetTitle className="text-left px-5 py-6 text-2xsl">
                    Menu
                  </SheetTitle>
                </SheetHeader>
                <div className="flex items-center justify-between px-6 py-4">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="https://firebasestorage.googleapis.com/v0/b/finances-dashboard-2e51c.appspot.com/o/images%2FNxDpa3215whAbAwhmLosT5SWXI52%2FFB_IMG_1697937897105.jpg?alt=media&token=beb938c8-dc69-417b-a487-3792d323a72b" />
                      <AvatarFallback>AM</AvatarFallback>
                    </Avatar>
                    <h3 className="font-medium text-sm">
                      Abreu Motta Rei Delas
                    </h3>
                  </div>
                  <Button variant="outline" size="icon" className="w-9 h-9">
                    <LogOutIcon size={16} />
                  </Button>
                </div>

                <div className="px-5 py-4">
                  <Link href="/deliveries">
                    <Button className="w-full" variant="outline">
                      <ShoppingBagIcon className="mr-3" size={20} />
                      Meus Pedidos
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </CardContent>
      </Card>
    </header>
  );
}
