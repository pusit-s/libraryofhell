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

export default router;