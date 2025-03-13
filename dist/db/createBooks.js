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
exports.createBooks = createBooks;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function createBooks() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("📚 Creating books...");
        const books = [
            { title: "Harry Potter and the Sorcerer’s Stone", isbn: "9780747532699", category: "Fantasy" },
            { title: "1984", isbn: "9780451524935", category: "Dystopian" },
            { title: "Norwegian Wood", isbn: "9780375704024", category: "Romance" },
            { title: "Pride and Prejudice", isbn: "9780679783268", category: "Classic" },
            { title: "Crime and Punishment", isbn: "9780486415871", category: "Psychological Fiction" },
            { title: "War and Peace", isbn: "9781400079988", category: "Historical Fiction" },
            { title: "One Hundred Years of Solitude", isbn: "9780060883287", category: "Magical Realism" },
            { title: "The Adventures of Tom Sawyer", isbn: "9780486400778", category: "Adventure" },
            { title: "Murder on the Orient Express", isbn: "9780062693662", category: "Mystery" },
            { title: "The Old Man and the Sea", isbn: "9780684801223", category: "Classic" },
            { title: "Harry Potter and the Chamber of Secrets", isbn: "9780439064873", category: "Fantasy" },
            { title: "Harry Potter and the Prisoner of Azkaban", isbn: "9780439136365", category: "Fantasy" },
        ];
        for (const book of books) {
            yield prisma.book.create({
                data: {
                    title: book.title,
                    isbn: book.isbn,
                    category: book.category,
                }
            });
        }
        const responseBook = yield prisma.book.findMany();
        function addAuthorToBooks(bookId, authorId) {
            return __awaiter(this, void 0, void 0, function* () {
                yield prisma.book.update({
                    where: {
                        id: bookId,
                    },
                    data: {
                        author: {
                            connect: {
                                id: authorId,
                            },
                        },
                    },
                });
            });
        }
        addAuthorToBooks(responseBook[0].id, 1);
        addAuthorToBooks(responseBook[1].id, 2);
        addAuthorToBooks(responseBook[2].id, 3);
        addAuthorToBooks(responseBook[3].id, 4);
        addAuthorToBooks(responseBook[4].id, 5);
        addAuthorToBooks(responseBook[5].id, 6);
        addAuthorToBooks(responseBook[6].id, 7);
        addAuthorToBooks(responseBook[7].id, 8);
        addAuthorToBooks(responseBook[8].id, 9);
        addAuthorToBooks(responseBook[9].id, 10);
        addAuthorToBooks(responseBook[10].id, 1);
        addAuthorToBooks(responseBook[11].id, 1);
        console.log("✅ Books created!");
    });
}
