import express, {Request, Response} from 'express';
import { getAllAuthors } from '../services/authorService';
const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    res.json(await getAllAuthors());
});

export default router;