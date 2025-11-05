export default function BookList({ books }) {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {books.map((book, i) => (
        <div
          key={i}
          className="border border-gray-400 rounded-xl shadow-lg hover:shadow-lg transition p-4"
        >
          <img
            src={book.cover}
            alt={book.name}
            className="w-full h-80 rounded-lg mb-3"
          />
          <h3 className="font-semibold text-lg">{book.name}</h3>
          <p className="text-gray-600 text-sm">Code: {book.code}</p>
          <p className="text-gray-700 font-medium mt-1">Price : {book.price}</p>
          <p className="font-semibold text-blue-800">{book.publication}</p>
          <div className="pt-3">
            <button
              className="btn w-full h-[35px] pt-  bg-linear-to-r from-[#2193b0] to-[#6dd5ed] text-white border-none 
         text-[15px] font-bold cursor-pointer relative z-1 overflow-hidden
         hover:text-black
         before:content-[''] before:absolute before:top-0 before:bottom-0
         before:left-[-20%] before:right-[-20%]  before:bg-linear-to-r before:from-white before:to-sky-100 before:-z-10
         before:transform-[skewX(-45deg)_scaleX(0)_scaleY(1)]
         before:transition-all before:duration-500
         hover:before:transform-[skewX(-45deg)_scaleX(1)_scaleY(1)] rounded-2xl"
            >
              {book.button}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
