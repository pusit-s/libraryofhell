"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllAuthors = getAllAuthors;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function getAllAuthors() {
    return prisma.author.findMany();
}
