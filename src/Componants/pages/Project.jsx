import React, { useState } from "react";
import { useLoaderData } from "react-router";
import CarocelProject from "../CarocelProject";

export default function Project() {
  const projects = useLoaderData();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Computer", "Electrical", "Civil"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((item) => item.category === selectedCategory);

  return (
    <div className=" mx-auto py-5 container px-5 lg:px-20">
      <h2 className="font-bold pt-3 text-3xl bg-clip-text text-transparent bg-linear-to-r from-blue-500  to-black  ">
        Project-Matarials
      </h2>

      <div className="flex justify-start lg:justify-end  overflow-auto gap-6 mb-8">
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(cat)}
            className={`${
              selectedCategory === cat
                ? "text-[#3BB77E] font-semibold border-b-2 border-[#3BB77E]"
                : "text-gray-600"
            } hover:text-[#3BB77E] px-3 py-1`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredProjects.map((item, index) => (
          <div
            key={index}
            className="border-2 border-gray-300 rounded-2xl hover:scale-105 hover:duration-500"
          >
            <div className="relative">
              <img
                src={item.img}
                alt={item.productName}
                className="w-full h-60 object-cover rounded-t-2xl"
              />
              <div className="pl-4 pr-4 py-3">
                <p className="font-semibold text-[#ADADAD]">{item.brand}</p>
                <h2 className="font-semibold text-2xl pb-2">
                  {item.productName}
                </h2>
                <p className="text-lg pb-2">Rating: {item.rating}</p>
                <p className="absolute top-2 left-2 bg-[#2747e8] text-white px-2 py-1 rounded-2xl">
                  {item.offPercentage}%
                </p>
                <div className="flex justify-between items-center pt-2">
                  <p className="text-lg font-bold text-[#3BB77E]">
                    ${item.currentPrice}
                    <span className="text-sm text-gray-400 line-through ml-2">
                      ${item.oldPrice}
                    </span>
                  </p>
                  <button className="bg-[#3BB77E] text-white px-4 py-1 rounded-xl hover:bg-[#2c9a65]">
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
