import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

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
      if (window.innerWidth < 640) setChunkSize(1);
      else if (window.innerWidth < 1024) setChunkSize(2);
      else setChunkSize(5);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Chunk books
  useEffect(() => {
    const chunkArray = (arr, size) => {
      const chunks = [];
      for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
      }
      return chunks;
    };
    setSlides(chunkArray(books, chunkSize));
  }, [books, chunkSize]);

  // Fix first autoplay glitch
  useEffect(() => {
    const timeout = setTimeout(() => setReady(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  if (!ready) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 relative">
      <h2 className="text-3xl font-bold text-center mb-8">
        Our Books Collection
      </h2>

      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={3000}        // 3 seconds per slide
        transitionTime={400}   // 0.4s slide transition
        swipeable
        emulateTouch
        showIndicators={false}
        centerMode={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
            >
              <FiChevronLeft size={24} />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
            >
              <FiChevronRight size={24} />
            </button>
          )
        }
      >
        {slides.map((group, index) => (
          <div key={index} className="flex justify-center gap-6 flex-wrap">
            {group.map((book) => (
              <div
                key={book.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl w-44"
              >
                <img
                  src={book.cover}
                  alt={book.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-3 text-center">
                  <h3 className="font-semibold text-lg">{book.name}</h3>
                  <p className="text-sm text-gray-500">{book.publication}</p>
                  <p className="font-bold mt-1 text-blue-600">
                    {book.price} BDT
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
}
