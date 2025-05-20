/*
  Warnings:

  - You are about to drop the `Dealer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Dealer";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "fullname" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "games" TEXT[],

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_nickname_key" ON "User"("nickname");
