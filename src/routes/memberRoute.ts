import express, {Request, Response} from 'express';
import { getAllMembers, getMemberById, getMemberByName } from '../services/memberService';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    if (req.query.name) {
        const name = req.query.name as string;
        const member = await getMemberByName(name as string);
        res.json(member);
    } else {
        res.json(await getAllMembers());
    }
});

router.get('/:id', async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const event = await getMemberById(id);
    if (event) {
        res.json(event);
    } else {
        res.status(404).send('Member not found');
    }
});

export default router;