import { Member } from "./member";
import { Book } from "./book";

export interface BorrowTransaction {
    id: number;
    member: Member;
    borrowDate: Date;
    numberOfBooks: number;
    borrowRecords: BorrowRecord[];
}

export interface BorrowRecord {
    id: number;
    transactionId: BorrowTransaction;
    book: Book;
    bookId: number;
    scheduledReturnDate: Date;
    actualReturnDate?: Date | null;
    isReturned: boolean;
}

