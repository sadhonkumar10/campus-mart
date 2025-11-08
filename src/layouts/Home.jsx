import React, { useState } from "react";
import Nav from "../Componants/Nav";
import Hero from "../Componants/Hero";
import Book from "../Componants/Book";
import Footer from "../Footer.jsx/Footer";

export default function Home() {

  const[searchText, setSearchText]=useState("")
   const [cartItems, setCartItems] = useState([]); 

   const handeladdcart =(book)=> {
    const isAlreadyInCart = cartItems.find((item) => item.code === book.code);
    if (!isAlreadyInCart) {
      setCartItems([...cartItems, book]);
    } else {
      alert("Already added to cart!");
    }
  };

  return (
    <div className="bg-">
      <div>
       
      </div>
      <Nav searchText={searchText} setSearchText={setSearchText}/>
      <Hero />
      <div>
        <Book searchText={searchText} onAddToCart={handeladdcart}/>
      </div>
      <Footer />
    </div>
  );
}
