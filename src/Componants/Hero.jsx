import React from "react";
import ButtonAll from "./ButtonAll";

export default function Hero() {
  return (
    <div>
      <div className="bg-linear-to-b from-white/50  to-black/10 h-screen flex flex-col items-center justify-center">
        <div className="text-white text-center  ">
          <h1 className="text-2xl lg:text-7xl md:text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-500  to-black pt-[] pb-4">
            You are go-to Marketplace for <br />
            all things Polytechnic.
          </h1>
          <p className="text-gray-400 py-5 pb-7 text-2xl">
            Fast, simple, and Student-friendly Marketplace designed for your
            polytechnic life <br />
            from textbooks and notes to gadgets and projects!
          </p>
          <ButtonAll text="Explore" />
        </div>
      </div>
    </div>
  );
}
