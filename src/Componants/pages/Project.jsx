import React, { useContext, useState } from "react";
import { useLoaderData, useOutletContext } from "react-router";
import toast from "react-hot-toast"; 
import { UserContext } from "../../UserContext";

export default function Project() {
  const projects = useLoaderData();
  const { cart, setCart } = useOutletContext();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const { user } = useContext(UserContext);
  const [selectedProject, setSelectedProject] = useState(null); // modal state

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
    if (!user) {
      toast.error("Please login first to add items to cart!");
      return;
    }

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

    toast.success("Added to cart!");
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

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((item) => (
          <div
            key={item.id}
            className="relative rounded-2xl overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl bg-linear-to-b from-white/80 to-white/60 backdrop-blur-md cursor-pointer"
            onClick={() => setSelectedProject(item)}
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
                  BDT {item.currentPrice}
                  {item.oldPrice && (
                    <span className="text-sm text-gray-400 line-through ml-2">
                      BDT {item.oldPrice}
                    </span>
                  )}
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // prevent modal open
                    handleAddToCart(item);
                  }}
                  className="bg-blue-500 text-white px-4 py-1 rounded-xl hover:bg-blue-600 transition-all duration-300 cursor-pointer"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 backdrop-blur  bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-11/12 md:w-2/3 lg:w-1/2 p-6 relative shadow-blue-400 border-2 border-gray-400">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold"
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </button>
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src={selectedProject.img}
                alt={selectedProject.productName}
                className="w-full md:w-1/2 h-60 object-cover rounded-2xl"
              />
              <div className="md:w-1/2 flex flex-col justify-between">
                <div>
                  <p className="font-medium text-gray-500">{selectedProject.brand}</p>
                  <h3 className="font-bold text-2xl my-2">{selectedProject.productName}</h3>
                  <p className="text-gray-700 mb-4">{selectedProject.description}</p>
                  <p className="font-bold text-green-600 text-lg">
                    BDT{selectedProject.currentPrice}
                    {selectedProject.oldPrice && (
                      <span className="text-sm text-gray-400 line-through ml-2">
                        BDT{selectedProject.oldPrice}
                      </span>
                    )}
                  </p>
                </div>
                <button
                  onClick={() => {
                    handleAddToCart(selectedProject);
                    setSelectedProject(null);
                  }}
                  className="bg-blue-500 text-white px-4 py-2 rounded-xl mt-4 hover:bg-blue-600 transition-all duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
