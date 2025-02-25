import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createAuthors() {
    console.log("📖 Creating authors...");

    await prisma.author.createMany({
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
}