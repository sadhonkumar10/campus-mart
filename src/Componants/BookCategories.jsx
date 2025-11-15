export default function BookCategories({
  categories,
  selectCategories,
  setSelectCategories,
}) {
  return (
    <div className="flex flex-wrap justify-center shadow-sm gap-3 my-6 border bg-gray-100 border-gray-300 w-fit mx-auto p-2 rounded-2xl">
      {categories.map((category, i) => (
        <button
          key={i}
          onClick={() => setSelectCategories(category)}
          className={`p-1 px-3 rounded-xl font-medium transition-all ${
            selectCategories === category
              ? "bg-gray-300 text-blue-500"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
