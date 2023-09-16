import { isReadListOpen, addBookToList } from "../store/readListStore";

export function AddBookForm({ book, children }) {
  const addToList = (event) => {
    event.preventDefault();
    isReadListOpen.set(true);
    addBookToList(book);
  };
  return <form onSubmit={addToList}>{children}</form>;
}
