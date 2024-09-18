import { db } from "@/app/_lib/prisma";

import SectionListTitle from "../_components/section-list";
import ProductList from "../_components/product-list";
import Search from "../_components/search";
import Banner from "./_components/banner";

import banner1 from "../../public/banner1.png";
import banner2 from "../../public/banner2.png";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "../_lib/auth";
import { format } from "date-fns/format";
import { ptBR } from "date-fns/locale/pt-BR";

export default async function Home() {
  const featuredProducts = await db.product.findMany({
    where: {
      featuredProduct: true,
    },
  });
  const mouseCategory = await db.product.findMany({
    where: {
      category: {
        name: "Mouses",
      },
    },
  });
  const processorCategory = await db.product.findMany({
    where: {
      category: {
        name: "Processadores",
      },
    },
    include: {
      category: true,
    },
  });
  const keyboardCategory = await db.product.findMany({
    where: {
      category: {
        name: "Teclados",
      },
    },
  });

  const session = await getServerSession(authOptions);
  return (
    <div>
      <div className="w-full mb-6 px-5 py-6">
        <Search />
      </div>

      <div className="flex flex-col items-center justify-center">
        <h2 className="text-xl">
          Olá,{" "}
          <span className="font-bold">
            {session?.user ? session.user?.name : "Faça seu login!"}
          </span>
        </h2>
        <p className="font-sm capitalize">
          {format(new Date(), "EEE, dd 'de' MMMM", {
            locale: ptBR,
          })}
        </p>
      </div>

      <div className="flex flex-col max-w-full px-6 py-6">
        <SectionListTitle title="Em Destaque" />
        <ProductList products={featuredProducts} />
      </div>
      <div className="flex flex-col max-w-full px-6 py-6">
        <SectionListTitle title="Mouses" />
        <ProductList products={mouseCategory} />
      </div>
      <div className="flex flex-col max-w-full px-6 py-6">
        <SectionListTitle title="Teclados" />
        <ProductList products={keyboardCategory} />
      </div>
      <div className="flex flex-col max-w-full px-6 py-6">
        <SectionListTitle title="Processadores" />
        <ProductList products={processorCategory} />
      </div>
    </div>
  );
}
