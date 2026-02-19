-- CreateEnum
CREATE TYPE "ErrorInput" AS ENUM ('TEXT', 'IMG');

-- CreateEnum
CREATE TYPE "SolSource" AS ENUM ('AI', 'DB', 'STACK_OVERFLOW');

-- CreateEnum
CREATE TYPE "ErrorCategory" AS ENUM ('SYNTAX', 'RUNTIME', 'DEPENDENCY', 'ENVIRONMENT', 'VERSION', 'NULL_REFERENCE', 'ASYNC', 'UNKNOWN');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Error" (
    "id" TEXT NOT NULL,
    "inputType" "ErrorInput" NOT NULL,
    "rawInput" TEXT NOT NULL,
    "structuredInput" JSONB NOT NULL,
    "solutionId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Error_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Solution" (
    "id" TEXT NOT NULL,
    "errorSummary" TEXT NOT NULL,
    "rootCause" TEXT NOT NULL,
    "confidenceScore" INTEGER NOT NULL,
    "language" TEXT NOT NULL,
    "errorType" TEXT NOT NULL,
    "category" "ErrorCategory" NOT NULL,
    "errorSignature" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Solution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SuggestedFix" (
    "id" TEXT NOT NULL,
    "steps" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "fixConfidenceScore" INTEGER NOT NULL,
    "totalRetry" INTEGER NOT NULL DEFAULT 1,
    "solutionSource" "SolSource" NOT NULL,
    "solutionId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SuggestedFix_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Solution_errorSignature_key" ON "Solution"("errorSignature");

-- CreateIndex
CREATE INDEX "Solution_language_errorType_idx" ON "Solution"("language", "errorType");

-- AddForeignKey
ALTER TABLE "Error" ADD CONSTRAINT "Error_solutionId_fkey" FOREIGN KEY ("solutionId") REFERENCES "Solution"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Error" ADD CONSTRAINT "Error_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SuggestedFix" ADD CONSTRAINT "SuggestedFix_solutionId_fkey" FOREIGN KEY ("solutionId") REFERENCES "Solution"("id") ON DELETE CASCADE ON UPDATE CASCADE;
