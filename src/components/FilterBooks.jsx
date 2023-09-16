export function FilterBooks() {
  return (
    <div className="flex gap-5 m-3 justify-center">
      <label
        htmlFor="genres"
        className="flex m-2 text-sm font-medium text-white"
      >
        Filtrar por género:
      </label>
      <select
        defaultValue="todas"
        id="genres"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 max-w-xs sm:max-w-none sm:text-sm"
      >
        <option value="todas">Todos</option>
        <option value="ciencia-ficcion">Ciencia ficción</option>
        <option value="fantasia">Fantasía</option>
        <option value="terror">Terror</option>
      </select>
      <label
        htmlFor="pages"
        className="flex m-2 text-sm font-medium text-white"
      >
        Filtrar por páginas:
      </label>
      <input
        type="range"
        className="cursor-pointer accent-pink-400"
        id="pages"
        name="pages"
        min="0"
        max="1000"
      />
    </div>
  );
}
