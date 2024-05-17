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

          <div className='contendor-texto space-y-5 '>
                <p className='text-slate-700 text-center font-pop font-bold'>Bienvenidos</p>
                <h1 className='text-white font-pop text-7xl uppercase font-extrabold'>hub vendor</h1>
                <p className='texto-relleno font-semibold font-pop'>Lorem ipsum dolor sit amet consectetur a</p>
                <button className='font-pop text-lg font-semibold text-white bg-green-500 hover:bg-green-600 px-5 py-2 rounded-md'>Saber mas</button>
          </div>

          <div className='imagen-costal relative'>
            <img className='relative  ' src={costales} alt="" />
          </div>

      </div>

    </section>
  )
}

export default Principal