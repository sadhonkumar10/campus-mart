import React, { useState } from "react";
import { IoBagAdd } from "react-icons/io5";
import { MdAddShoppingCart } from "react-icons/md";
import { useLoaderData } from "react-router";

export default function DepartmentBooks() {
  const books = useLoaderData(); // Loader থেকে empty array default

  const [searchText, setSearchText] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedSemester, setSelectedSemester] = useState("All");
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Departments
  const departments = ["All", ...new Set(books.map((b) => b.department))];

  // Semesters based on selected department
  const semesters = (() => {
    let filtered = books;
    if (selectedDepartment !== "All") {
      filtered = books.filter((b) => b.department === selectedDepartment);
    }
    return ["All", ...new Set(filtered.map((b) => b.semester))];
  })();

  // Final filtered books
  const filteredBooks = books.filter((book) => {
    const deptMatch =
      selectedDepartment === "All" || book.department === selectedDepartment;
    const semMatch =
      selectedSemester === "All" || book.semester === selectedSemester;
    const searchMatch =
      searchText === "" ||
      book.name.toLowerCase().includes(searchText.toLowerCase()) ||
      (book.code && book.code.toLowerCase().includes(searchText.toLowerCase()));

    return deptMatch && semMatch && searchMatch;
  });

  // Suggestions for current input
  const suggestions = searchText
    ? books
        .filter(
          (b) =>
            b.name.toLowerCase().includes(searchText.toLowerCase()) ||
            (b.code && b.code.toLowerCase().includes(searchText.toLowerCase()))
        )
        .slice(0, 5) // Maximum 5 suggestions
    : [];

  return (
    <div className="p-4 relative">
      {/* Search bar */}
      <input
        type="text"
        placeholder="Search by name or code..."
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          setShowSuggestions(true);
        }}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 100)} // small delay so click works
        onFocus={() => setShowSuggestions(true)}
        className="border px-3 py-2 mb-4 rounded w-full md:w-64 "
      />

      {/* Suggestions dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <ul className="border bg-white shadow absolute w-full md:w-64 max-h-48 overflow-auto z-10 rounded">
          {suggestions.map((sugg) => (
            <li
              key={sugg.id}
              onMouseDown={() => {
                setSearchText(sugg.name);
                setShowSuggestions(false);
              }}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {sugg.name} {sugg.code && `(${sugg.code})`}
            </li>
          ))}
        </ul>
      )}

      {/* Department buttons */}
      <div className="flex flex-wrap justify-center shadow-sm gap-3 my-6 border bg-gray-100 border-gray-300 w-fit mx-auto p-2 rounded-2xl">
        {departments.map((dept) => (
          <button
            key={dept}
            onClick={() => {
              setSelectedDepartment(dept);
              setSelectedSemester("All");
            }}
            className={`p-1 px-3 rounded-xl font-medium transition-all ${
              selectedDepartment === dept
                ? "bg-gray-300 text-blue-500"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {dept}
          </button>
        ))}
      </div>

      {/* Semester buttons */}
      <div className="flex flex-wrap justify-center shadow-sm gap-3 my-6 border bg-gray-100 border-gray-300 w-fit mx-auto p-2 rounded-2xl">
        {semesters.map((sem) => (
          <button
            key={sem}
            onClick={() => setSelectedSemester(sem)}
            className={`p-1 px-3 rounded-xl font-medium transition-all ${
              selectedSemester === sem
                ? "text-blue-600 font-bold border-b-2 border-blue-600"
                : "text-gray-600"
            }`}
          >
            {sem}
          </button>
        ))}
      </div>

      {/* Books */}
      {filteredBooks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 container mx-auto lg:px-20 ">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className=" p-2 mb-6 rounded shadow  hover:scale-105 hover:duration-500"
            >
              <img
                src={book.cover}
                alt={book.name}
                className="w-full h-90 rounded-t-xl"
              />
              <div className="p-4 border rounded-b-xl border-gray-300">
                <h3 className="font-semibold text-lg">{book.name}</h3>
                <p className="text-gray-600 text-sm">Code: {book.code}</p>
                <p className="text-gray-700 font-medium mt-1">
                  Price : {book.price}
                </p>
                <p className="font-semibold text-blue-800">
                  {book.publication}
                </p>
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
                    className=" flex items-center gap-1  bg-amber-500 text-white
                            hover:bg-gray-300 h-[35px] px-2 rounded-2xl font-blod duration-300 hover:text-black"
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
        </div>
      ) : (
        <p className="text-center text-gray-500">No books found.</p>
      )}
    </div>
  );
}
