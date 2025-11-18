import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-linear-to-r from-green-100 to-green-50 text-gray-700 px-8 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div className="space-y-4">
          <img
            src="/campus-logo.png"
            alt="Campus-Mart Logo"
            className="h-24 w-auto"
          />
          <p className="text-gray-600 text-sm">
            Fast, simple, and student-friendly marketplace for your polytechnic
            life. <br />
            From textbooks and notes to gadgets and projects!
          </p>
        </div>

        <div>
          <h6 className="text-lg font-semibold mb-3 border-b-2 border-green-400 inline-block pb-1">
            Services
          </h6>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-green-600 transition-colors">
                Books & Notes
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors">
                Gadgets
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors">
                Projects & Materials
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors">
                Student Essentials
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h6 className="text-lg font-semibold mb-3 border-b-2 border-green-400 inline-block pb-1">
            Company
          </h6>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-green-600 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors">
                Campus Partnership
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h6 className="text-lg font-semibold mb-3 border-b-2 border-green-400 inline-block pb-1">
            Legal
          </h6>
          <ul className="space-y-2 mb-4">
            <li>
              <a href="#" className="hover:text-green-600 transition-colors">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors">
                Refund Policy
              </a>
            </li>
          </ul>

          <h6 className="text-lg font-semibold mb-2">Follow Us</h6>
          <div className="flex gap-4">
            <a
              href="#"
              className="p-2 bg-white rounded-full shadow hover:bg-green-100 transition-colors"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="p-2 bg-white rounded-full shadow hover:bg-green-100 transition-colors"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              className="p-2 bg-white rounded-full shadow hover:bg-green-100 transition-colors"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="p-2 bg-white rounded-full shadow hover:bg-green-100 transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="#"
              className="p-2 bg-white rounded-full shadow hover:bg-green-100 transition-colors"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Campus-Mart. All rights reserved.
      </div>
    </footer>
  );
}
