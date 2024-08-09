"use client";
import { MenuIcon, ShoppingCartIcon } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "../_components/ui/sheet";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

import Link from "next/link";

import MenuContent from "./menu-content";

export default function Header() {
  return (
    <header>
      <Card>
        <CardContent className="flex p-5 h-24 items-center flex-row justify-between">
          <Link className="text-lg font-bold" href="/">
            TechHub
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
                <MenuContent />
              </SheetContent>
            </Sheet>
          </div>
        </CardContent>
      </Card>
    </header>
  );
}
