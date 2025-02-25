import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export function getAllMembers() {
    return prisma.member.findMany();
}

export function getMemberById(id: number) {
    return prisma.member.findUnique({
        where: {
            id: id,
        },
    });
}

export function getMemberByName(name: string) {
    return prisma.member.findMany({
        where: {
            OR: [
                {name: {contains: name}},
                {surname: {contains: name}},
            ],
        },
    });
}