import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router"; 

export default function FadeSlider() {
  const [books, setBooks] = useState([]);
  const [chunkSize, setChunkSize] = useState(5);
  const [slides, setSlides] = useState([]);
  const [ready, setReady] = useState(false);

  // Load books JSON
  useEffect(() => {
    fetch("/Books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  // Responsive chunk size
  useEffect(() => {
    const updateSize = () => {
      // Determine the current chunk size based on window width
      const width = window.innerWidth;
      if (width < 640) setChunkSize(1);
      else if (width < 768) setChunkSize(2); 
      else if (width < 1024) setChunkSize(3); 
      else if (width < 1280) setChunkSize(4); 
      else setChunkSize(5); 
    };
    updateSize();

    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Slice into groups
  useEffect(() => {
    const chunkArray = (arr, size) => {
      const chunks = [];
      for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
      }
      return chunks;
    };
    if (books.length > 0 && chunkSize > 0) {
      setSlides(chunkArray(books, chunkSize));
    }
    // Dependency includes chunkSize to re-chunk when the size changes
  }, [books, chunkSize]); 

  // Prevent first autoplay glitch
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 100);
    return () => clearTimeout(t);
  }, []);

  if (!ready || slides.length === 0) return null;

  // --- Custom Render Props for Arrows ---

  const renderPrevArrow = (onClickHandler, hasPrev, label) =>
    hasPrev && (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 
          bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg border border-gray-100 
          text-gray-700 hover:text-blue-600 hover:ring-2 hover:ring-blue-500/50 transition duration-200 hidden md:block"
      >
        <FiChevronLeft size={24} />
      </button>
    );

  const renderNextArrow = (onClickHandler, hasNext, label) =>
    hasNext && (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 
          bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg border border-gray-100 
          text-gray-700 hover:text-blue-600 hover:ring-2 hover:ring-blue-500/50 transition duration-200 hidden md:block"
      >
        <FiChevronRight size={24} />
      </button>
    );

  // --- Component Render ---

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 relative">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 text-gray-900 tracking-tight">
        📚 Premium Books Collection
      </h2>
      <hr className="w-24 h-1 bg-blue-600 mx-auto mb-12 rounded-full" />

      {/* FIX: Use chunkSize as the key to force re-render on breakpoint change */}
      <Carousel
        key={chunkSize} // This is the crucial fix for responsive issues
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={3000}
        transitionTime={600}
        showIndicators={false}
        swipeable
        emulateTouch
        centerMode={false} 
        stopOnHover={true}
        renderArrowPrev={renderPrevArrow}
        renderArrowNext={renderNextArrow}
      >
        {slides.map((group, index) => (
          <div
            key={index}
            className={`grid gap-4 lg:gap-8 justify-center items-stretch py-2 px-6 sm:px-0 
                grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
            `}
          >
            {group.map((book) => (
              <Link to={`/books/${book.id}`} key={book.id}> 
                <div
                  className="bg-white h-full border border-gray-100 rounded-xl overflow-hidden shadow-xl 
                    hover:shadow-2xl transition-all duration-300 
                    hover:-translate-y-1 cursor-pointer transform group"
                >
                  <div className="overflow-hidden">
                    <img
                      src={book.cover}
                      alt={book.name}
                      className="w-full h-72 md:h-80 object-cover transition duration-500 group-hover:scale-105" 
                    />
                  </div>

                  <div className="p-4 md:p-5 text-center">
                    <h3 className="font-bold text-base md:text-lg text-gray-900 truncate">
                      {book.name}
                    </h3>
                    <p className="text-gray-500 text-xs md:text-sm truncate mt-1">
                        By {book.publication}
                    </p>

                    <p className="font-extrabold mt-3 text-lg md:text-xl text-blue-600">
                      {book.price} BDT
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
}