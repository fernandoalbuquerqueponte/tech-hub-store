import { Product } from "@prisma/client";

export interface ProductWithTotalPrice extends Product {
  totalPrice: number;
}

export const getTotalPrice = (product: Product) => {
  if (product.discountPercentage === 0) {
    return Number(product.basePrice);
  }

  const totalDiscount =
    Number(product.basePrice) * (product.discountPercentage / 100);

  return Number(product.basePrice) - totalDiscount;
};