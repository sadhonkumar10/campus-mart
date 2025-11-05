export default function BookCategories({
  categories,
  selectCategories,
  setSelectCategories,
}) {
  return (
    <div className="flex flex-wrap justify-center gap-3 my-6">
      {categories.map((category, i) => (
        <button
          key={i}
          onClick={() => setSelectCategories(category)}
          className={`px-4 py-2 rounded-lg border font-medium transition-all ${
            selectCategories === category
              ? "bg-amber-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
