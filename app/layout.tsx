import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "./_components/header";
import { Toaster } from "./_components/ui/sonner";

import AuthProvider from "./_providers/auth";
import CartProvider from "./_providers/cart-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | TechStore",
    default: "TechStore",
  },
  description:
    "Encontre os melhores produtos de tecnologia na TechStore. Oferecemos smartphones, laptops, acessórios e muito mais com os melhores preços e qualidade garantida.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${inter.className} dark`}>
      <body className={inter.className}>
        <div className="flex h-full flex-col">
          <AuthProvider>
            <CartProvider>
              <Header />
              <div className="flex-1">{children}</div>
            </CartProvider>
          </AuthProvider>
        </div>
      </body>
      <Toaster />
    </html>
  );
}
