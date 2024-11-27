import SectionListTitle from "../_components/section-list";
import ProductList from "../_components/product-list";
import Search from "../_components/search";

import { getServerSession } from "next-auth";
import { authOptions } from "../_lib/auth";
import getProducts from "../_data/get-product";

export default async function Home() {
  const {
    featuredProductsHome,
    mouseCategory,
    processorCategory,
    keyboardCategory,
  } = await getProducts();

  return (
    <div>
      <div className="w-full mb-6 px-5 py-6">
        <Search />
      </div>

      <div className="flex flex-col max-w-full px-6 py-6">
        <SectionListTitle title="Em Destaque" />
        <ProductList products={featuredProductsHome ?? []} />
      </div>
      <div className="flex flex-col max-w-full px-6 py-6">
        <SectionListTitle title="Mouses" />
        <ProductList products={mouseCategory ?? []} />
      </div>
      <div className="flex flex-col max-w-full px-6 py-6">
        <SectionListTitle title="Teclados" />
        <ProductList products={keyboardCategory ?? []} />
      </div>
      <div className="flex flex-col max-w-full px-6 py-6">
        <SectionListTitle title="Processadores" />
        <ProductList products={processorCategory ?? []} />
      </div>
    </div>
  );
}
