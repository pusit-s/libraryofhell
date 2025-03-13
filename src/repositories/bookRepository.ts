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

export async function getBooksByKeywordWithPagination(keyword: string, page: number, pageSize: number) {
    try {
        const books = await prisma.book.findMany({
            where: {
                OR: [
                    { title: { contains: keyword } },
                    { category: { contains: keyword } },
                    {
                        author: {
                            OR: [
                                { name: { contains: keyword } },
                                { surname: { contains: keyword } }
                            ]
                        }
                    },
                    {
                        borrowRecords: {
                            some: {
                                transaction: {
                                    member: {
                                        OR: [
                                            { name: { contains: keyword } },
                                            { surname: { contains: keyword } }
                                        ]
                                    }
                                }
                            }
                        }
                    }
                ]
            },
            skip: (page - 1) * pageSize,
            take: pageSize,
            select: {
                title: true,
                isbn: true,
                category: true,
                author: {
                    select: {
                        name: true,
                        surname: true
                    }
                },
                borrowRecords: {
                    select: {
                        isReturned: true,
                        transaction: {
                            select: {
                                borrowDate: true,
                                member: {
                                    select: {
                                        name: true,
                                        surname: true
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });

        return books;
    } catch (error) {
        console.error("Error fetching books with pagination:", error);
        return [];
    }
}