import React from 'react'
import { Link } from "react-router-dom";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* Imagenes */
import spiderman from "../assets/spiderman.webp";
import camion from "../assets/camion.jpg";
import seguridad from "../assets/seguridad.jpg";
import empresa from "../assets/empresa.jpeg";
import camion2 from "../assets/camion2.webp";
import equidad from "../assets/Equidad.jpg";
import printed from "../assets/printed.jpg";

/* Estilos */
import "../styles/Carrusel2.css";




const Carrusel2 = ({toggleModal}) => {

  const cardData = [

  {
    image: camion,
    title: '',
    text: 'Conoce los beneficios de trabajar con holcim',
    id: 46878,
    link: "/factoraje-verde"
  },

  {
    image: seguridad,
    title: '',
    text: 'Conoce los documentos de seguridad que se requieren',
    id: 5787667,
    link: "/hys"
  },
  
  {
    image: empresa,
    title: '',
    text: 'Examenes a operadores para ingresar',
    id: 97868,
    link: "/hys"
  },

  {
    image: camion2,
    title: '',
    text: '¿Por que es importante contar con GPS?',
    id: 46878,
    link: "/hys"
  },

  {
    image: equidad,
    title: '',
    text: 'Conoce las vigencias de tus documentos de seguridad',
    id: 5787667
  },

  
  {
    image: printed,
    title: '',
    text: 'Verifica las licencias de todos tus operadores',
    id: 97868
  },

  {
    image: seguridad,
    title: '',
    text: 'Requisitos minimos (Camiones y Remolques)',
    id: 97868,
    link: "/hys"
  }

]

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear"
};


  return (
    <section className=' w-11/12 m-auto mt-36 mb-36 '>

      <h2 className='texto text-5xl font-plus uppercase'>conoce mas</h2>
      <p className=' text-slate-700 text-2xl font-plus mt-5'>Continúa navegando para explorar más temas de tu interés</p>

      <div className=' mt-12'>
      <Slider {...settings}> 
        {cardData.map((card, index) => (
          <div key={card.id} className=' bg-back-blue shadow-custom-dark h-[400px] text-black rounded-xl mt-5 mb-10  '>
            <div className='h-56 rounded-t-xl flex justify-center items-center'>
              <img src={card.image} alt="" className='h-full w-full' />
            </div>

            <div className='grid grid-rows-2 justify-center items-center gap-7 p-5 '>
              <p className='text-lg text-center font-semibold font-ultra text-white'>{card.text}</p>

              {index === 4 || index === 5 ? (
              <button 
                onClick={toggleModal} 
                className='w-[50%] m-auto text-center text-sm uppercase bg-lime-500 rounded-lg py-2 font-bold font-plus'>
                saber mas
              </button>
            ) : (
              <Link to={card.link} className='w-[50%] m-auto text-center text-sm uppercase bg-lime-500 rounded-lg py-2 font-bold font-plus'>
                saber mas
              </Link>
            )}
              
            </div>
          </div>
        ))}
      </Slider>
      </div>

    </section>
  )
}

export default Carrusel2