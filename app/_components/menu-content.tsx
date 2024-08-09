"use client";
import {
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  UserCircle2Icon,
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
import { signIn, signOut, useSession } from "next-auth/react";

export default function MenuContent() {
  const { data: session } = useSession();
  return (
    <div>
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
          <h3 className="font-medium text-sm">
            {session?.user ? session.user?.name : "Faça seu Login!"}
          </h3>
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
            <Button className="w-full" variant="outline">
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
    </div>
  );
}
