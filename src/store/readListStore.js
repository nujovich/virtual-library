import { atom, map } from "nanostores";
import { books } from "../data/books.js";

export const isReadListOpen = atom(false);

export const readBooklist = map({});
export const allBooks = atom(books);

export function addBookToList(book) {
    const existingBook = readBooklist.get()[book.title];
    if (!existingBook) {
        readBooklist.setKey(book.title, book);
        const newBooks = allBooks.get().filter((b) => b.title !== book.title);
        allBooks.set(newBooks);
    }
}

export function removeBookFromList(book) {
    readBooklist.setKey(book.title, undefined);
    const newBooks = [...allBooks.get(), book];
    allBooks.set(newBooks);
}