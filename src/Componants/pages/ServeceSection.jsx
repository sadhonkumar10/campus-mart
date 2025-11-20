import React from 'react'
import { BiBookOpen, BiPackage, BiShoppingBag, BiWallet } from 'react-icons/bi';
import { BsPercent, BsTruck } from 'react-icons/bs';
import { CgShoppingCart } from 'react-icons/cg';
import { FaSchool } from 'react-icons/fa';
import { FiMessageCircle, FiRefreshCw } from 'react-icons/fi';

export default function ServeceSection() {

     const services = [
    {
      title: "Fast & Safe Delivery",
      desc: "We deliver your products quickly and safely inside the campus.",
      icon: <BsTruck size={40} />,
    },
    {
      title: "Cash on Delivery",
      desc: "Pay only after receiving the product.",
      icon: <BiWallet size={40} />,
    },
    {
      title: "Pre‑Order System",
      desc: "Pre‑order books, gadgets, and accessories easily.",
      icon: <CgShoppingCart size={40} />,
    },
    {
      title: "Department‑wise Store",
      desc: "Find products category‑wise for every department.",
      icon: <FaSchool size={40} />,
    },
    {
      title: "Textbooks & Notes",
      desc: "Get semester‑wise books, notes, lab sheets, and hand notes.",
      icon: <BiBookOpen size={40} />,
    },
    
    {
      title: "24/7 Chat Support",
      desc: "Get instant support anytime.",
      icon: <FiMessageCircle size={40} />,
    },
    {
      title: "Easy Return & Replacement",
      desc: "Return or replace products without any hassle.",
      icon: <FiRefreshCw size={40} />,
    },
    {
      title: "Secure Packaging",
      desc: "Your items are wrapped with strong and weatherproof packaging.",
      icon: <BiPackage size={40} />,
    },
    {
      title: "Campus Marketplace",
      desc: "Buy and sell used books and gadgets inside the campus.",
      icon: <BiShoppingBag size={40} />,
    },
  ];
  return (
    <div>
         <section className="w-full bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-600 mb-12">
          Everything you need inside your campus in one place.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 border border-gray-200"
            >
              <div className="text-5xl mb-4 flex justify-center text-blue-400">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
      
    </div>
  )
}
