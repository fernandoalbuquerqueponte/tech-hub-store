-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('WAITING_FOR_PAYMENT', 'PAYMENT_CONFIRMED');

-- AlterTable
ALTER TABLE "Delivery" ADD COLUMN     "paymentStatus" "PaymentStatus" NOT NULL DEFAULT 'WAITING_FOR_PAYMENT';
