import React from 'react'

const Prevaloracion = () => {

  return (

    <div className='bg-slate-200 w-[60rem] m-auto my-32 flex justify-evenly items-center rounded-[40px] py-5 shadow-lg'>
        <div className='flex flex-col gap-3'>
            <h2 className='font-light  text-3xl'>¿Quieres trabajar con nosotros? </h2>
            <p className='text-pop font-semibold text-2xl text-center '>¡Regístrate!</p>
        </div>
        <button className='bg-[#7ecf49] px-6 py-2 rounded-2xl font-bold text-lg text-pop hover:bg-[#6fb842] transition-colors duration-300'>Registrarme</button>
    </div>

  )
}

export default Prevaloracion