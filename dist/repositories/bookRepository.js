"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllBooks = getAllBooks;
exports.getBookByTitle = getBookByTitle;
exports.getNotReturnedBooks = getNotReturnedBooks;
exports.getScheduledReturnBooks = getScheduledReturnBooks;
exports.getBooksByKeywordWithPagination = getBooksByKeywordWithPagination;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function getAllBooks() {
    return prisma.book.findMany();
}
function getBookByTitle(title) {
    return prisma.book.findMany({
        where: {
            title: {
                contains: title,
            },
        },
    });
}
function getNotReturnedBooks() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const unreturnedBooks = yield prisma.borrowRecord.findMany({
                where: {
                    isReturned: false
                },
                include: {
                    book: true, // Include book details
                    transaction: {
                        include: {
                            member: true // Include member details
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
        }
        catch (error) {
            console.error("Error fetching unreturned books:", error);
            return [];
        }
    });
}
function getScheduledReturnBooks(date) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const scheduledBooks = yield prisma.borrowRecord.findMany({
                where: {
                    scheduledReturnDate: new Date(date)
                },
                include: {
                    book: true, // Include book details
                    transaction: {
                        include: {
                            member: true // Include member details
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
        }
        catch (error) {
            console.error("Error fetching scheduled return books:", error);
            return [];
        }
    });
}
function getBooksByKeywordWithPagination(keyword, page, pageSize) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const books = yield prisma.book.findMany({
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
        }
        catch (error) {
            console.error("Error fetching books with pagination:", error);
            return [];
        }
    });
}
