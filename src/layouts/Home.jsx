import React, { useState, useEffect } from "react";
  // তোমার Loader কম্পোনেন্ট
import Hero from "../Componants/Hero";
import Carocel from "../Componants/Carocel";
import CarocelProject from "../Componants/CarocelProject";
import ServeceSection from "../Componants/pages/ServeceSection";
import Loader from "../Loder";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader/>; 
  }

  return (
    <div className="bg-">
      <Hero />
      <Carocel />
      <CarocelProject />
      <ServeceSection />
    </div>
  );
}
