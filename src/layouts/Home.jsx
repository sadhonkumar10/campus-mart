import React, { useState } from "react";
import Nav from "../Componants/Nav";
import Hero from "../Componants/Hero";
import Book from "../Componants/Book";
import Footer from "../Footer.jsx/Footer";
import { useOutletContext } from "react-router";
import Carocel from "../Componants/Carocel";
import CarocelProject from "../Componants/CarocelProject";
import Project from "../Componants/pages/Project";


export default function Home() {

 
  //  const [cartItems, setCartItems] = useState([]); 
  //  const { searchText } = useOutletContext();

  //  const handeladdcart =(book)=> {
  //   const isAlreadyInCart = cartItems.find((item) => item.code === book.code);
  //   if (!isAlreadyInCart) {
  //     setCartItems([...cartItems, book]);
  //   } else {
  //     alert("Already added to cart!");
  //   }
  // };

  return (
    <div className="bg-">
      <div>
       
      </div>
      
      <Hero />
      <div>
        {/* <Book searchText={searchText} onAddToCart={handeladdcart}/> */}
      </div>
      <Carocel/>
      <CarocelProject/>
      
      
      
      
      <Footer />
    </div>
  );
}
