import React, { useState } from "react";
import { useLoaderData, useOutletContext } from "react-router";

export default function Project() {
  const projects = useLoaderData();
  const { cart, setCart } = useOutletContext();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const categories = ["All", "Computer", "Electrical", "Civil"];

  
  const filteredProjects = projects
    .filter((item) =>
      selectedCategory === "All" ? true : item.category === selectedCategory
    )
    .filter(
      (item) =>
        item.productName.toLowerCase().includes(searchText.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchText.toLowerCase())
    );

  
  const suggestions = searchText
    ? projects
        .filter(
          (p) =>
            p.productName.toLowerCase().includes(searchText.toLowerCase()) ||
            p.brand.toLowerCase().includes(searchText.toLowerCase())
        )
        .slice(0, 15)
    : [];

  
  const handleAddToCart = (project) => {
    const exists = cart.find((p) => p.id === project.id);
    if (exists) {
      setCart(
        cart.map((p) =>
          p.id === project.id ? { ...p, qty: p.qty + 1 } : p
        )
      );
    } else {
      setCart([
        ...cart,
        {
          id: project.id,
          name: project.productName,
          price: Number(project.currentPrice),
          oldPrice: Number(project.oldPrice),
          cover: project.img,
          qty: 1,
          selected: false,
        },
      ]);
    }
  };

  
  return (
    <div className="mx-auto py-10 container px-5 lg:px-20">
      {/* Search and Title */}
      <div className="py-5">
        <div id="search-wrapper" className="mb-6 flex justify-center relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search project..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              setShowSuggestions(true);
            }}
            className="border rounded-xl px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          {showSuggestions && suggestions.length > 0 && (
            <ul className="border bg-white shadow absolute w-full max-h-48 overflow-auto z-10 rounded mt-15">
              {suggestions.map((sugg) => (
                <li
                  key={sugg.id}
                  onMouseDown={() => {
                    setSearchText(sugg.productName);
                    setShowSuggestions(false);
                  }}
                  className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {sugg.productName} {sugg.brand && `(${sugg.brand})`}
                </li>
              ))}
            </ul>
          )}
        </div>

        <h2 className="font-bold text-3xl bg-gray-200 inline-block py-2 px-3 rounded-2xl text-gray-700">
          Project Materials
        </h2>
      </div>

      {/* Category Filter */}
      <div className="flex justify-start lg:justify-center overflow-auto gap-4 mb-10 bg-linear-to-r from-green-50 to-green-100 py-4 rounded-2xl">
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
              selectedCategory === cat
                ? "bg-linear-to-r from-green-400 to-green-600 text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-green-400 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProjects.map((item) => (
          <div
            key={item.id}
            className="relative rounded-2xl overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl bg-linear-to-b from-white/80 to-white/60 backdrop-blur-md"
          >
            <img
              src={item.img}
              alt={item.productName}
              className="w-full h-60 object-cover rounded-t-2xl"
            />

            {item.offPercentage && (
              <div className="absolute top-3 left-3 bg-linear-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full font-semibold text-sm shadow-lg">
                {item.offPercentage}% OFF
              </div>
            )}

            <div className="p-4">
              <p className="font-medium text-gray-500">{item.brand}</p>
              <h3 className="font-semibold text-xl mt-1 mb-2 text-gray-800">
                {item.productName}
              </h3>
              <div className="flex justify-between items-center">
                <p className="font-bold text-green-600 text-lg">
                  ${item.currentPrice}
                  {item.oldPrice && (
                    <span className="text-sm text-gray-400 line-through ml-2">
                      ${item.oldPrice}
                    </span>
                  )}
                </p>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="bg-blue-500 text-white px-4 py-1 rounded-xl hover:bg-blue-600 transition-all duration-300"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
