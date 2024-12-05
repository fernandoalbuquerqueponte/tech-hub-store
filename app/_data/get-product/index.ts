import { db } from "../../_lib/prisma";

interface GetProductsProps {
  params?: {
    slug?: string;
    id?: string;
  };
}

export default async function getProducts({ params }: GetProductsProps = {}) {
  if (params?.slug) {
    const product = await db.product.findUnique({
      where: {
        slug: params?.slug,
        id: params?.id,
      },
      include: {
        store: true,
        category: true,
      },
    });

    if (!product) {
      throw new Error("Produto não encontrado");
    }

    const featuredProducts = await db.product.findMany({
      where: {
        categoryId: product.categoryId,
      },
      take: 10,
    });

    return {
      product,
      featuredProducts: featuredProducts,
    };
  }

  const featuredProductsHome = await db.product.findMany({
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

  return {
    featuredProductsHome,
    mouseCategory,
    processorCategory,
    keyboardCategory,
  };
}
