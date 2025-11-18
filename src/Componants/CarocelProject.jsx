import React, { useEffect, useState } from "react";
import ButtonAll from "./ButtonAll";
import { Link, Links } from "react-router";

export default function CarocelProject() {
  const [project, setProject] = useState([]);

  useEffect(() => {
    fetch("/Project.json")
      .then((res) => res.json())
      .then((data) => setProject(data))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  return (
    <>
      <div className="max-w-7xl mx-auto px-5 lg:px-20 py-10">
        <h2 className="text-3xl font-bold text-center mb-10 text-black">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {project.slice(0, 8).map((item, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative">
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
              </div>

              {/* Card Info */}
              <div className="p-4 bg-linear-to-b from-white/80 to-white/60 backdrop-blur-md rounded-b-2xl">
                <p className="font-medium text-gray-500">{item.brand}</p>
                <h3 className="font-semibold text-xl mt-1 mb-2 text-gray-800">
                  {item.productName}
                </h3>
                <p className="text-gray-600 mb-2">Rating: {item.rating} </p>

                <div className="flex justify-between items-center">
                  <p className="font-bold text-green-600">
                    ${item.currentPrice}
                    {item.oldPrice && (
                      <span className="line-through text-gray-400 text-sm ml-2">
                        ${item.oldPrice}
                      </span>
                    )}
                  </p>
                  <Link to="/project">
                    <button className="bg-blue-500 text-white px-4 py-1 rounded-xl hover:bg-blue-600 transition cursor-pointer">
                      See more
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center py-10">
          <Link to="/project">
            <button className="py-3 px-8 bg-linear-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl shadow-lg hover:from-pink-500 hover:to-purple-500 transition-all duration-300 cursor-pointer">
              See More Projects
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
