import { useStore } from "@nanostores/react";
import { isReadListOpen, readBooklist } from "../store/readListStore";
import { RemoveBookForm } from "./RemoveBookForm";

export default function ReadListFlyout() {
  const $isReadListFlyoutOpen = useStore(isReadListOpen);
  const $readBookList = useStore(readBooklist);

  return (
    <aside
      hidden={!$isReadListFlyoutOpen}
      className="fixed z-50 right-0 top-20 h-1/2 w-1/2 border-8 border-pink-700 bg-neutral-900 overflow-y-auto"
    >
      {Object.values($readBookList).length > 0 ? (
        <ul className="grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 gap-6 p-4 leading-normal">
          {Object.values($readBookList).map((book) => (
            <li key={book.title} className="flex flex-col gap-2">
              <img className="w-24 h-36" src={book.cover} alt={book.title} />
              <div className="flex flex-col gap-2">
                <h3 className="text-white font-medium text-lg">{book.title}</h3>
                <p className="text-gray-400">{book.author.name}</p>
                <p className="text-gray-400">{book.year}</p>
                <RemoveBookForm book={book}>
                  <button className="uppercase text-white w-32 bg-pink-500 py-2 px-4 rounded-lg hover:bg-gradient-to-br from-pink-200 to-pink-900">
                    Remove
                  </button>
                </RemoveBookForm>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-white font-bold text-lg mt-4 text-center">
          You have no books in your list
        </p>
      )}
    </aside>
  );
}
