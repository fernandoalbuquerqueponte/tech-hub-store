import { db } from "@/app/_lib/prisma";
import { redirect } from "next/navigation";

interface ProductDetailsProps {
  params: {
    slug: string;
  };
}

export default async function ProductDetails({ params }: ProductDetailsProps) {
  const products = await db.product.findUnique({
    where: {
      slug: params.slug,
    },
  });

  if (!products) {
    return redirect("/");
  }

  return (
    <div>
      <p>{products.name}</p>
    </div>
  );
}
