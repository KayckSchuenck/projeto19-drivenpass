/*
  Warnings:

  - You are about to drop the column `name` on the `cards` table. All the data in the column will be lost.
  - You are about to drop the column `number` on the `cards` table. All the data in the column will be lost.
  - Added the required column `cardNumber` to the `cards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `holderName` to the `cards` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cards" DROP COLUMN "name",
DROP COLUMN "number",
ADD COLUMN     "cardNumber" TEXT NOT NULL,
ADD COLUMN     "holderName" TEXT NOT NULL;
