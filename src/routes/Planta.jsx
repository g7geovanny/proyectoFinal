import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";

/*Imagenes */
import carretera from "../assets/fondo-carretera.avif";
import empresa from "../assets/imagen4.jpg";
import logo from "../assets/logo2.svg";
import work from "../assets/work.svg";
import uno from "../assets/1.png";
import dos from "../assets/2.png";
import tres from "../assets/3.png";
import cuatro from "../assets/4.png";
import cerrar from "../assets/boton-x.png";
import amarillo from "../assets/amarillo.svg";
import post from "../assets/Post.svg";


/*Componentes*/




/*Estilos*/
import "../styles/HYS.css";

const Planta = () => {

  const images = [amarillo, empresa, post]

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
  };





  const [modalInfo, setModalInfo] = useState({isOpen: false, title: "", content:""});


  const openModal = (texto1, texto2, texto3, texto4) => {
    setModalInfo({isOpen: true, texto1, texto2, texto3, texto4})

  }

  const closeModal = () => {
    setModalInfo({isOpen: false, title: "", content: ""})
  }




  return (


    <>

      <div className=' w-2/3 m-auto flex justify-around items-center p-4 relative'>
        <img className=' w-14 h-14' src={logo} alt="" />
        <nav className='flex justify-center items-center '>
            <ul className='flex justify-center items-center gap-16 text-lg font-semibold font-pop uppercase texto-gradient '>
                <Link to="/"><li>inicio</li></Link>
                <li>factoraje verde</li>
                <Link><li>h&s</li></Link>
                <li>Prevaloracion</li>
            </ul>
        </nav>
      </div>

      <div className="carousel-container">
      <button onClick={goToPrevious} className="carousel-button previous">&#10094;</button>
      <div className="slider">
        {images.map((imageUrl, index) => (
          <div
            key={index}
            className={`slide ${index === currentImageIndex ? 'active' : ''}`}
            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
          >
            <img src={imageUrl} alt={`Image ${index + 1}`} className="carousel-image" />
          </div>
        ))}
      </div>
      <button onClick={goToNext} className="carousel-button next">&#10095;</button>
    </div>



      <div className='  w-[1200px] m-auto p-20 '>
          <h2 className='texto text-5xl text-center uppercase font-bold py-16'>progreso de ingreso a planta</h2>
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

          {modalInfo.isOpen && (

            <div className="modal-overlay">
              <div className="modal space-y-12">
                
                <button className="modal-close text-4xl z-10" onClick={closeModal}>
                  <img className=' w-12 h-12' src={cerrar} alt="boton-cerrar" />
                </button>

                <div className='item item1 relative w-96 bg-slate-500 '>
                  <img className=' w-12 h-12 absolute left-[-30px] bottom-[50%] ' src={uno} alt="imagen1" />
                  <h2 className=''>{modalInfo.texto1}</h2>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, quidem.</p>
                </div>

                <div className='item item2 relative w-96'>
                  <img className=' w-12 h-12 absolute left-[-30px] bottom-[50%] ' src={dos} alt="imagen1" />
                  <h2 className=''>{modalInfo.texto2}</h2>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, quidem.</p>
                </div>

                <div className='item item3 relative w-96'>
                  <img className=' w-12 h-12 absolute left-[-30px] bottom-[50px] ' src={tres} alt="imagen1" />
                  <h2 className=''>{modalInfo.texto3}</h2>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, quidem.</p>
                </div>

                <div className='item item4 relative w-96'>
                  <img className=' w-12 h-12 absolute left-[-30px] bottom-[50%] ' src={cuatro} alt="imagen1" />
                  <h2 className=''>{modalInfo.texto4}</h2>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, quidem.</p>
                </div>
              
            </div>
            </div>
                
              )}
            
      </div>
    
    </>
    
  )
}

export default Planta