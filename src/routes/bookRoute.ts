import express, {Request, Response} from 'express';
import { getAllBooks, getBookByTitle, getNotReturnedBooks, getScheduledReturnBooks, getBooksByKeywordWithPagination } from '../services/bookService';
const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
    try {
        if (req.query.title) {
            const title = req.query.title as string;
            const books = await getBookByTitle(title);
            res.json(books);
        } else {
            const books = await getAllBooks();
            res.json(books);
        }
    } catch (error) {
        console.error("Error fetching books:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


router.get("/scheduled-return", async (req: Request, res: Response) => {
    try {
        const dateString = req.query.date as string;
        const date = new Date(dateString);
        const books = await getScheduledReturnBooks(date);
        res.json(books);
    } catch (error) {
        console.error("Error fetching scheduled return books:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});


router.get('/not-returned', async (req: Request, res: Response) => {
    try {
        const books = await getNotReturnedBooks();
        res.json(books);
    } catch (error) {
        console.error("Error fetching not returned books:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get("/search", async (req: Request, res: Response) => {
    const keyword = req.query.keyword as string || "";
    const pageNo = parseInt(req.query.pageNo as string) || 1;
    const pageSize = parseInt(req.query.pageSize as string) || 5;

    try {
        const books = await getBooksByKeywordWithPagination(keyword, pageNo, pageSize);
        res.json(books);
    } catch (error) {
        console.error("Error fetching books by keyword:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
export default router;