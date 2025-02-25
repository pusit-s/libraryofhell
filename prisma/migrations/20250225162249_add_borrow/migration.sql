-- CreateTable
CREATE TABLE `BorrowTransaction` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `memberId` INTEGER NOT NULL,
    `borrowDate` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BorrowRecord` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `transactionId` INTEGER NOT NULL,
    `bookId` INTEGER NOT NULL,
    `scheduledReturnDate` DATETIME(3) NOT NULL,
    `actualReturnDate` DATETIME(3) NULL,
    `isReturned` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `BorrowTransaction` ADD CONSTRAINT `BorrowTransaction_memberId_fkey` FOREIGN KEY (`memberId`) REFERENCES `Member`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BorrowRecord` ADD CONSTRAINT `BorrowRecord_transactionId_fkey` FOREIGN KEY (`transactionId`) REFERENCES `BorrowTransaction`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BorrowRecord` ADD CONSTRAINT `BorrowRecord_bookId_fkey` FOREIGN KEY (`bookId`) REFERENCES `Book`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
