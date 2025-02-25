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