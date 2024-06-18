import React from 'react'



/*Estilos*/
import "../styles/Video.css";

const Video = ({seccion}) => {
  return (

    <main ref={seccion} className='contenedor-texto-video mt-10 '>

        <div  className='texto-video relative w-2/3 m-auto items-center    '>
            <h2 className={` font-light font-ultra text-7xl texto`  }>¡Todo lo que Necesitas Saber!</h2>
            <p className=' font-pop text-lg mb-7 mt-7'>¡Descubre lo fácil que es convertirte en nuestro proveedor de transporte! En este video, te mostramos todos los documentos necesarios y cómo obtenerlos rápidamente. ¡Únete a nuestra red de proveedores y comienza a disfrutar de los beneficios hoy mismo!</p>
        </div>

        <iframe
            className="mi-video shadow-custom-light "
                title="YouTube Video"
                src="https://www.youtube.com/embed/lpF0FX1iCHs?autoplay=1&mute=1"
                allowFullScreen>
        </iframe>

    </main>
  )
}

export default Video