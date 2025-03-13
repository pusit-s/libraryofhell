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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookService_1 = require("../services/bookService");
const router = express_1.default.Router();
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.query.title) {
            const title = req.query.title;
            const books = yield (0, bookService_1.getBookByTitle)(title);
            res.json(books);
        }
        else {
            const books = yield (0, bookService_1.getAllBooks)();
            res.json(books);
        }
    }
    catch (error) {
        console.error("Error fetching books:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}));
router.get("/scheduled-return", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dateString = req.query.date;
        const date = new Date(dateString);
        const books = yield (0, bookService_1.getScheduledReturnBooks)(date);
        res.json(books);
    }
    catch (error) {
        console.error("Error fetching scheduled return books:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}));
router.get('/not-returned', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield (0, bookService_1.getNotReturnedBooks)();
        res.json(books);
    }
    catch (error) {
        console.error("Error fetching not returned books:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}));
router.get("/search", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const keyword = req.query.keyword || "";
    const pageNo = parseInt(req.query.pageNo) || 1;
    const pageSize = parseInt(req.query.pageSize) || 5;
    try {
        const books = yield (0, bookService_1.getBooksByKeywordWithPagination)(keyword, pageNo, pageSize);
        res.json(books);
    }
    catch (error) {
        console.error("Error fetching books by keyword:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}));
exports.default = router;
