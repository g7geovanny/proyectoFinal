import { useState, useEffect, useRef } from "react";

/*componentes*/
import Boton from "../Boton/Boton";
import Modal from "../Modal/Modal";


/*imagenes*/
import uno from "../../assets/1.png";
import dos from "../../assets/2.png";
import tres from "../../assets/3.png";
import cuatro from "../../assets/4.png";
import cinco from "../../assets/5.png";
import seis from "../../assets/6.png";
import siete from "../../assets/7.png";
import ocho from "../../assets/8.png";

/* Estilos*/
import estilos from "../Linea/Linea.module.css";



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

 

  const [modalInfo, setModalInfo] = useState({isOpen: false, title: "", content:""});


  const openModal = (title, content, link) => {
    setModalInfo({isOpen: true, title, content})

  }

  const closeModal = () => {
    setModalInfo({isOpen: false, title: "", content: ""})
  }




  return (

  <div ref={componentRef} className="mt-20 mb-24">

    {isVisible && (

    <>

      <h1 className= {`text-center font-bold font-pop text-5xl uppercase mb-12 ${estilos.textGradient} `} >Proceso del seguimiento</h1>
      
      <div  className={ estilos.linea} >

        <div className={`${estilos.contenedor} ${estilos.topContenedor}`}>
            <img src={uno} alt="" />
            <h2 className="text-sm font-pop font-bold">Prevaloracion</h2>
            <Boton onClick={ () => openModal( "Prevaloracion", "Estimado proveedor, si está interesado en colaborar con nosotros, le agradeceríamos que completara el siguiente cuestionario.", "https://forms.gle/vhef1DwCcQPfXoXF7")} text="saber mas"/>
        </div>

        <div className={`${estilos.contenedor} ${estilos.bottomContenedor}`}>
          <img src={dos} alt="" />
          <h2 className="text-sm font-pop font-bold">Registro</h2>
          <Boton onClick={ () => openModal( "Prevaloracion", "Estimado proveedor, si está interesado en colaborar con nosotros, le agradeceríamos que completara el siguiente cuestionario.", "https://forms.gle/vhef1DwCcQPfXoXF7")} text="saber mas"/>
        </div>

        <div className={`${estilos.contenedor} ${estilos.topContenedor}`}>
            <img src={tres} alt="" />
            <h2 className="text-sm font-pop font-bold">Precalificacion</h2>
            <Boton onClick={ () => openModal( "Prevaloracion", "Estimado proveedor, si está interesado en colaborar con nosotros, le agradeceríamos que completara el siguiente cuestionario.", "https://forms.gle/vhef1DwCcQPfXoXF7")} text="saber mas"/>
        </div>

        <div className={`${estilos.contenedor} ${estilos.bottomContenedor}`}>
          <img src={cuatro} alt="" />
          <h2 className="text-sm font-pop font-bold">Acceso a SRM</h2>
          <Boton onClick={ () => openModal( "Prevaloracion", "Estimado proveedor, si está interesado en colaborar con nosotros, le agradeceríamos que completara el siguiente cuestionario.", "https://forms.gle/vhef1DwCcQPfXoXF7")} text="saber mas"/>
        </div>

        <div className={`${estilos.contenedor} ${estilos.topContenedor}`}>
            <img src={cinco} alt="" />
            <h2 className="text-sm font-pop font-bold">Registro de unidad y operador</h2>
            <Boton onClick={ () => openModal( "Prevaloracion", "Estimado proveedor, si está interesado en colaborar con nosotros, le agradeceríamos que completara el siguiente cuestionario.", "https://forms.gle/vhef1DwCcQPfXoXF7")} text="saber mas"/>
        </div>

        <div className={`${estilos.contenedor} ${estilos.bottomContenedor}`}>
          <img src={seis} alt="" />
          <h2 className="text-sm font-pop font-bold">Cumplimiento de H&S</h2>
          <Boton onClick={ () => openModal( "Prevaloracion", "Estimado proveedor, si está interesado en colaborar con nosotros, le agradeceríamos que completara el siguiente cuestionario.", "https://forms.gle/vhef1DwCcQPfXoXF7")} text="saber mas"/>
        </div>

        <div className={`${estilos.contenedor} ${estilos.topContenedor}`}>
            <img src={siete} alt="" />
            <h2 className="text-sm font-pop font-bold">Arribo a planta</h2>
            <Boton onClick={ () => openModal( "Arribo a planta", "Estimado proveedor, si está interesado en colaborar con nosotros, le agradeceríamos que completara el siguiente cuestionario.", "holarhdrhsdthsdhsrjtykj")} text="saber mas"/>
        </div>

        <div className={`${estilos.contenedor} ${estilos.bottomContenedor}`}>
          <img src={ocho} alt="" />
          <h2 className="text-sm font-pop font-bold">Salida de planta</h2>
          <Boton onClick={ () => openModal( "Prevaloracion", "Estimado proveedor, si está interesado en colaborar con nosotros, le agradeceríamos que completara el siguiente cuestionario.", "https://forms.gle/vhef1DwCcQPfXoXF7")} text="saber mas"/>
        </div>


        {modalInfo.isOpen && (
          <Modal onClose={closeModal} title={modalInfo.title} content={modalInfo.content}  />
          )}

      </div>
        
    </>

      )}

  </div>
  )
}

export default Linea