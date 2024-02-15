/*
  Warnings:

  - Changed the type of `eventTime` on the `Event` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "eventTime",
ADD COLUMN     "eventTime" TIMESTAMP(3) NOT NULL;
