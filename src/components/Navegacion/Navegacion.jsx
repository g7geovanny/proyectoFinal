import React from 'react'

/* Imagenes */
import logo from "../../assets/logo.png";

const Navegacion = ({scrollToRef, seccion}) => {
  return (
    <nav className='w-full m-auto flex justify-around items-center py-5 '>
     
        <img className='w-20 h-20 ' src={logo} alt="" />

        <ul className='flex justify-center items-center gap-10 uppercase  '>
          <li className=' text-white text-md font-semibold font-pop cursor-pointer'>inicio</li>
          <li onClick={() => scrollToRef(seccion)} className=' text-white text-md font-semibold font-pop cursor-pointer'>prevaloracion</li>
          <li className='text-white text-md font-semibold font-pop cursor-pointer'>factoraje verde</li>
          <li className=' text-white text-md font-semibold font-pop cursor-pointer'>h & s</li>
          <li><button className=' font-pop text-lg font-semibold text-white bg-green-500 hover:bg-green-600 px-5 py-2 rounded-md'>Contacto</button></li>
        </ul>

     
          
    </nav>

  )
}

export default Navegacion