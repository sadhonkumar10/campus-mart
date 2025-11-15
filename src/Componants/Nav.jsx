import React, { useState } from "react";
import { CgShoppingCart } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { Link } from "react-router";

export default function Nav({ searchText, setSearchText, cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 w-full bg-white shadow-md z-50 transition-all">
      <div className="navbar px-6 md:px-10 flex justify-between items-center h-[80px]">
        <div className="flex items-center gap-3">
          <img src="/campus-logo.png" alt="logo" className="h-[60px]" />
        </div>

        <ul className="hidden md:flex gap-8 font-semibold text-gray-700">
          <Link to="/">
            {" "}
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
          </Link>
          <Link to="/about">
            {" "}
            <li className="hover:text-blue-500 cursor-pointer">About</li>
          </Link>
          <Link to="/departmentBooks">
            {" "}
            <li className="hover:text-blue-500 cursor-pointer">
              Department-Books
            </li>
          </Link>
          <Link to="/project">
            <li className="hover:text-blue-500 cursor-pointer">
              Project-Matarials
            </li>
          </Link>
          <Link to="/contact">
            <li className="hover:text-blue-500 cursor-pointer">Contact</li>
          </Link>
        </ul>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            {/* <input
              type="text"
              placeholder="Search for products..."
              className="input input-bordered w-[250px]"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            /> */}
          </div>

          <button className="btn btn-ghost btn-circle">
            <FaRegHeart className="text-2xl text-gray-600 hover:text-pink-500" />
          </button>

          <button className="btn btn-ghost btn-circle relative">
            <CgShoppingCart className="text-2xl text-gray-600 hover:text-blue-500" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-[5px]">
                {cartCount}
              </span>
            )}
          </button>

          <div className="dropdown dropdown-end ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[100] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>

          <div className="md:hidden">
            {menuOpen ? (
              <HiX
                className="text-3xl text-gray-700 cursor-pointer"
                onClick={() => setMenuOpen(false)}
              />
            ) : (
              <HiOutlineMenu
                className="text-3xl text-gray-700 cursor-pointer"
                onClick={() => setMenuOpen(true)}
              />
            )}
          </div>
        </div>
      </div>

      <div className="md:hidden px-4 pb-2">
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered w-full"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      {menuOpen && (
        <div className="md:hidden bg-blue-50 border-t border-gray-200 shadow-inner animate-fadeIn">
          <ul className="flex flex-col gap-4 px-6 py-4 text-gray-700 font-semibold">
             <Link to="/">
            {" "}
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
          </Link>
          <Link to="/about">
            {" "}
            <li className="hover:text-blue-500 cursor-pointer">About</li>
          </Link>
          <Link to="/departmentBooks">
            {" "}
            <li className="hover:text-blue-500 cursor-pointer">
              Department-Books
            </li>
          </Link>
          <Link to="/project">
            <li className="hover:text-blue-500 cursor-pointer">
              Project-Matarials
            </li>
          </Link>
          <Link to="/contact">
            <li className="hover:text-blue-500 cursor-pointer">Contact</li>
          </Link>
          </ul>
        </div>
      )}
    </div>
  );
}
