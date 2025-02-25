import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createMembers() {
    console.log("🧑‍🤝‍🧑 Creating members...");

    await prisma.member.createMany({
        data: [
            { name: "Alice", surname: "Johnson", telephone: "090-123-4567" },
            { name: "Bob", surname: "Smith", telephone: "091-234-5678" },
            { name: "Charlie", surname: "Brown", telephone: "092-345-6789" },
            { name: "David", surname: "Williams", telephone: "093-456-7890" },
            { name: "Emily", surname: "Davis", telephone: "094-567-8901" },
            { name: "Frank", surname: "Miller", telephone: "095-678-9012" },
            { name: "Grace", surname: "Lee", telephone: "096-789-0123" },
            { name: "Henry", surname: "Moore", telephone: "097-890-1234" },
            { name: "Ivy", surname: "Taylor", telephone: "098-901-2345" },
            { name: "Jack", surname: "Anderson", telephone: "099-012-3456" },
        ],
    });

    console.log("✅ Members created!");
}