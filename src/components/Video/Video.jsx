import React from 'react'



/*Estilos*/
import estilos from "./Video.module.css";

const Video = ({seccion}) => {
  return (

    <main ref={seccion} className='grid grid-cols-2 p-10'>

        <div  className='w-2/3 m-auto items-center space-y-5 '>
            <h2 className={`font-bold font-pop text-6xl uppercase ${estilos.texto} `  }  >contenido principal</h2>
            <p className='font-semibold font-pop text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam vel corrupti numquam officiis adipisci rem nihil incidunt enim consectetur hic.</p>
            <button className=' font-pop text-lg font-semibold text-white bg-green-500 hover:bg-green-600 px-5 py-2 rounded-md'>Contactanos</button>
        </div>

        <iframe
            className="mi-video bg-transparent "
                title="YouTube Video"
                width="710"
                height="400"
                src="https://www.youtube.com/embed/lpF0FX1iCHs?autoplay=1&mute=1"
                allowFullScreen>
              
        </iframe>

    </main>
  )
}

export default Video