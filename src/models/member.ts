import { BorrowTransaction } from './borrow';

export interface Member {
    id: number;
    name: string;
    surname: string;
    telephone: string;
    borrowTransactions: BorrowTransaction[];
}