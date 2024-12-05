"use client";
import { ShoppingCartIcon } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "../_components/ui/sheet";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

import Link from "next/link";

import MenuContent from "./menu-content";
import CartMenuContent from "./cart-menu";
import Search from "./search";

export default function Header() {
  return (
    <header>
      <Card>
        <CardContent className="flex p-5 h-24 items-center flex-row justify-between gap-7">
          <div className="flex items-center gap-5">
            <Link className="text-lg font-bold" href="/">
              TechHub
            </Link>

            <div className="w-[500px] hidden lg:block">
              <Search />
            </div>
          </div>

          <div className="flex flex-row gap-3 items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button className="w-8 h-8" variant="outline" size="icon">
                  <ShoppingCartIcon size={16} />
                </Button>
              </SheetTrigger>
              <div className="w-px h-7 bg-zinc-700"></div>
              <SheetContent className="p-0">
                <CartMenuContent />
              </SheetContent>
            </Sheet>
            <div>
              <MenuContent />
            </div>
          </div>
        </CardContent>
      </Card>
    </header>
  );
}
