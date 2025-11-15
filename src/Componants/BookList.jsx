import { MdAddShoppingCart } from "react-icons/md";
import { IoBagAdd } from "react-icons/io5";
import { Link } from "react-router";

export default function BookList({ books, onAddToCart }) {
  return (
    <Link to='/contact' className=" grid grid-cols-1 container mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
      {books.map((book, i) => (
        <div
          key={i}
          className=" rounded-xl hover:shadow-lg transition hover:scale-105 hover:duration-500"
        >
          <img
            src={book.cover}
            alt={book.name}
            className="w-full h-90 rounded-t-xl  "
          />
          <div className="p-4 border rounded-b-xl border-gray-300">
            <h3 className="font-semibold text-lg">{book.name}</h3>
            <p className="text-gray-600 text-sm">Code: {book.code}</p>
            <p className="text-gray-700 font-medium mt-1">
              Price : {book.price}
            </p>
            <p className="font-semibold text-blue-800">{book.publication}</p>
            <div className="pt-3 flex justify-between items-center">
              <button
                className="btn  h-[35px] bg-linear-to-r from-[#2193b0] to-[#6dd5ed] text-white border-none 
         text-[15px] font-bold cursor-pointer relative z-1 overflow-hidden
         hover:text-black
         before:content-[''] before:absolute before:top-0 before:bottom-0
         before:left-[-20%] before:right-[-20%]  before:bg-linear-to-r before:from-white before:to-sky-100 before:-z-10
         before:transform-[skewX(-45deg)_scaleX(0)_scaleY(1)]
         before:transition-all before:duration-500
         hover:before:transform-[skewX(-45deg)_scaleX(1)_scaleY(1)] rounded-2xl"
              >
                <p className="text-xl font-bold">
                  <MdAddShoppingCart />
                </p>{" "}
                {book.button}
              </button>
              <button
                className=" flex items-center gap-2  bg-amber-500 text-white
                hover:bg-gray-300 h-[35px] px-5 rounded-2xl font-bold duration-300 hover:text-black"
                onClick={() => onAddToCart(book)}
              >
                <p className="font-bold text-xl ">
                  {" "}
                  <IoBagAdd></IoBagAdd>{" "}
                </p>{" "}
                Buy Now{" "}
              </button>
            </div>
          </div>
        </div>
      ))}
    </Link>
  );
}
