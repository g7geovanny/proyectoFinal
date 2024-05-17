import React from 'react'
import { useState } from "react";

import  "../styles/Card.css";



const Card = ({title,texto}) => {

  const [mostrarTexto, setMostrarTexto] = useState(false);

    const toggleTexto = () => {
        setMostrarTexto(!mostrarTexto);
    };

   

  return (

    <div className='contenedor-item borde space-y-5 '>

      <div className='flex justify-between '>
        <h2 className='text-black font-bold text-2xl  '>{title}</h2>
        <button className='   bg-lime-700 p-2 text-white font-semibold rounded-md' onClick={toggleTexto}>{mostrarTexto ? 'Ver menos' : 'Ver más'}</button>
      </div>
        
      <div className={`textoo font-light text-lg font-pop  ${mostrarTexto ? 'visible' : 'oculto'}`}>
        {texto}
      </div>

    </div>



  )
}

export default Card