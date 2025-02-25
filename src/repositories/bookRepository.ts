import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export function getAllBooks() {
    return prisma.book.findMany();
}

export function getBookByTitle(title: string) {
    return prisma.book.findMany({
        where: {
            title: {
                contains: title,
            },
        },
    });
}

export async function getNotReturnedBooks() {
    try {
        const unreturnedBooks = await prisma.borrowRecord.findMany({
            where: {
                isReturned: false
            },
            include: {
                book: true,  // Include book details
                transaction: {
                    include: {
                        member: true  // Include member details
                    }
                }
            }
        });

        return unreturnedBooks.map(record => ({
            bookId: record.book.id,
            title: record.book.title,
            isbn: record.book.isbn,
            category: record.book.category,
            borrower: `${record.transaction.member.name} ${record.transaction.member.surname}`,
            borrowDate: record.transaction.borrowDate,
            scheduledReturnDate: record.scheduledReturnDate
        }));

    } catch (error) {
        console.error("Error fetching unreturned books:", error);
        return [];
    }
}

export async function getScheduledReturnBooks(date: Date) {
    try {
        const scheduledBooks = await prisma.borrowRecord.findMany({
            where: {
                scheduledReturnDate: new Date(date)
            },
            include: {
                book: true,  // Include book details
                transaction: {
                    include: {
                        member: true  // Include member details
                    }
                }
            }
        });

        return scheduledBooks.map(record => ({
            bookId: record.book.id,
            title: record.book.title,
            isbn: record.book.isbn,
            category: record.book.category,
            borrower: `${record.transaction.member.name} ${record.transaction.member.surname}`,
            borrowDate: record.transaction.borrowDate,
            scheduledReturnDate: record.scheduledReturnDate
        }));

    } catch (error) {
        console.error("Error fetching scheduled return books:", error);
        return [];
    }
}
