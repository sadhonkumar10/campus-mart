import React, { useContext, useEffect, useState } from "react";
import { useOutletContext } from "react-router";
import { UserContext } from "../UserContext"; 
import toast from "react-hot-toast"; 

export default function CarocelProject() {
  const [project, setProject] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cart, setCart } = useOutletContext();
   const { user } = useContext(UserContext);

  useEffect(() => {
    fetch("/Project.json")
      .then((res) => res.json())
      .then((data) => setProject(data))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

 const handleAddToCart = (product) => {
    if (!user) {
      toast.error("Please login first to add items to cart!");
      return;
    }

    const exists = cart.find((p) => p.id === product.id);
    if (exists) {
      setCart(
        cart.map((p) => (p.id === product.id ? { ...p, qty: p.qty + 1 } : p))
      );
    } else {
      setCart([
        ...cart,
        {
          id: product.id,
          name: product.productName,
          price: Number(product.currentPrice),
          oldPrice: Number(product.oldPrice),
          cover: product.img,
          qty: 1,
          selected: false,
        },
      ]);
    }

    toast.success("Added to cart!");
  };
  return (
    <>
      <div className="max-w-7xl mx-auto px-5 lg:px-20 py-10 ">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900 tracking-wide">
          Featured{" "}
          <span className="bg-linear-to-r from-indigo-500 via-purple-500 to-sky-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {project.slice(0, 8).map((item, index) => (
            <div
              key={index}
              className="relative rounded-3xl overflow-hidden shadow-xl bg-white/10 backdrop-blur-xl border border-white/20 
                          hover:-translate-y-2 transition-all duration-500 group cursor-pointer"
              onClick={() => {
                setSelectedProduct(item);
                setIsModalOpen(true); 
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.img}
                  alt={item.productName}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-linear-to-b from-black/10 to-black/60 opacity-60"></div>

                {item.offPercentage && (
                  <div
                    className="absolute top-4 left-4 bg-linear-to-r from-red-500 to-pink-600 text-white px-4 py-1.5 
                                  rounded-full text-sm font-semibold shadow-md"
                  >
                    {item.offPercentage}% OFF
                  </div>
                )}
              </div>

              <div className="p-5">
                <p className="text-sm text-gray-500">{item.brand}</p>

                <h3 className="font-bold text-xl mt-1 mb-3 text-gray-900 group-hover:text-purple-600 transition">
                  {item.productName}
                </h3>

                <p className="text-gray-600 mb-3">⭐ {item.rating}</p>

                <div className="flex justify-between items-center mt-3">
                  <p className="font-bold text-green-600 text-lg">
                    ${item.currentPrice}
                    {item.oldPrice && (
                      <span className="line-through text-gray-400 text-sm ml-2">
                        ${item.oldPrice}
                      </span>
                    )}
                  </p>

                 
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); 
                      handleAddToCart(item);
                    }}
                    className=" py-2  md:py-3  px-4 md:px-6  text-sm  md:text-base bg-linear-to-r from-blue-500 to-sky-500  text-white rounded-xl font-bold  shadow-md  hover:shadow-lg transition-all  duration-300 "
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Button */}
        <div className="text-center py-12">
          <button
            onClick={() => {
              setSelectedProduct(project[0]);
              setIsModalOpen(true);
            }}
            className="py-3 px-10 text-lg bg-linear-to-r from-indigo-500 via-purple-500 to-sky-500
                               text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl 
                               hover:scale-105 active:scale-95 transition-all duration-300"
          >
            See More Projects
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-6 w-[90%] max-w-lg shadow-2xl relative">
            <button
              className="absolute top-3 right-3 text-2xl text-gray-600 hover:text-black"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>

            <img
              src={selectedProduct.img}
              className="w-full h-64 object-cover rounded-xl mb-4"
              alt={selectedProduct.productName}
            />

            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {selectedProduct.productName}
            </h2>

            <p className="text-gray-500 mb-2">Brand: {selectedProduct.brand}</p>
            <p className="text-gray-600 mb-2">⭐ {selectedProduct.rating}</p>

            <p className="text-xl font-bold text-green-600 mb-3">
              ${selectedProduct.currentPrice}
              {selectedProduct.oldPrice && (
                <span className="line-through text-gray-400 text-sm ml-2">
                  ${selectedProduct.oldPrice}
                </span>
              )}
            </p>

            <p className="text-gray-700 mb-5 leading-relaxed">
              {selectedProduct.description || "No description available."}
            </p>

           
            <button
              onClick={() => {
                handleAddToCart(selectedProduct); 
                setIsModalOpen(false);
              }}
              className="w-full py-3 bg-linear-to-r from-indigo-500 to-purple-500 
                         text-white rounded-xl font-bold shadow-md hover:shadow-lg 
                         transition-all"
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
}
