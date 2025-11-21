import React, { useEffect, useState } from "react";
import { Link } from "react-router";

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
      <div className="max-w-7xl mx-auto px-5 lg:px-20 py-10 ">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900 tracking-wide">
          Featured{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {project.slice(0, 8).map((item, index) => (
            <div
              key={index}
              className="relative rounded-3xl overflow-hidden shadow-xl bg-white/10 backdrop-blur-xl border border-white/20 
                         hover:shadow-purple-300/40 hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.img}
                  alt={item.productName}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/60 opacity-60"></div>

                {/* Discount Badge */}
                {item.offPercentage && (
                  <div
                    className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-600 text-white px-4 py-1.5 
                                  rounded-full text-sm font-semibold shadow-md"
                  >
                    {item.offPercentage}% OFF
                  </div>
                )}
              </div>

              {/* Info Section */}
              <div className="p-5">
                <p className="text-sm text-gray-500">{item.brand}</p>

                <h3 className="font-bold text-xl mt-1 mb-3 text-gray-900 group-hover:text-purple-600 transition">
                  {item.productName}
                </h3>

                <p className="text-gray-600 mb-3">⭐ {item.rating}</p>

                {/* Price & Button */}
                <div className="flex justify-between items-center">
                  <p className="font-bold text-green-600 text-lg">
                    ${item.currentPrice}
                    {item.oldPrice && (
                      <span className="line-through text-gray-400 text-sm ml-2">
                        ${item.oldPrice}
                      </span>
                    )}
                  </p>

                  <Link to="/project">
                    <button
                      className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl 
                                       shadow-md hover:shadow-lg hover:opacity-90 transition-all duration-300"
                    >
                      See more
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Button */}
        <div className="text-center py-12">
          <Link to="/project">
            <button
              className="py-3 px-10 text-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                               text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl 
                               hover:scale-105 active:scale-95 transition-all duration-300"
            >
              See More Projects
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
