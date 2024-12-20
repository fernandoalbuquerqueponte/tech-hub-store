"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import {
  LogInIcon,
  LogOutIcon,
  ShoppingBagIcon,
  UserCircle2Icon,
} from "lucide-react";

import { SheetHeader, SheetTitle } from "../_components/ui/sheet";
import { Avatar, AvatarImage } from "../_components/ui/avatar";
import { Button } from "./ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";

interface MenuContentProps {
  handleCloseSheet: () => void;
}

export default function MenuContent({ handleCloseSheet }: MenuContentProps) {
  const { data: session } = useSession();

  return (
    <>
      <SheetHeader>
        <SheetTitle className="text-left px-5 py-6 text-2xl">Menu</SheetTitle>
      </SheetHeader>
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <Avatar>
            {session?.user ? (
              <AvatarImage src={session?.user?.image ?? undefined} />
            ) : (
              <UserCircle2Icon size={30} />
            )}
          </Avatar>
          <h3 className="font-medium text-md">
            {session?.user ? session.user?.name : "Faça seu Login!"}
          </h3>
        </div>
        {session?.user && (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" size="icon" className="w-9 h-9">
                <LogOutIcon size={16} />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Tem certeza que deseja sair da conta?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  Seus dados estarão seguros e você poderá voltar a qualquer
                  momento.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction onClick={() => signOut()}>
                  Sair da conta
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
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
    </>
  );
}
