import React from 'react'
import ButtonAll from './ButtonAll'

export default function Hero() {
  return (
    <div>
      <div className="bg-blue-100 ">
          <div className="   w-11/12 m-auto">
            <div className="text-white text-center py-40">
              <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-500  to-black pt-[] pb-4">
                You are go-to Marketplace for <br />
                all things Polytechnic.
              </h1>
              <p className="text-gray-400 pb-2 text-xl">
                Fast, simple, and Student-friendly Marketplace designed for your
                polytechnic life <br />
                from textbooks and notes to gadgets and projects!
              </p>
              <ButtonAll text="Explore" />
            </div>
          </div>
        </div>
    </div>
  )
}
