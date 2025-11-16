import React, { useState } from "react";
import { useLoaderData, useOutletContext } from "react-router";

export default function Project() {
  const projects = useLoaderData();
  const { cart, setCart } = useOutletContext();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Computer", "Electrical", "Civil"];

  // Filter projects by selected category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((item) => item.category === selectedCategory);

  // Add project to cart
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
          oldPrice: Number(project.oldPrice) ,
          cover: project.img,             
          qty: 1,
          selected: false,
        },
      ]);
    }
  };

  return (
    <div className="mx-auto py-5 container px-5 lg:px-20">
      <h2 className="font-bold pt-3 text-3xl text-blue-600">Project Materials</h2>

      {/* Category Buttons */}
      <div className="flex justify-start lg:justify-end overflow-auto gap-6 mb-8">
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(cat)}
            className={`${
              selectedCategory === cat
                ? "text-green-600 font-semibold border-b-2 border-green-600"
                : "text-gray-600"
            } hover:text-green-600 px-3 py-1`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredProjects.map((item) => (
          <div
            key={item.id}
            className="border-2 border-gray-300 rounded-2xl hover:scale-105 hover:duration-500"
          >
            <img
              src={item.img}
              alt={item.productName}
              className="w-full h-60 object-cover rounded-t-2xl"
            />
            <div className="pl-4 pr-4 py-3">
              <p className="font-semibold text-gray-500">{item.brand}</p>
              <h2 className="font-semibold text-2xl pb-2">{item.productName}</h2>
              <div className="flex justify-between items-center pt-2">
                <p className="text-lg font-bold text-green-600">
                  ${item.currentPrice}
                  {item.oldPrice && (
                    <span className="text-sm text-gray-400 line-through ml-2">
                      ${item.oldPrice}
                    </span>
                  )}
                </p>
                <button
                  className="bg-green-600 text-white px-4 py-1 rounded-xl hover:bg-green-500"
                  onClick={() => handleAddToCart(item)}
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
