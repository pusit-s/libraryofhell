import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import bookRoute from './routes/bookRoute';
import authorRoute from './routes/authorRoute';
import memberRoute from './routes/memberRoute';
dotenv.config();

const app = express();
app.use(express.json())
app.use('/books', bookRoute);
app.use('/authors', authorRoute);
app.use('/members', memberRoute);

const port = 3000;

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the library of Hell!');
});