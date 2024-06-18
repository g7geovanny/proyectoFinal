import React from 'react'
import { useState, useEffect } from "react";
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
import "../styles/Planta.css";



const Planta = () => {


  const images = [amarillo, post, empresa]

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
  };





  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          section.classList.add('show-me');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);




  const [activeSection, setActiveSection] = useState(null);

  const handleButtonClick = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  const handleCloseClick = () => {
    setActiveSection(null);
  };



  const sections = [
    {texto: "Validación de Documentos de Seguridad (H&S)", textoOculto: "Antes de ingresar a la planta, se verificará que todos los documentos de seguridad estén cargados al 100% en la plataforma de proveedores. El acceso a la planta estará condicionado a cumplir este requisito.", posicion: "right-[33rem]" },

    {texto: "Proceso de Ingreso a Planta", textoOculto: "Para acceder a las instalaciones de la planta, todo personal debe pasar por un punto de control donde se verificará el cumplimiento de los requisitos de seguridad y acceso. Una vez validados los documentos pertinentes y cumplidas las normativas establecidas, se permitirá el ingreso al área autorizada.", posicion: "left-[33rem]"},

    {texto: "Inducción a la planta", textoOculto:"Antes de iniciar labores en la planta, todo nuevo personal deberá recibir una inducción detallada sobre las normativas de seguridad y procedimientos operativos específicos. Además, se llevará a cabo una inspección físico-mecánica mensual para garantizar el óptimo funcionamiento de equipos y maquinaria, asegurando así un entorno de trabajo seguro y eficiente", posicion: "right-[33rem]" },

    {texto: "Proceso de Espera en el Patio de Maniobras (Báscula)", textoOculto:"Los vehículos que lleguen a la báscula deben esperar en el patio de maniobras designado hasta que sean llamados para el pesaje correspondiente. Este proceso asegura una fluidez ordenada en las operaciones logísticas y garantiza que cada vehículo sea atendido de manera eficiente.", posicion: "left-[33rem]"},

    {texto: "Pesaje de la Unidad", textoOculto: "Antes de proceder con la carga o descarga, cada unidad debe someterse a un pesaje preciso para asegurar el cumplimiento de las normativas de carga y seguridad. Este proceso garantiza la correcta distribución del peso y contribuye a mantener la integridad estructural de los equipos y la seguridad en las operaciones logísticas.", posicion: "right-[33rem]" },

    {texto: "Proceso de Dirección a Paletizadora", textoOculto:"Después del pesaje, las unidades dirigidas hacia la paletizadora deben seguir las indicaciones específicas para el correcto posicionamiento y procesamiento de la carga. Este paso asegura una manipulación eficiente y segura de los productos, optimizando los procesos de almacenamiento y distribución.", posicion: "left-[33rem]"},

    {texto: "Proceso de Entrega de Remisión", textoOculto:"Una vez finalizado el proceso en la paletizadora, se procede a la entrega de la remisión correspondiente. Este documento formaliza la recepción o despacho de mercancías, asegurando el registro preciso de la transacción y facilitando la trazabilidad del producto a lo largo de la cadena logística", posicion: "right-[33rem]" },

    {texto: "Proceso de Enlonado de la Unidad", textoOculto:"Antes de proceder con el transporte, se lleva a cabo el enlonado de la unidad. Este paso asegura la protección adecuada de la carga contra condiciones climáticas adversas durante el traslado, manteniendo la integridad y la calidad de los productos transportados", posicion: "left-[33rem]"},

    {texto: "Proceso de Salida de la Planta", textoOculto:"Una vez completadas todas las operaciones y verificaciones necesarias, el vehículo procede a la salida de la planta. Este paso marca el final del proceso logístico interno, asegurando que todas las normativas de seguridad y procedimientos operativos hayan sido cumplidos adecuadamente antes de la salida del sitio", posicion:"right-[33rem]" }
    
  ]







  




  return (


    <>

      <div className=' w-2/3 m-auto flex justify-around items-center p-4 relative'>
        <img className=' w-14 h-14' src={logo} alt="" />
        <nav className='flex justify-center items-center '>
            <ul className='flex justify-center items-center gap-16 text-lg font-semibold font-pop uppercase texto-gradient '>
                <Link to="/"><li>inicio</li></Link>
                <Link to="/factoraje-verde">factoraje verde</Link>
                <Link to="/hys">h & s</Link>
                <Link to="/unidades" >unidades</Link>
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


   



      <div className='contenedor-linea'>
        <div className='top-section'>
          <h2 className='texto text-5xl text-center uppercase font-bold py-16'>proceso de ingreso a planta</h2>
        </div>

        <div className="timeline">
          <div className="line"></div>

          {sections.map((section, index) => (
            <div key={index} className='section'>
              <div className='bead'></div>
              <div className='content space-y-5'>
                <h2 className='text-lg font-pop font-semibold'>{section.texto}</h2>
                <button
                  className='boton w-48 m-auto font-bold rounded-md py-2 px-4 block'
                  onClick={() => handleButtonClick(index)}
                >
                  Saber más
                </button>
              </div>

              {activeSection === index && (
                <div className= {`absolute border-gradient-border ml-4 p-4 shadow-custom-dark rounded-md w-[25rem]  ${section.posicion}`}>
                  <p className='font-pop mb-5 font-semibold'>{section.textoOculto}</p>
                  <button
                    className=' boton w-20 font-bold rounded-md border-black py-2 px-4 block  text-white'
                    onClick={handleCloseClick}
                    >
                    Cerrar
                  </button>
                </div>
              )}
            </div>
          ))}

        </div>
      </div>

    </>
    
  )
}

export default Planta