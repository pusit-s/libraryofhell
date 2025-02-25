import { PrismaClient } from "@prisma/client";
import { createMembers } from "./db/createMembers";
import { createAuthors } from "./db/createAuthors";
import { createBooks } from "./db/createBooks";

const prisma = new PrismaClient();

async function main() {
    const members = await createMembers();
    const authors = await createAuthors();
    const books = await createBooks();
}

main()