import React from 'react'
import { Link } from "react-router-dom";

import "../styles/FactoraVerde.css";


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
      
        <div  className='principal relative w-full h-[45rem] '>

          <nav className='relative z-50 flex items-center justify-around py-5 '>
            <div>
                <img className=' w-16 h-16' src={logo} alt="" />
            </div>
          
            <Link to="/" className='font-bold text-white text-lg uppercase'>inicio</Link>
            <Link to="/hys" className='font-bold text-white text-lg uppercase'>h & s</Link>
            <Link to="/planta" className='font-bold text-white text-lg uppercase'>arribo a planta</Link>
            <Link to="/unidades" className='font-bold text-white text-lg uppercase'>unidades</Link>
          </nav>


            <div className=' w-4/5 left-20 top-28 relative z-50 space-y-10'>
                <h1 className=' text-white font-semibold uppercase text-6xl'>factoraje sostenible</h1>
                <p className='text-white text-semibold'>BBVA y Holcim han hecho una alianza, a través de la cual, con el esfuerzo de ambas partes, se han definido condiciones preferenciales de tasa para los anticipos que proveedores sostenibles obtengan a través de CrediProveedores, nuestra plataforma factoraje a proveedores.</p>
                <button className='w-32 m-auto p-3 font-bold border roundend-sm bg-white text-black '>Inicio</button>
            </div>
          <svg className=' z-10 absolute bg-transparent bottom-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="1" d="M0,96L60,128C120,160,240,224,360,245.3C480,267,600,245,720,213.3C840,181,960,139,1080,154.7C1200,171,1320,245,1380,282.7L1440,320L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
          <div className="capa2"></div>
        </div>


        <div className='w-4/5 m-auto flex flex-col p-5 gap-5 justify-center items-center space-y-16'>
          <div className='flex gap-24 justify-center items-center'>
            <img className=' w-1/3 border rounded-lg' src={real1} alt="" />
            <div className=' flex flex-col gap-10 '>
              <h2 className='font-bold text-4xl text-green-500'>BENEFICIO POR COMPROMISO CON LA SOSTENIBILIDAD</h2>
              <p className='font-semibold text-lg'>Esta mejora en la tasa de confirming es nuestra manera de reconocer y recompensar su compromiso con la sostenibilidad.</p>
            </div>
          </div>


          <div className='flex  flex-row-reverse gap-24 justify-center items-center'>
            <img className=' w-1/3 border rounded-lg' src={real2} alt="" />
            <div className=' flex flex-col gap-10 justify-center items-center '>
              <h2 className='font-bold text-4xl text-green-500 uppercase'>¿Qué beneficios puedes obtener?</h2>
              <p className='font-semibold text-lg'>Con CrediProveedores obtienes las mejores condiciones de descuento y si calificas como proveedor sostenible bajoel estándar Holcim, obtienes más beneficio...</p>
              <div className='flex gap-16 '>
                <div className='flex flex-col justify-center items-center gap-5'><img className=' w-16 h-16' src={imagenA} alt="" /><p className='text-black text-sm'>Liquidez inmediata</p></div>
                <div className='flex flex-col justify-center items-center gap-5'><img className=' w-16 h-16' src={imagenB} alt="" /><p className='text-black text-sm'>Certeza deobro</p></div>
                <div className='flex flex-col justify-center items-center gap-5'><img className=' w-16 h-16' src={imagenC} alt="" /><p className='text-black text-sm'>No requiere informaciónfinanciera ni estudio crediticio</p></div>
                <div className='flex flex-col justify-center items-center gap-5'><img className=' w-16 h-16' src={imagenD} alt="" /><p className='text-black text-sm'>No te registra pasivos bancarios</p></div>
                <div className='flex flex-col justify-center items-center gap-5'><img className=' w-16 h-16' src={imagenF} alt="" /><p className='text-black text-sm'>Anticipa fácil, en línea, cuando tu quieras</p></div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default FactorajeVerde