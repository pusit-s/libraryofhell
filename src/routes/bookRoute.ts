import express, {Request, Response} from 'express';
import { getAllBooks, getBookByTitle, getNotReturnedBooks, getScheduledReturnBooks } from '../services/bookService';
const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    if (req.query.title) {
        const title = req.query.title as string;
        const books = await getBookByTitle(title);
        res.json(books);
    } else {
        res.json(await getAllBooks());
    }
});

// Get books from scheduled return date
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

// Get books that are not returned
router.get('/not-returned', async (req: Request, res: Response) => {
    const books = await getNotReturnedBooks();
    res.json(books);
});

export default router;