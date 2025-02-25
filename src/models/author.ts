import { Book } from './book';

export interface Author {
    id: number;
    name: string;
    surname: string;
    affiliation: string;
    books: Book[];
}