"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllMembers = getAllMembers;
exports.getMemberById = getMemberById;
exports.getMemberByName = getMemberByName;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function getAllMembers() {
    return prisma.member.findMany();
}
function getMemberById(id) {
    return prisma.member.findUnique({
        where: {
            id: id,
        },
    });
}
function getMemberByName(name) {
    return prisma.member.findMany({
        where: {
            OR: [
                { name: { contains: name } },
                { surname: { contains: name } },
            ],
        },
    });
}
