/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Delivery` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `Delivery` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `Delivery` table. All the data in the column will be lost.
  - You are about to drop the column `storeId` on the `Delivery` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Delivery" DROP CONSTRAINT "Delivery_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "Delivery" DROP CONSTRAINT "Delivery_productId_fkey";

-- DropForeignKey
ALTER TABLE "Delivery" DROP CONSTRAINT "Delivery_storeId_fkey";

-- AlterTable
ALTER TABLE "Delivery" DROP COLUMN "categoryId",
DROP COLUMN "date",
DROP COLUMN "productId",
DROP COLUMN "storeId";

-- CreateTable
CREATE TABLE "DeliveryItem" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "deliveryId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "basePrice" DECIMAL(8,2) NOT NULL,

    CONSTRAINT "DeliveryItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DeliveryItem" ADD CONSTRAINT "DeliveryItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeliveryItem" ADD CONSTRAINT "DeliveryItem_deliveryId_fkey" FOREIGN KEY ("deliveryId") REFERENCES "Delivery"("id") ON DELETE CASCADE ON UPDATE CASCADE;
