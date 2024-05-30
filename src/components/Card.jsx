import React from 'react'

import spiderman from "../assets/spiderman.webp";

const Card = ({ image, title, text }) => {

  return (
    <div className=" w-96   rounded overflow-hidden shadow-lg bg-white m-auto p-4 transition-transform transform hover:scale-105">
      <div className=" flex flex-col items-center  px-6 ">
        <div className="font-bold text-lg mb-2">{title}</div>
        <p className="text-gray-700 text-base">{text}</p>
      </div>
      <div className='flex justify-center w-32 py-2 rounded-lg bg-lime-500 hover:bg-lime-600 m-auto mt-5 px-6 cursor-pointer  '>
        <p className='font-bold text-sm uppercase'>saber mas</p>
      </div>
    </div>
  )
}

export default Card