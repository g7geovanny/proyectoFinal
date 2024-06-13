import React from 'react'
import { Link } from "react-router-dom";


/* Imagenes */
import camion from "../assets/camion.jpg";



/* Componentes */
import Card from "../components/Card";


/*Estilos */
import "../styles/Planta.css";
import "../styles/HYS.css";
import logo from "../assets/logo2.svg";



const HYS = () => {

    const cardsData = [
        {title: 'Licencia Federal B/E', texto: "", key: "1" },
        {title: 'Bitácora Horas de Servicio Holcim', texto: "En caso de ser operador de nuevo ingreso, es necesario adjuntar una carta membretada dónde se haga mención del inicio de sus operaciones en la empresa incluyendo con los datos del chofer", key:"2" },
        {title: 'Pago Mensual IMSS (SUA)', texto: "", key:"3" },
        {title: 'Certificación Medica del Operador', texto: "La tarjeta del Vo. Bo. Holcim es expedida en las instalaciones por el área de salud de logística. Para su trámite deberá compartir con el área salud ocupacional el documento de psicofísico de la SCT o en su caso el certificado médico y química sanguínea de 6 elementos", key:"2" },
        {title: 'Póliza de seguro del operador', texto: "La póliza de la persona asegurada deberá cubrir la cantidad mínima de $350,000.00 por muerte accidental.", key:"3" },
        {title: 'Certificado de Manejo Defensivo NSC', texto: "El curso es impartido cada mes en las instalaciones de Holcim por un proveedor externo, tiene un costo aproximado de $3,500.00. En caso de no contar con el curso, se expide una carta discrepancia con validación de 2 meses la cual deberá ser solicitada mediante correo electrónico con anticipación a su llegada a planta. Antes del cumplimiento de la vigencia, el operador deberá obtener el certificado del curso correspondiente.", key:"3" }
      ];


  return (
    
    <>

        <nav className='flex justify-around items-center p-4 bg-[#fff] '>
            <div>
                <Link to="/" ><img className='w-16 h-16' src={logo} alt="" /></Link>
            </div>
            
            <ul className='flex space-x-12 text-lg font-semibold font-pop uppercase texto-gradient '>
               <Link to="/"><li>inicio</li></Link> 
               <Link to="/factoraje-verde"><li>factoraje verde</li></Link>
                <Link to="/hys"><li>h&s</li></Link>
                <Link to="/planta"><li>arribo a planta</li></Link>
            </ul>

        </nav>


        <div className='hero-container relative'>
            <div className='barra z-10'></div>
            <div className='capa'></div>
        </div>


     

        <div className='w-[70%] ml-24 flex flex-col  mt-10 mb-20'>

            <h1 className=' font-pop font-bold text-5xl uppercase mb-10 texto-gradient'>Requisitos H&S</h1>
            <p className='font-pop font-semibold text-lg'>Estimada Línea Transportista, toda unidad y operador que desee trabajar en
            colaboración para Holcim México Operaciones deberá cumplir con los siguientes
            requisitos, los cuales se deberán cargar al sistema en formato de archivo PDF.
            </p>
            <span className=' mt-5 font-plus text-2xl font-bold uppercase'>operador</span>

        </div>


            
            <div className='  grid grid-cols-3 py-5 gap-10 '>
            {cardsData.map((card) => (
                <Card title={card.title} texto={card.texto} key={card.key} />
                ))}
            </div>  

  

    </>
  )
}

export default HYS


