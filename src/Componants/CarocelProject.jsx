import React, { useEffect, useState } from 'react'
import ButtonAll from './ButtonAll';
import { Link } from 'react-router';

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
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 container mx-auto px-5 lg:px-20'>
      {project.slice(0, 8).map((item, index) => (
        <div key={index} className="border-2 border-gray-300  rounded-2xl hover:scale-105 hover:duration-500">
          <div className="relative">
            <img
              src={item.img}
              alt={item.productName}
              className="w-full h-60 object-cover rounded-t-2xl"
            />
            <div className="pl-4 pr-4 py-3">
              <p className="font-semibold text-[#ADADAD]">{item.brand}</p>
              <h2 className="font-semibold text-2xl pb-2">{item.productName}</h2>
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
    <Link to='/project'  >

       <div className='text-center py-5'>
        <button className='py-3 px-6 bg-gray-400 font-bold rounded-xl text-white cursor-pointer hover:bg-transparent hover:text-black hover:transform duration-350  '>See More</button>
       </div>
    </Link>
    </>
  )
}
