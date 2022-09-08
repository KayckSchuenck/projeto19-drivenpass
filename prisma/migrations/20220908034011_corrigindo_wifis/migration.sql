/*
  Warnings:

  - You are about to drop the column `text` on the `wifis` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `wifis` table. All the data in the column will be lost.
  - Added the required column `name` to the `wifis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `wifis` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "wifis" DROP COLUMN "text",
DROP COLUMN "title",
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL;
