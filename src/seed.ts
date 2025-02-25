import { PrismaClient } from "@prisma/client";
import { createMembers } from "./db/createMembers";
import { createAuthors } from "./db/createAuthors";
import { createBooks } from "./db/createBooks";
import { createBorrowTransactions, createBorrowRecords } from "./db/createRecords";

const prisma = new PrismaClient();

async function main() {
    const authors = await createAuthors();
    const books = await createBooks();
    const members = await createMembers();
    const borrowTransactions = await createBorrowTransactions();
    const borrowRecords = await createBorrowRecords(); 
}

main()