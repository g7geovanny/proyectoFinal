import React from 'react'



/*Estilos */
import "../styles/Planta.css";
import logo from "../assets/logo2.svg";

const HYS = () => {
  return (
    
    <>
        <div className='hero-container'>
            <div className='capa'></div>

            <div className=' w-2/3 m-auto flex  justify-around items-center p-4 relative'>
                <img className=' w-14 h-14' src={logo} alt="" />
                <nav className='flex justify-center items-center '>
                    <ul className='flex justify-center items-center gap-16 text-lg font-semibold font-pop uppercase texto-gradient '>
                        <li>inicio</li>
                        <li>factoraje verde</li>
                        <li>h&s</li>
                        <li>Prevaloracion</li>
                    </ul>
                </nav>
            </div>

            <div className='relative w-[50%] top-44 flex flex-col items-center text-center space-y-10 '>
                <h1 className='text-white text-6xl font-pop font-bold uppercase'>llegada a planta</h1>
                <p className='font-semibold text-4xl text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ipsam.</p>
                <button className='font-pop text-lg font-semibold text-white bg-green-600 hover:bg-green-700 px-6 py-4 rounded-md'>saber mas</button>
            </div>



            

        </div>

        <div className='w-full h-screen bg-black'>

        </div>
    </>
  )
}

export default HYS


