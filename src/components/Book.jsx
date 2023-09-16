import { AddBookForm } from "./AddBookForm";

export const Book = ({ book }) => {
  const { title, cover, author, year } = book;
  return (
    <div className="flex flex-col items-center bg-white rounded-lg">
      <div className="relative">
        <img
          className="inset-0 aspect-[314/475] object-cover w-full h-full"
          src={cover}
          alt={title}
        />
      </div>
      <div className="flex flex-col justify-between gap-2 p-4 leading-normal">
        <h3 className="text-gray-900 font-medium text-lg">{title}</h3>
        <p className="text-gray-500">{author.name}</p>
        <p className="text-gray-500">{year}</p>
        <AddBookForm book={book}>
          <button
            type="submit"
            className="inline-flex items-center uppercase text-white w-32 bg-pink-500 py-2 px-4 rounded-lg hover:bg-gradient-to-br from-pink-200 to-pink-900"
          >
            Add to list
          </button>
        </AddBookForm>
      </div>
    </div>
  );
};
