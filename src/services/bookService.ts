import * as repo from "../repositories/bookRepository";

export function getAllBooks() {
    return repo.getAllBooks();
}

export function getBookByTitle(title: string) {
    return repo.getBookByTitle(title);
}

export function getNotReturnedBooks() {
    return repo.getNotReturnedBooks();
}

export function getScheduledReturnBooks(date: Date) {
    return repo.getScheduledReturnBooks(date);
}