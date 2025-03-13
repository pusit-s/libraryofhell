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
const client_1 = require("@prisma/client");
const createMembers_1 = require("./db/createMembers");
const createAuthors_1 = require("./db/createAuthors");
const createBooks_1 = require("./db/createBooks");
const createRecords_1 = require("./db/createRecords");
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const authors = yield (0, createAuthors_1.createAuthors)();
        const books = yield (0, createBooks_1.createBooks)();
        const members = yield (0, createMembers_1.createMembers)();
        const borrowTransactions = yield (0, createRecords_1.createBorrowTransactions)();
        const borrowRecords = yield (0, createRecords_1.createBorrowRecords)();
    });
}
main();
