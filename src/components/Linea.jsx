import { useState, useEffect, useRef } from "react";

/*componentes*/
import Boton from "../components/Boton/Boton";
import Modal from "../components/Modal/Modal";



/*imagenes*/
import uno from "../assets/1.png";
import dos from "../assets/2.png";
import tres from "../assets/3.png";
import cuatro from "../assets/4.png";
import cinco from "../assets/5.png";
import seis from "../assets/6.png";
import siete from "../assets/7.png";
import ocho from "../assets/8.png";

/* Estilos*/
import "../styles/Linea.css";



const Linea = () => {

  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

 const botonExtra = true;

  const [modalInfo, setModalInfo] = useState({isOpen: false, title: "", content:""});


  const openModal = (title, content, link, botonExtra) => {
    setModalInfo({isOpen: true, title, content, link, botonExtra})

  }

  const closeModal = () => {
    setModalInfo({isOpen: false, title: "", content: ""})
  }




  return (

  <div ref={componentRef} className="my-20">

    {isVisible && (

    <>

      <h1 className= "text-center font-bold font-pop text-5xl uppercase mb-12 textGradient " >Proceso de seguimiento</h1>
      
      <div  className="linea" >

        <div className="contenedor topContenedor">
            <img src={uno} alt="" />
            <h2 className=" text-lg font-pop font-bold">Prevaloracion</h2>
            <Boton onClick={ () => openModal( "Prevaloracion", "Estimado proveedor, si está interesado en colaborar con nosotros, le agradeceríamos que completara el siguiente cuestionario.", "https://forms.gle/vhef1DwCcQPfXoXF7")} text="saber mas"/>
        </div>

        <div className="contenedor bottomContenedor">
          <img src={dos} alt="" />
          <h2 className="text-lg font-pop font-bold">Registro</h2>
          <Boton onClick={ () => openModal( "Registro", "Estimado proveedor, si está interesado en colaborar con nosotros, le agradeceríamos que completara el siguiente cuestionario.", "/planta")} text="saber mas"/>
        </div>

        <div className="contenedor topContenedor">
            <img src={tres} alt="" />
            <h2 className="text-lg font-pop font-bold">Precalificacion</h2>
            <Boton onClick={ () => openModal( "Precalificacion", "Estimado proveedor, si está interesado en colaborar con nosotros, le agradeceríamos que completara el siguiente cuestionario.", "/precalificacion")} text="saber mas"/>
        </div>

        <div className="contenedor bottomContenedor">
          <img src={cuatro} alt="" />
          <h2 className="text-lg font-pop font-bold">Acceso a SRM</h2>
          <Boton onClick={ () => openModal( "Acceso a SRM", "Estimado proveedor, si está interesado en colaborar con nosotros, le agradeceríamos que completara el siguiente cuestionario.", "/planta", botonExtra)} text="saber mas"/>
        </div>

        <div className="contenedor topContenedor">
            <img src={cinco} alt="" />
            <h2 className="text-lg font-pop font-bold">Registro de unidad y operador</h2>
            <Boton onClick={ () => openModal( "Registro de unidad y operador", "Estimado proveedor, si está interesado en colaborar con nosotros, le agradeceríamos que completara el siguiente cuestionario.", "https://forms.gle/vhef1DwCcQPfXoXF7")} text="saber mas"/>
        </div>

        <div className="contenedor bottomContenedor">
          <img src={seis} alt="" />
          <h2 className="text-lg font-pop font-bold">Cumplimiento H&S</h2>
          <Boton onClick={ () => openModal( "Cumplimiento H&S", "Estimado proveedor, si está interesado en colaborar con nosotros, le agradeceríamos que completara el siguiente cuestionario.", "/hys")} text="saber mas"/>
        </div>

        <div className="contenedor topContenedor">
            <img src={siete} alt="" />
            <h2 className="text-lg font-pop font-bold">Arribo a planta</h2>
            <Boton onClick={ () => openModal( "Arribo a planta", "Estimado proveedor, si está interesado en colaborar con nosotros, le agradeceríamos que completara el siguiente cuestionario.", "/planta")} text="saber mas"/>
        </div>

        <div className="contenedor bottomContenedor">
          <img src={ocho} alt="" />
          <h2 className="text-lg font-pop font-bold">salida de planta</h2>
          <Boton onClick={ () => openModal( "Salida de planta", "Estimado proveedor, si está interesado en colaborar con nosotros, le agradeceríamos que completara el siguiente cuestionario.", "/planta")} text="saber mas"/>
        </div>

        

        {modalInfo.isOpen && (
          <Modal onClose={closeModal} title={modalInfo.title} content={modalInfo.content} link={modalInfo.link} boton={modalInfo.botonExtra} />
          )}

      </div>
        
    </>

      )}

  </div>
  )
}

export default Linea