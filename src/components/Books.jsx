import { useStore } from "@nanostores/react";
import { Book } from "./Book";
import { allBooks } from "../store/readListStore";

export function Books() {
  const $allBooks = useStore(allBooks);

  return (
    <div className="grid grid-cols-3 place-content-center md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
      {Object.values($allBooks).map((book) => (
        <Book key={book.title} book={book} />
      ))}
    </div>
  );
}
