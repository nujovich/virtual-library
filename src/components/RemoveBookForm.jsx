import { removeBookFromList } from "../store/readListStore";

export function RemoveBookForm({ book, children }) {
  const removeFromList = (event) => {
    event.preventDefault();
    removeBookFromList(book);
  };
  return <form onSubmit={removeFromList}>{children}</form>;
}
