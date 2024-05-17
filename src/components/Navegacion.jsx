import React from 'react'
import { Link } from "react-router-dom";
/* Imagenes */
import logo from "../assets/logo.png";


/* Estilos */
import "../styles/Navegacion.css";

const Navegacion = () => {

  return (

    <nav className='navegacion '>
        <img className='' src={logo} alt="" />
        
        <ul className='flex justify-center items-center gap-10 uppercase   '>
          <Link to="/"><li className=' text-white text-md font-semibold font-pop cursor-pointer'>inicio</li></Link> 
          <li className=' text-white text-md font-semibold font-pop cursor-pointer'>prevaloracion</li>
          <li className='text-white text-md font-semibold font-pop cursor-pointer'>factoraje verde</li>
          <Link to="/hys"><li className=' text-white text-md font-semibold font-pop cursor-pointer'>h & s</li></Link>
          <li><button className=' font-pop text-lg font-semibold text-white bg-green-500 hover:bg-green-600 px-5 py-2 rounded-md'>Contacto</button></li>
        </ul>
          
    </nav>

  )
}

export default Navegacion