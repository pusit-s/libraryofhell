import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createBorrowTransactions() {
    console.log("📑 Seeding borrow transactions...");
    const borrowTransactions = [
        { id: 1, memberId: 1, borrowDate: new Date("2024-01-05") },
        { id: 2, memberId: 2, borrowDate: new Date("2024-01-12") },
        { id: 3, memberId: 3, borrowDate: new Date("2024-01-20") },
        { id: 4, memberId: 4, borrowDate: new Date("2024-02-01") },
        { id: 5, memberId: 5, borrowDate: new Date("2024-02-10") },
        { id: 6, memberId: 6, borrowDate: new Date("2024-02-15") },
        { id: 7, memberId: 7, borrowDate: new Date("2024-03-01") },
        { id: 8, memberId: 8, borrowDate: new Date("2024-03-10") },
        { id: 9, memberId: 9, borrowDate: new Date("2024-03-20") },
        { id: 10, memberId: 10, borrowDate: new Date("2024-03-25") },
        { id: 11, memberId: 1, borrowDate: new Date("2024-04-05") },
        { id: 12, memberId: 2, borrowDate: new Date("2024-04-12") },
        { id: 13, memberId: 3, borrowDate: new Date("2024-04-20") },
        { id: 14, memberId: 4, borrowDate: new Date("2024-05-01") },
        { id: 15, memberId: 5, borrowDate: new Date("2024-05-10") },
        { id: 16, memberId: 6, borrowDate: new Date("2024-05-15") },
        { id: 17, memberId: 7, borrowDate: new Date("2024-06-01") },
        { id: 18, memberId: 8, borrowDate: new Date("2024-06-10") },
        { id: 19, memberId: 9, borrowDate: new Date("2024-06-20") },
        { id: 20, memberId: 10, borrowDate: new Date("2024-06-25") }
    ];

    await prisma.borrowTransaction.createMany({ data: borrowTransactions });
    console.log("✅ Borrow transactions seeded!");
}

export async function createBorrowRecords() {
    console.log("📘 Seeding borrow records...");
    const borrowRecords = [
        { id: 1, transactionId: 1, bookId: 1, scheduledReturnDate: new Date("2024-01-15"), actualReturnDate: new Date("2024-01-14"), isReturned: true },
        { id: 2, transactionId: 1, bookId: 2, scheduledReturnDate: new Date("2024-01-15"), actualReturnDate: null, isReturned: false },
        { id: 3, transactionId: 2, bookId: 3, scheduledReturnDate: new Date("2024-01-22"), actualReturnDate: new Date("2024-01-21"), isReturned: true },
        { id: 4, transactionId: 2, bookId: 4, scheduledReturnDate: new Date("2024-01-22"), actualReturnDate: null, isReturned: false },
        { id: 5, transactionId: 3, bookId: 5, scheduledReturnDate: new Date("2024-01-30"), actualReturnDate: null, isReturned: false },
        { id: 6, transactionId: 3, bookId: 6, scheduledReturnDate: new Date("2024-01-30"), actualReturnDate: new Date("2024-01-29"), isReturned: true },
        { id: 7, transactionId: 4, bookId: 7, scheduledReturnDate: new Date("2024-02-10"), actualReturnDate: new Date("2024-02-09"), isReturned: true },
        { id: 8, transactionId: 4, bookId: 8, scheduledReturnDate: new Date("2024-02-10"), actualReturnDate: null, isReturned: false },
        { id: 9, transactionId: 5, bookId: 9, scheduledReturnDate: new Date("2024-02-20"), actualReturnDate: new Date("2024-02-18"), isReturned: true },
        { id: 10, transactionId: 5, bookId: 10, scheduledReturnDate: new Date("2024-02-20"), actualReturnDate: null, isReturned: false },
        { id: 11, transactionId: 11, bookId: 1, scheduledReturnDate: new Date("2024-04-15"), actualReturnDate: new Date("2024-04-14"), isReturned: true },
        { id: 12, transactionId: 11, bookId: 2, scheduledReturnDate: new Date("2024-04-15"), actualReturnDate: null, isReturned: false },
        { id: 13, transactionId: 12, bookId: 3, scheduledReturnDate: new Date("2024-04-22"), actualReturnDate: null, isReturned: false },
        { id: 14, transactionId: 13, bookId: 4, scheduledReturnDate: new Date("2024-04-30"), actualReturnDate: null, isReturned: false },
        { id: 15, transactionId: 13, bookId: 5, scheduledReturnDate: new Date("2024-04-30"), actualReturnDate: null, isReturned: false },
        { id: 16, transactionId: 14, bookId: 6, scheduledReturnDate: new Date("2024-05-10"), actualReturnDate: new Date("2024-05-09"), isReturned: true },
        { id: 17, transactionId: 14, bookId: 7, scheduledReturnDate: new Date("2024-05-10"), actualReturnDate: null, isReturned: false },
        { id: 18, transactionId: 15, bookId: 8, scheduledReturnDate: new Date("2024-05-20"), actualReturnDate: new Date("2024-05-19"), isReturned: true },
        { id: 19, transactionId: 15, bookId: 9, scheduledReturnDate: new Date("2024-05-20"), actualReturnDate: null, isReturned: false },
        { id: 20, transactionId: 15, bookId: 10, scheduledReturnDate: new Date("2024-05-20"), actualReturnDate: null, isReturned: false },
        { id: 21, transactionId: 16, bookId: 11, scheduledReturnDate: new Date("2024-05-25"), actualReturnDate: null, isReturned: false },
        { id: 22, transactionId: 17, bookId: 12, scheduledReturnDate: new Date("2024-06-10"), actualReturnDate: new Date("2024-06-09"), isReturned: true },
        { id: 23, transactionId: 18, bookId: 1, scheduledReturnDate: new Date("2024-06-20"), actualReturnDate: new Date("2024-06-19"), isReturned: true },
        { id: 24, transactionId: 18, bookId: 2, scheduledReturnDate: new Date("2024-06-20"), actualReturnDate: null, isReturned: false },
        { id: 25, transactionId: 18, bookId: 3, scheduledReturnDate: new Date("2024-06-20"), actualReturnDate: null, isReturned: false },
        { id: 26, transactionId: 19, bookId: 4, scheduledReturnDate: new Date("2024-06-30"), actualReturnDate: new Date("2024-06-29"), isReturned: true },
        { id: 27, transactionId: 19, bookId: 5, scheduledReturnDate: new Date("2024-06-30"), actualReturnDate: new Date("2024-06-29"), isReturned: true },
        { id: 28, transactionId: 20, bookId: 6, scheduledReturnDate: new Date("2024-07-05"), actualReturnDate: null, isReturned: false },
        { id: 29, transactionId: 20, bookId: 7, scheduledReturnDate: new Date("2024-07-05"), actualReturnDate: null, isReturned: false },
        { id: 30, transactionId: 20, bookId: 8, scheduledReturnDate: new Date("2024-07-05"), actualReturnDate: null, isReturned: false }
    ];
    await prisma.borrowRecord.createMany({ data: borrowRecords });
    console.log("✅ Borrow records seeded!");
}