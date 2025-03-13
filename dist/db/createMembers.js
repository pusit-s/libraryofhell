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
exports.createMembers = createMembers;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function createMembers() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("🧑‍🤝‍🧑 Creating members...");
        yield prisma.member.createMany({
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
    });
}
