// src/components/InfiniteCarousel.js
import React, { useState, useEffect, useRef } from 'react';

import Card from "../components/Card";

import "../styles/Carrusel.css";


import costales from "../assets/costales.svg";
import amarillo from "../assets/amarillo.svg";
import spiderman from "../assets/spiderman.webp";

const InfiniteCarousel = ({ cardData }) => {

 

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Cambiar de imagen cada 3 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden h-[40rem] m-auto w-[30rem]   ">
      <div
        className="flex transition-transform duration-700 h-full "
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        ref={carouselRef}
      >
          {cardData.map((card) => (

          <div className="flex-shrink-0 w-full h-full p-5  " key={card.id}>
            <img src={card.image} alt={`Slide ${card.id}`} className="w-full h-96" />
              <div className=' space-y-10 shadow-xl rounded-lg p-5'>
                <h2 className="font-bold text-xl ">{card.title}</h2>
                <p className="text-gray-700 text-base">{card.text}</p>
                <p className='font-bold text-lg '>saber mas</p>
              </div>
          </div>

        ))}
      
      </div>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-black bg-opacity-50 text-white px-2 py-1"
        onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length)}
      >
        Prev
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-black bg-opacity-50 text-white px-2 py-1"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default InfiniteCarousel;
