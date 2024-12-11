"use client";
import { MenuIcon, ShoppingCartIcon } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "../_components/ui/sheet";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

import Link from "next/link";

import MenuContent from "./menu-content";
import CartMenuContent from "./cart-menu";
import Search from "./search";
import { useState } from "react";

export default function Header() {
  const [sheetOpen, setSheetOpen] = useState(false);

  function handleCloseSheet() {
    setSheetOpen(false);
  }

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
                <Button className="w-9 h-9" variant="outline" size="icon">
                  <ShoppingCartIcon size={17} />
                </Button>
              </SheetTrigger>
              <div className="w-px h-7 bg-zinc-700"></div>
              <SheetContent className="w-[370px] lg:w-[600px] lg:max-w-[600px] p-0">
                <CartMenuContent />
              </SheetContent>
            </Sheet>
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button className="w-9 h-9" variant="outline" size="icon">
                  <MenuIcon size={17} />
                </Button>
              </SheetTrigger>
              <SheetContent className="p-0">
                <MenuContent handleCloseSheet={handleCloseSheet} />
              </SheetContent>
            </Sheet>
          </div>
        </CardContent>
      </Card>
    </header>
  );
}
