import React from 'react'
import ButtonAll from './ButtonAll'

export default function Nav() {
  return (

    
    <div>
      
      
       <div className=" fixed w-full border-b-2 border-gray-200 bg-blue-100 shadow-xl z-10">
          <div className="flex w-11/12 mx-auto justify-between align-middle items-center  ">
            <div className="">
               <img
                src="/campus-logo.png"
                alt=""
                className="h-[70px]  "
              /> 
            </div>
            <div className="text-center  border-black  hidden lg:block md:block  ">
              <input
                type="text"
                placeholder="Search here..."
                className="w-80  px-4 py-2 border border-black focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none placeholder:text-gray-400  rounded-l-2xl rounded-r-none rounded-t-none "
              />
              <button
                className="btn h-[42px] bg-linear-to-r from-[#2193b0] to-[#6dd5ed] text-white border-none 
         text-[15px] font-bold cursor-pointer relative z-10 overflow-hidden
         hover:text-black
         before:content-[''] before:absolute before:top-0 before:bottom-0
         before:left-[-20%] before:right-[-20%]  before:bg-linear-to-r before:from-white before:to-sky-100 before:-z-10
         before:transform-[skewX(-45deg)_scaleX(0)_scaleY(1)]
         before:transition-all before:duration-500
         hover:before:transform-[skewX(-45deg)_scaleX(1)_scaleY(1)] rounded-l-none rounded-r-2xl rounded-t-none mb-1"
              >
                Search
              </button>
            </div>
            <div className=" flex items-center gap-[3px] lg:gap-8  text-white">
              <ButtonAll text="Register" />

              <i className=" fa-solid fa-cart-shopping lg:text-2xl text-gray-500 cursor-pointer"></i>

              <i className="fa-solid fa-bell lg:text-2xl text-gray-500 cursor-pointer"></i>
              <div className=" md:hidden lg:hidden">
                {" "}
                <i className="fa-solid fa-magnifying-glass cursor-pointer"></i>

                
              </div>
              <input type="checkbox" value="synthwave" className="toggle theme-controller" />

            </div>
          </div>
        </div>
    </div>
  )
}
