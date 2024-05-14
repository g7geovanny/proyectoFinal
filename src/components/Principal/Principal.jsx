import React from 'react'


/*Estilos */
import estilos from "./Principal.module.css";

/* Componentes */
import Navegacion from "../Navegacion/Navegacion";



/*Imagenes */
import costales from "../../assets/costales.svg";
import fondo from "../../assets/fondo.svg";

const Principal = ({scrollToRef, seccion}) => {

  return (

    <section>
      <Navegacion/>
      <img className='absolute right-0 bottom-0' src={fondo} alt="" />

      <div className=' w-full relative grid grid-cols-2'>

          <div className='flex flex-col justify-center items-center mt-16 '>
              <div className=' space-y-6 text-center'>
                <p className='text-slate-700 text-center font-pop font-bold text-4xl'>Bienvenidos</p>
                <h2 className='text-white font-pop text-7xl uppercase font-extrabold'>hub vendor</h2>
                <p className='font-semibold text-lg font-pop'>Lorem ipsum dolor sit amet consectetur adipisicing uam harum.</p>
                <button className='font-pop text-lg font-semibold text-white bg-green-500 hover:bg-green-600 px-5 py-2 rounded-md'>Saber mas</button>
              </div>
          </div>

          <div className='imagen-costal relative'>
            <img className='relative w-5/6 mt-10 ml-20 ' src={costales} alt="" />
            <div className={estilos.sombra}></div>
          </div>

      </div>

    </section>
  )
}

export default Principal