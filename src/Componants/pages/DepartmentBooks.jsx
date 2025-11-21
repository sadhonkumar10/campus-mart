import React, { useState } from "react";
import { IoBagAdd } from "react-icons/io5";
import { MdAddShoppingCart } from "react-icons/md";
import { useLoaderData, useOutletContext } from "react-router";

export default function DepartmentBooks() {
  const books = useLoaderData();
  const { cart, setCart } = useOutletContext();

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

  // Suggestions
  const suggestions = searchText
    ? books
        .filter(
          (b) =>
            b.name.toLowerCase().includes(searchText.toLowerCase()) ||
            (b.code && b.code.toLowerCase().includes(searchText.toLowerCase()))
        )
        .slice(0, 5)
    : [];

  // Add to cart
  const handleAddToCart = (book) => {
    const exists = cart.find((b) => b.id === book.id);
    if (exists) {
      setCart(
        cart.map((b) => (b.id === book.id ? { ...b, qty: b.qty + 1 } : b))
      );
    } else {
      setCart([
        ...cart,
        { ...book, qty: 1, selected: false, price: Number(book.price) },
      ]);
    }
  };

  return (
    <div className="p-4 relative max-w-7xl mx-auto">
      
      <input
        type="text"
        placeholder="Search by name or code..."
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          setShowSuggestions(true);
        }}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
        onFocus={() => setShowSuggestions(true)}
        className="border px-3 py-2 mb-4 rounded w-full md:w-64 shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Suggestions */}
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

      
      <div className="flex flex-wrap justify-center gap-3 my-6 p-2 rounded-2xl bg-linear-to-r from-blue-100 to-blue-50 shadow-inner">
        {departments.map((dept) => (
          <button
            key={dept}
            onClick={() => {
              setSelectedDepartment(dept);
              setSelectedSemester("All");
            }}
            className={`p-2 px-4 rounded-full font-medium transition-all duration-300 ${
              selectedDepartment === dept
                ? "bg-blue-500 text-white shadow-lg"
                : "bg-gray-100 hover:bg-blue-300"
            }`}
          >
            {dept}
          </button>
        ))}
      </div>

     
      <div className="flex flex-wrap justify-center gap-3 my-6 p-2 rounded-2xl bg-linear-to-r from-green-50 to-green-100 shadow-inner">
        {semesters.map((sem) => (
          <button
            key={sem}
            onClick={() => setSelectedSemester(sem)}
            className={`p-2 px-4 rounded-full font-medium transition-all duration-300 ${
              selectedSemester === sem
                ? "bg-green-500 text-white shadow-lg"
                : "bg-gray-100 hover:bg-green-300"
            }`}
          >
            {sem}
          </button>
        ))}
      </div>

     
      {filteredBooks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
            >
              <img
                src={book.cover}
                alt={book.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{book.name}</h3>
                <p className="text-gray-600 text-sm">Code: {book.code}</p>
                <p className="text-gray-800 font-bold mt-1">
                  Price: ${book.price}
                </p>
                <p className="text-blue-700 font-semibold">
                  {book.publication}
                </p>
                <div className="pt-3 flex justify-between items-center">
                  <button
                    onClick={() => handleAddToCart(book)}
                    className="bg-linear-to-r from-blue-400 to-blue-600 text-white px-4 py-1 rounded-2xl font-bold shadow hover:from-blue-500 hover:to-blue-700 transition-all duration-300 flex items-center gap-2"
                  >
                    <MdAddShoppingCart /> Add
                  </button>
                  <button
                    onClick={() => handleAddToCart(book)}
                    className="flex items-center gap-1 bg-amber-500 text-white hover:bg-amber-600 px-3 py-1 rounded-2xl font-bold transition-all duration-300"
                  >
                    <IoBagAdd /> Buy  
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">No books found.</p>
      )}
    </div>
  );
}
