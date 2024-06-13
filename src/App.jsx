import React from 'react'
import  { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';



/* Imagenes */
import fondo from "./assets/empresa.jpeg";
import amarillo from "./assets/amarillo.svg";
import costales from "./assets/costales.svg";
import spiderman from "./assets/spiderman.webp";
import botonCerrar from "./assets/boton-x.png";



/*Componentes*/
import Principal from "./components/Principal";
import Video from "./components/Video";
import Linea from "./components/Linea";
import Mapa from "./components/Mapa";
import Prevaloracion from "./components/Prevaloracion";
import Carrusel2 from "./components/Carrusel2";

/* Estilos */
import "./styles/Carrusel2.css";
import "./styles/App.css";




const App = () => {

  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  
  return (

    <> 

      <Principal/>
      <Prevaloracion/>
      <Video/>
      <Linea/>
      <Carrusel2 toggleModal={toggleModal}/>
 


      <button className="fixed-button bg-sky-600 text-center transition-transform transform hover:scale-105 hover:bg-sky-700 " onClick={toggleModal}>
        Verificador documentos
      </button>

      {modalOpen && (
        <div className="modal">
            <span className="close flex justify-center items-center rounded-full w-10 h-10 bg-white" onClick={toggleModal}>&times;</span>

            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              keyboard={{
                enabled: true,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Keyboard, Pagination, Navigation]}
              className="mySwiper "
            >

              <SwiperSlide>
                  <p className='font-pop font-semibold uppercase p-2 text-white text-2xl'>paso 1</p>
                  <iframe className='video-2' src="https://www.youtube.com/embed/lpF0FX1iCHs?autoplay=1&mute=1" frameborder="0"></iframe>
              </SwiperSlide>

              <SwiperSlide className='flex flex-col'>
                <h2 className='text-white font-pop text-2xl'>Verifica y valida tus documentos</h2>

                <div className='w-full h-full flex flex-col justify-center pt-2 pb-10'>
                  <a className='w-[40%] text-white text-center text-lg font-semibold font-pop py-4 px-2 rounded-2xl transition-transform transform hover:scale-105 bg-gradient-custom m-auto' href="https://www.gob.mx/busqueda?utf8=%E2%9C%93&q=licencias" target="_blank" >Verificador de licencia Federal de operadores</a>
                  <a className='w-[40%] text-white text-center text-lg font-semibold font-pop py-4 px-2 rounded-2xl transition-transform transform hover:scale-105 bg-gradient-custom m-auto' href="#">Verificador de Tarjeta de circulación Federal</a>
                  <a className='w-[40%] text-white text-center text-lg font-semibold font-pop py-4 px-2 rounded-2xl transition-transform transform hover:scale-105 bg-gradient-custom m-auto' href="#">Verificador de Tarjeta de circulación Federal</a>
                  <a className='w-[40%] text-white text-center text-lg font-semibold font-pop py-4 px-2 rounded-2xl transition-transform transform hover:scale-105 bg-gradient-custom m-auto' href="#">Verificador de Tarjeta de circulación Federal</a>
                </div>
              </SwiperSlide>


              <SwiperSlide className='flex flex-col'>
                <h2 className='text-white font-pop text-2xl'>Verifica y valida tus documentos</h2>
                <div className='w-full h-full flex flex-col justify-center pt-2 pb-10'>
                  <a className='w-[40%] text-white text-center text-lg font-semibold font-pop py-4 px-2 rounded-2xl transition-transform transform hover:scale-105 bg-gradient-custom m-auto' href="#">Carga tus documentos</a>
                </div>
              </SwiperSlide>

          </Swiper>

        
        </div>
      )}


    </>

  )
}

export default App