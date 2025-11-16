import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal  px-15 mx-auto p-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-gray-300 ">
      
      {/* Logo & Description */}
      <div>
        <img src="/campus-logo.png" alt="Campus-Mart Logo" className="h-24 mb-3" />
        <p className="text-gray-400">
          Fast, simple, and student-friendly marketplace for your polytechnic life. <br />
          From textbooks and notes to gadgets and projects!
        </p>
      </div>

      {/* Services */}
      <div className="">
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Books & Notes</a>
        <a className="link link-hover">Gadgets</a>
        <a className="link link-hover">Projects & Materials</a>
        <a className="link link-hover">Student Essentials</a>
      </div>

      {/* Company */}
      <div>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About Us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Careers</a>
        <a className="link link-hover">Campus Partnership</a>
      </div>

      {/* Legal */}
      <div>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of Use</a>
        <a className="link link-hover">Privacy Policy</a>
        <a className="link link-hover">Refund Policy</a>
      </div>

      {/* Social */}
      <div>
        <h6 className="footer-title">Follow Us</h6>
        <div className="flex gap-3 mt-2">
          <a href="#" className="link link-hover"><FaInstagram size={20} /></a>
          <a href="#" className="link link-hover"><FaFacebook size={20} /></a>
          <a href="#" className="link link-hover"><FaTwitter size={20} /></a>
          <a href="#" className="link link-hover"><FaLinkedin size={20} /></a>
          <a href="#" className="link link-hover"><FaGithub size={20} /></a>
        </div>
      </div>
    </footer>
  );
}
