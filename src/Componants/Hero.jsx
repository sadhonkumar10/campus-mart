import React from "react";
import ButtonAll from "./ButtonAll";
import { BiBook } from "react-icons/bi";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-linear-to-br from-blue-800 via-blue-600 to-blue-400">
      <div className="absolute top-10 right-10 animate-pulse text-white/30 text-3xl font-bold">
        <img src="/campus-logo.png" alt="" className="h-40" />
      </div>
      <div className="absolute bottom-32 left-16 animate-pulse text-white/30 text-2xl font-bold flex items-center">
        <BiBook className="font-bold text-5xl text-blue-950" /> <h1>BOOKS</h1>
      </div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 animate-pulse text-white/80 text-4xl font-bold"></div>

      <div className="absolute w-[500px] h-[500px] bg-blue-300/20 blur-3xl rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-indigo-400/20 blur-2xl rounded-full bottom-[-100px] -right-20" />

      <div className="h-screen flex flex-col justify-center items-center text-center px-5">
        <h1 className="text-white font-extrabold text-4xl md:text-6xl lg:text-7xl leading-tight drop-shadow-lg">
          Your Ultimate Marketplace <br />
          for Polytechnic Students
        </h1>

        <p className="max-w-3xl mt-6 mb-10 text-gray-200 text-lg md:text-2xl">
          Books, notes, gadgets, tools, and everything you need for polytechnic
          life — fast, reliable & student-friendly.
        </p>

        <ButtonAll text="Explore" />
      </div>
    </div>
  );
}
