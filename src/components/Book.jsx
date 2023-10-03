import { AddBookForm } from "./AddBookForm";

export const Book = ({ book }) => {
  const { title, cover, author, year } = book;
  return (
    <div className="flex flex-col bg-white rounded-lg">
      <div className="relative">
        <img
          className="inset-0 aspect-[24/36] object-cover w-full h-full rounded-t-lg"
          src={cover}
          alt={title}
          width={24}
          height={36}
          srcSet={`${cover} 24w`}
        ></img>
      </div>
      <div className="flex flex-col justify-start gap-2 p-2">
        <h1 className="text-gray-900 font-medium text-lg sm:truncate">
          {title}
        </h1>
        <h2 className="text-gray-500">
          <p className="sm:truncate">{author.name}</p>
          <p>{year}</p>
        </h2>
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
