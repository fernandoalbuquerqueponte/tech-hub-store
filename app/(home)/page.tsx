import { db } from "@/app/_lib/prisma";
import Search from "../_components/search";

export default async function Home() {
  const products = await db.product.findMany({
    include: {
      store: true,
    },
  });
  return (
    <div className="py-6 px-6 flex flex-col gap-3 items-center">
      <div className="w-full mb-6">
        <Search />
      </div>
    </div>
  );
}
