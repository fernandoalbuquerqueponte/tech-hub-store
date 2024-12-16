import { Metadata } from "next";
import Link from "next/link";
import getProducts from "../_data/get-product";

import SectionListTitle from "../_components/section-list";
import ProductList from "../_components/product-list";
import Search from "../_components/search";
import Banner from "./_components/banner";

export const metadata: Metadata = {
  title: "Home",
};

export default async function Home() {
  const {
    featuredProductsHome,
    mouseCategory,
    processorCategory,
    keyboardCategory,
  } = await getProducts();

  return (
    <div>
      <div className="hidden lg:block">
        <Link href="/">
          <Banner
            src="/banner-destaques-desktop.png"
            alt="Produtos por até 50% de desconto!"
          />
        </Link>
      </div>

      <div className="w-full px-5 py-6 lg:hidden">
        <Search />
      </div>

      <div className="mx-auto flex flex-col gap-8 py-2 lg:container lg:gap-7">
        <div>
          <Link href="/">
            <Banner
              src="/banner-destaques-mobile.png"
              alt="Produtos até 50% de desconto"
              className="lg:hidden px-5"
            />
          </Link>
        </div>

        <div className="flex flex-col max-w-full px-6 py-6">
          <SectionListTitle title="Em Destaque" />
          <ProductList products={featuredProductsHome ?? []} />
        </div>

        <div className="flex flex-col lg:flex-row">
          <Link href="/" className="flex flex-1">
            <Banner
              src="/banner-mouses-razer.png"
              alt="Mouse Razer até 50% de DESCONTO!"
              className="flex-1 px-5"
            />
          </Link>
          <Link href="/" className="flex flex-1">
            <Banner
              src="/banner-mouses-logitech.png"
              alt="Mouse Logitech até 20% de DESCONTO!"
              className="hidden flex-1 lg:block px-5"
            />
          </Link>
        </div>

        <div className="flex flex-col max-w-full px-6 py-6">
          <SectionListTitle title="Mouses" />
          <ProductList products={mouseCategory ?? []} />
        </div>

        <div className="flex flex-col lg:flex-row">
          <Link href="/" className="flex flex-1">
            <Banner
              src="/banner-teclados-redragon.png"
              alt="Teclado Redragon por 50% de desconto!"
              className="flex-1 px-5"
            />
          </Link>

          <Link href="/" className="flex flex-1">
            <Banner
              src="/banner-teclados-hyperx.png"
              alt="Teclado HyperX Alloy Elite RGB por até 20% de desconto!"
              className="hidden flex-1 lg:block px-5"
            />
          </Link>
        </div>

        <div className="flex flex-col max-w-full px-6 py-6">
          <SectionListTitle title="Teclados" />
          <ProductList products={keyboardCategory ?? []} />
        </div>

        <div className="flex flex-col lg:flex-row">
          <Link href="/" className="flex flex-1">
            <Banner
              src="/banner-processador-intel.png"
              alt="Processador Intel I5 até 50% de DESCONTO!"
              className="flex-1 lg:block px-5"
            />
          </Link>

          <Link href="/" className="flex flex-1">
            <Banner
              src="/banner-processador-ryzen-5.png"
              alt="Processador AMD Ryzen 5 2600 até 50% de DESCONTO!"
              className="hidden flex-1 lg:block px-5"
            />
          </Link>
        </div>

        <div className="flex flex-col max-w-full px-6 py-6">
          <SectionListTitle title="Processadores" />
          <ProductList products={processorCategory ?? []} />
        </div>
      </div>
    </div>
  );
}
