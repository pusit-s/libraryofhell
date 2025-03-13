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
exports.createAuthors = createAuthors;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function createAuthors() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("📖 Creating authors...");
        yield prisma.author.createMany({
            data: [
                { name: "J.K.", surname: "Rowling", affiliation: "Bloomsbury Publishing" },
                { name: "George", surname: "Orwell", affiliation: "Secker & Warburg" },
                { name: "Haruki", surname: "Murakami", affiliation: "Shinchosha" },
                { name: "Jane", surname: "Austen", affiliation: "T. Egerton" },
                { name: "Fyodor", surname: "Dostoevsky", affiliation: "Russian Messenger" },
                { name: "Leo", surname: "Tolstoy", affiliation: "The Russian Messenger" },
                { name: "Gabriel", surname: "García Márquez", affiliation: "Editorial Sudamericana" },
                { name: "Mark", surname: "Twain", affiliation: "American Publishing Company" },
                { name: "Agatha", surname: "Christie", affiliation: "Collins Crime Club" },
                { name: "Ernest", surname: "Hemingway", affiliation: "Charles Scribner's Sons" },
            ],
        });
        console.log("✅ Authors created!");
    });
}
