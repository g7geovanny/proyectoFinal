import React from 'react'
import { Link } from "react-router-dom";

import "../styles/Unidades.css";


import imagenA from "../assets/imagenA.svg";
import imagenB from "../assets/imagenB.svg";
import imagenC from "../assets/imagenC.svg";
import imagenD from "../assets/imagenD.svg";
import imagenF from "../assets/imagenF.svg";
import real1 from "../assets/real1.jpg";
import real2 from "../assets/real2.jpg";
import logo from "../assets/logo.png";





const FactorajeVerde = () => {

  

  return (

    <div className='base'>
      
        <div  className='principal-unidades relative w-full h-[45rem] '>

          <nav className='relative z-50 flex items-center justify-around py-5 '>
            <div>
                <img className=' w-16 h-16' src={logo} alt="" />
            </div>
          
            <Link to="/" className='font-bold text-white text-lg uppercase'>inicio</Link>
            <Link to="/factoraje-verde" className='font-bold text-white text-lg uppercase'>factoraje verde</Link>
            <Link to="/hys" className='font-bold text-white text-lg uppercase'>h & s</Link>
            <Link to="/planta" className='font-bold text-white text-lg uppercase'>arribo a planta</Link>
          </nav>


            <div className=' w-4/5 left-20 top-28 relative z-50 space-y-10'>
                <h1 className=' text-white font-semibold uppercase text-4xl'>Requisitos mínimos de seguridad para vehículos (camiones y remolques)</h1>
                <p className='text-white text-semibold'>BBVA y Holcim han hecho una alianza, a través de la cual, con el esfuerzo de ambas partes, se han definido condiciones preferenciales de tasa para los anticipos que proveedores sostenibles obtengan a través de CrediProveedores, nuestra plataforma factoraje a proveedores.</p>
                <button className='w-32 m-auto p-3 rounded-md font-bold border roundend-sm bg-lime-400 hover:bg-lime-500 text-black '>Inicio</button>
            </div>
          <svg className=' z-10 absolute bg-transparent bottom-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="1" d="M0,96L60,128C120,160,240,224,360,245.3C480,267,600,245,720,213.3C840,181,960,139,1080,154.7C1200,171,1320,245,1380,282.7L1440,320L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
          <div className="capa2"></div>
        </div>



        <div>

          <h2 className='text-center text-3xl font-bold'>Anexo 8 Requisitos mínimos de seguridad para vehículos (camiones y remolques)</h2>

          <div className='p-5 mt-10 space-y-20'>
            
            <div>
              <h2 className='text-center text-2xl font-bold '>Sistema de monitoreo
              vehicular iVMS</h2>
            </div>

            <div className='text-pop'>
              <h2 className='text-center text-2xl font-bold'>Cinturones de seguridad
              de 3 puntos.</h2>
              <ul className='text-center'>
                <li className='text-base font-semibold'>
                2 espejos retrovisores (izquierdo y derecho)
                </li>
                <li className='text-base font-semibold'>2 espejos de reducción de puntos ciegos ubicados en la
                    parte frontal lateral (izquierdo y derecho) de la cubierta
                    del motor.
                </li>
                <li className=' text-base font-semibold'>
                  1 espejo de reducción de punto ciego en la cubierta
                  frontal del motor.
                </li>
              </ul>
            </div>

            <div>
              <h2 className='text-center text-2xl font-bold'>Frenos</h2>

              <p className=' text-base font-semibold text-center' >
                Instalados en cada rueda, de acuerdo a especificaciones del
                fabricante y con componentes originales u homologados por el
                fabricante.
              </p>
            </div>


            <div>
              <h2 className='text-center text-2xl font-bold'>Extintores</h2>

              <p className=' text-base font-semibold text-center'>
                Mínimo un extintor de polvo químico de 2 kilogramos
              </p>
            </div>

            <div>
              <h2 className='text-center text-2xl font-bold'>Triángulos reflectantes
                  de advertencia o luces
                  de advertencia o
                  banderas rojas.
              </h2>

              <p className=' text-base font-semibold text-center'>
               De acuerdo a la legislación país y como mínimo:
          
                Uno para colocar delante y otro detrás de un vehículo
                cuando es requerido.
              </p>
            </div>
           
          </div>

          


        </div>


        
    </div>
  )
}

export default FactorajeVerde