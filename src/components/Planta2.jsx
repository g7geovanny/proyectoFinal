import React from 'react'

const Planta2 = () => {
  return (
    <div className=' grid grid-cols-2'>
            <div className='space-y-12'>

              <div className='contendor-card relative'>
                <div className='flex flex-col card borde space-y-5 p-5'>
                  <h2 className='text-2xl text-center font-pop font-semibold text-black uppercase'>validar documentos h&s</h2>
                  <p className='text-lg font-semibol font-pop text-center'>Lorem ipsum dolor sit amet.</p>
                  <Link to="/hys" className='boton '>saber mas</Link>
                </div>
              </div>

              <div className='contendor-card relative'>
                <div className='card borde space-y-5 p-5'>
                  <h2 className='text-2xl text-center font-pop font-semibold text-black uppercase'>realizar la induccion</h2>
                  <p className='text-lg font-semibol font-pop text-center'>Lorem ipsum dolor sit amet.</p>
                  <button onClick={() => openModal("inspeccion psicometrica", "llenado de bitacora", "valoracion de fatiga", "prueba antidoping y alcoholímetro") } className='boton'>saber mas</button>
                </div>
              </div>

              <div className='contendor-card relative'>
                <div className='card borde space-y-5 p-5'>
                  <h2 className='text-2xl text-center font-pop font-semibold text-black uppercase'>Enlonado</h2>
                  <p className='text-lg font-semibol font-pop text-center'>Lorem ipsum dolor sit amet.</p>
                  <button onClick={() => openModal } className='boton'>saber mas</button>
                </div>
              </div>

            </div>

            <div className='flex justify-center items-center'>
              <img className=' w-[30rem] h-[30rem]' src={work} alt="" />
            </div>
          </div>
  )
}

export default Planta2