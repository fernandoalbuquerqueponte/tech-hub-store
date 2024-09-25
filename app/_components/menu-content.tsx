"use client";
import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import {
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  ShoppingBagIcon,
  UserCircle2Icon,
} from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../_components/ui/sheet";
import { Avatar, AvatarImage } from "../_components/ui/avatar";
import { Button } from "./ui/button";

export default function MenuContent() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const { data: session } = useSession();

  function handleCloseSheet() {
    setSheetOpen(false);
  }
  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger asChild>
        <Button className="w-8 h-8" variant="outline" size="icon">
          <MenuIcon size={16} />
        </Button>
      </SheetTrigger>
      <SheetContent className="p-0">
        <SheetHeader>
          <SheetTitle className="text-left px-5 py-6 text-2xl">Menu</SheetTitle>
        </SheetHeader>
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Avatar>
              {session?.user ? (
                <AvatarImage src={session?.user?.image ?? undefined} />
              ) : (
                <div className="flex items-center">
                  <UserCircle2Icon size={30} />
                </div>
              )}
            </Avatar>
            <div className="flex flex-col">
              <h3 className="font-medium text-md">
                {session?.user ? session.user?.name : "Faça seu Login!"}
              </h3>
              <h4 className="text-sm text-[#c4c4c4]">{session?.user?.email}</h4>
            </div>
          </div>
          {session?.user && (
            <Button
              variant="outline"
              size="icon"
              className="w-9 h-9"
              onClick={() => signOut()}
            >
              <LogOutIcon size={16} />
            </Button>
          )}
        </div>

        <div className="px-5 py-4">
          {session?.user ? (
            <Link href="/deliveries">
              <Button
                className="w-full"
                variant="outline"
                onClick={handleCloseSheet}
              >
                <ShoppingBagIcon className="mr-3" size={20} />
                Meus Pedidos
              </Button>
            </Link>
          ) : (
            <Button
              className="w-full"
              variant="outline"
              onClick={() => signIn("google")}
            >
              <LogInIcon className="mr-3" size={20} />
              Fazer Login
            </Button>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
