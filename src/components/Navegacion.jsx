import React from 'react'
import { Link } from "react-router-dom";

/*Imagenes */
import logo from "../assets/logo.png";

const Navegacion = () => {

  return (

    <nav className='relative z-50 py-4 px-4 w-2/3 flex items-center justify-around space-x-12 '>
        <div>
            <img className=' w-16 h-16' src={logo} alt="" />
        </div>
        <Link to="/" className='text-white uppercase text-lg font-semibold' >inicio</Link>
        <Link to="/factoraje-verde" className='text-white uppercase text-lg font-semibold'>factoraje verde</Link>
        <Link to="/hys" className='text-white uppercase text-lg font-semibold'>h & s</Link>
        <Link to="/planta" className='text-white uppercase text-lg font-semibold'>arribo a planta</Link>
        <button className='cursor-pointer bg-lime-400 py-2 px-4 rounded-lg uppercase font-semibold'>contacto</button>
    </nav>
    
  )
}

export default Navegacion