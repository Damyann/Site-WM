/*
  Warnings:

  - You are about to drop the `DealerGame` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[nickname]` on the table `Dealer` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `games` to the `Dealer` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "DealerGame" DROP CONSTRAINT "DealerGame_dealerId_fkey";

-- AlterTable
ALTER TABLE "Dealer" ADD COLUMN     "games" TEXT NOT NULL;

-- DropTable
DROP TABLE "DealerGame";

-- DropEnum
DROP TYPE "Game";

-- CreateIndex
CREATE UNIQUE INDEX "Dealer_nickname_key" ON "Dealer"("nickname");
