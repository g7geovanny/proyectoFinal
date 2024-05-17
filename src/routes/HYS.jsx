import React from 'react'
import { Link } from "react-router-dom";



/* Componentes */
import Card from "../components/Card";



import camion from "../assets/camion.jpg";

/*Estilos */
import "../styles/Planta.css";
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
                <li>factoraje verde</li>
                <Link to="/hys"><li>h&s</li></Link>
                <li>Prevaloracion</li>
            </ul>

        </nav>


        <div className='hero-container relative flex justify-center items-center'>
            <div className='capa'></div>
                
                <div className=' relative top[50%]  w-[50%] flex flex-col text-center space-y-5  '>
                    <h1 className='text-white text-4xl font-pop font-semibold uppercase'>Requisitos de seguridad <span className='texto-gradient font-bold'>h&s</span> </h1>
                    <p className='font-semibold text-sm text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ipsam.</p>
                    <button className='relative w-40 m-auto font-pop text-sm font-semibold text-white bg-green-600 hover:bg-green-700 px-5 py-3 rounded-md'>saber mas</button>
                </div>
        </div>


        <div className=' p-5 '> 

        <div className='w-[70%] m-auto flex flex-col justify-center items-center mt-10 mb-10'>

            <h1 className=' font-pop font-bold text-5xl uppercase mb-10 text-center texto-gradient'>Requisitos H&S</h1>
            <p className='font-pop font-semibold text-lg'>Estimada Línea Transportista, toda unidad y operador que desee trabajar en
            colaboración para Holcim México Operaciones deberá cumplir con los siguientes
            requisitos, los cuales se deberán cargar al sistema en formato de archivo PDF.
            </p>
            <span className='font-pop text-2xl font-bold uppercase'>operador</span>

        </div>
            
            <div className='  space-y-10 '>
            {cardsData.map((card) => (
                <Card title={card.title} texto={card.texto} key={card.key} />
                ))}
            </div>  
        </div>

    </>
  )
}

export default HYS


