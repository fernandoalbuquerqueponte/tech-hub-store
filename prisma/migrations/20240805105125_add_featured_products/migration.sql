-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "featuredProduct" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Store" ADD COLUMN     "featuredStore" BOOLEAN NOT NULL DEFAULT false;
