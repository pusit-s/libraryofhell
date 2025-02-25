import * as repo from "../repositories/bookRepository";

export function getAllBooks() {
    return repo.getAllBooks();
}

export function getBookByTitle(title: string) {
    return repo.getBookByTitle(title);
}
