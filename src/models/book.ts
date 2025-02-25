import { Author } from './author';

export interface Book {
    id: number;
    title: string;
    isbn: string;
    category: string;
    author: Author;
}