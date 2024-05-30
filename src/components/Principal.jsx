import React from 'react'



/*Estilos */
import  "../styles/Principal.css";


/* Componentes */
import Navegacion from "../components/Navegacion";




/*Imagenes */
import costales from "../assets/costales.svg";
import fondo from "../assets/fondo.svg";

const Principal = ({scrollToRef, seccion}) => {

  return (

    <section className='principal-contenedor'>

      <Navegacion/>
    
      <img className=' imagen-mancha right-0 bottom-0' src={fondo} alt="" />

      <div className=' imagen-texto w-full relative grid grid-cols-2'>

          <div className='contendor-texto space-y-10 '>
                <p className='text-slate-700 text-center font-pop font-bold'>¡Bienvenidos!</p>
                <h1 className='text-white font-pop text-7xl uppercase font-extrabold'>hub vendor</h1>
                <p className='texto-relleno font-semibold font-pop text-slate-700'>Explora las oportunidades que tenemos para ofrecerte y descubre por qué somos la elección perfecta para tus servicios de transporte.</p>
                <a className='font-pop cursor-pointer text-lg font-semibold text-black bg-lime-400 hover:bg-lime-500 px-5 py-2 rounded-md' href='https://www.holcim.com.mx/' target="_blank">Saber mas</a>
          </div>

          <div className='imagen-costal relative'>
            <img className='relative  ' src={costales} alt="" />
          </div>

      </div>

    </section>
  )
}

export default Principal