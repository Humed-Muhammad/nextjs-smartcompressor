-- CreateTable
CREATE TABLE "Images" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "compressedImage" BLOB NOT NULL,
    "compressedSize" REAL NOT NULL,
    "imageName" TEXT NOT NULL,
    "originalSize" REAL NOT NULL
);
