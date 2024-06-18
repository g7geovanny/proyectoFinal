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
import Vehiculos from "./components/Vehiculos";

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
      
      <Video/>

      <Prevaloracion/>

      <Linea/>

      <Vehiculos/>

    
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

              <SwiperSlide className='flex flex-col'>
                <h2 className='text-white font-pop text-2xl'>Verifica y valida tus documentos</h2>

                <div className='w-full h-full flex flex-col justify-center pt-2 pb-10'>
                  <a className='w-[40%] text-white text-center text-lg font-semibold font-pop py-4 px-2 rounded-2xl transition-transform transform hover:scale-105 bg-gradient-custom m-auto' href="https://www.gob.mx/busqueda?utf8=%E2%9C%93&q=licencias" target="_blank" >Tarjeta Circulación Federal</a>
                  <a className='w-[40%] text-white text-center text-lg font-semibold font-pop py-4 px-2 rounded-2xl transition-transform transform hover:scale-105 bg-gradient-custom m-auto' href="#">Comprobante Verificación Ambiental Federal</a>
                  <a className='w-[40%] text-white text-center text-lg font-semibold font-pop py-4 px-2 rounded-2xl transition-transform transform hover:scale-105 bg-gradient-custom m-auto' href="#">Licencia Federal</a>
                  <a className='w-[40%] text-white text-center text-lg font-semibold font-pop py-4 px-2 rounded-2xl transition-transform transform hover:scale-105 bg-gradient-custom m-auto' href="#">Certificación Medica Operador</a>
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