import React from 'react'

import camion from "../assets/camion.jpg";

const Vehiculos = () => {
  return (
    <section className=' w-5/6 m-auto flex flex-row-reverse gap-10 my-20'>

        <div  className='texto-video relative w-2/3 m-auto items-center space-y-5    '>
            <h2 className={` font-light font-ultra text-5xl texto`  }>REQUISITOS MINIMOS DE SEGURIDAD PARA LOS CAMIONES</h2>
            <p className=' font-pop text-base mb-7 mt-7'>Las inspecciones regulares de los camiones son fundamentales para garantizar su operatividad, seguridad y eficiencia. Estos controles no solo cumplen con las normativas legales y de seguridad, sino que también previenen averías costosas y aseguran que los vehículos estén en condiciones óptimas para transportar carga de manera confiable. Además, promueven la protección del medio ambiente al mantener bajos niveles de emisiones.</p>
            <button className='bg-[#7ecf49] px-6 py-2 rounded-2xl font-bold text-lg text-pop hover:bg-[#6fb842] transition-colors duration-300'>Registrarme</button>
        </div>

        <img className=' rounded-lg w-[30rem]' src={camion} alt="camion.jpg" />

    </section>
  )
}

export default Vehiculos