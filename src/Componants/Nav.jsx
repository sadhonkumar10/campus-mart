import React, { useState, useContext } from "react";
import { CgShoppingCart } from "react-icons/cg";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { Link, NavLink } from "react-router";
import { UserContext } from "../UserContext";

export default function Nav({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const { user, logout } = useContext(UserContext);

  return (
    <div className="sticky top-0 w-full bg-white shadow-md z-50 transition-all">
      <div className="navbar container mx-auto px-6 md:px-10 flex justify-between items-center h-20">
       <Link to='/'>
        <div className="flex items-center gap-3">
          <img src="/campus-logo.png" alt="logo" className="h-[60px]" />
        </div>
       
       </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-semibold text-gray-700">
          <Link to="/">
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
          </Link>

          <Link to="/departmentBooks">
            <li className="hover:text-blue-500 cursor-pointer">Department</li>
          </Link>
          <Link to="/project">
            <li className="hover:text-blue-500 cursor-pointer">Project</li>
          </Link>
          <Link to="/Blog">
            <li className="hover:text-blue-500 cursor-pointer">Areticles</li>
          </Link>
          <Link to="/about">
            <li className="hover:text-blue-500 cursor-pointer">About</li>
          </Link>
          <Link to="/contact">
            <li className="hover:text-blue-500 cursor-pointer">Contact</li>
          </Link>
        </ul>

        <div className="flex items-center gap-4">
          {/* Cart */}

          <Link to="/cart" className="relative">
            <CgShoppingCart className="text-2xl text-gray-600 hover:text-blue-500" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
              {cartCount}
            </span>
          </Link>

          {/* Login Button (User না থাকলে দেখাবে) */}
          {!user && (
            <NavLink to="/login">
              <button className="btn btn-sm">Login</button>
            </NavLink>
          )}

          {/* User Avatar Dropdown */}
          {user && (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="User"
                    src="/campus-logo.png"
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
                  <button onClick={logout}>Logout</button>
                </li>
              </ul>
            </div>
          )}

          {/* Mobile Menu Toggle */}
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

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-50 border-t border-gray-200 shadow-inner">
          <ul className="flex flex-col gap-4 px-6 py-4 text-gray-700 font-semibold">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/departmentBooks">
              <li>Department-Books</li>
            </Link>
            <Link to="/project">
              <li>Project-Matarials</li>
            </Link>
            <Link to="/contact">
              <li>Areticles</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
}
