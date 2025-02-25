import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createBooks() {
    console.log("📚 Creating books...");

    const allAuthors = await prisma.author.findMany();

    await prisma.book.createMany({
        data: [
            { title: "Harry Potter and the Sorcerer’s Stone", isbn: "9780747532699", category: "Fantasy", authorId: allAuthors[0].id },
            { title: "1984", isbn: "9780451524935", category: "Dystopian", authorId: allAuthors[1].id },
            { title: "Norwegian Wood", isbn: "9780375704024", category: "Romance", authorId: allAuthors[2].id },
            { title: "Pride and Prejudice", isbn: "9780679783268", category: "Classic", authorId: allAuthors[3].id },
            { title: "Crime and Punishment", isbn: "9780486415871", category: "Psychological Fiction", authorId: allAuthors[4].id },
            { title: "War and Peace", isbn: "9781400079988", category: "Historical Fiction", authorId: allAuthors[5].id },
            { title: "One Hundred Years of Solitude", isbn: "9780060883287", category: "Magical Realism", authorId: allAuthors[6].id },
            { title: "The Adventures of Tom Sawyer", isbn: "9780486400778", category: "Adventure", authorId: allAuthors[7].id },
            { title: "Murder on the Orient Express", isbn: "9780062693662", category: "Mystery", authorId: allAuthors[8].id },
            { title: "The Old Man and the Sea", isbn: "9780684801223", category: "Classic", authorId: allAuthors[9].id },
        ],
    });

    console.log("✅ Books created!");
}