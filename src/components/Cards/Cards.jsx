import React from 'react'

import empresa from "../../assets/empresa.jpeg";
import camion from "../../assets/camion.jpg";
import seguridad from "../../assets/seguridad.jpg";

const Componente3 = () => {


  return (


    <div className=' flex justify-center gap-10 p-10'>

        <div className='w-2/5 bg-white '>

            <div className='w-full h-96'>
                <img className='w-full h-full object-cover ' src={empresa} alt="" />
            </div>

           
            <div className='p-5'>

                <h1 className='font-extrabold text-2xl'>Beneficios de la precalificacion</h1>

                <p className='text-lg font-semibold mt-3 '>La precalificación ofrece varios beneficios tanto para los proveedores como para los compradores en el proceso de adquisición de bienes y servicios. Algunos de estos beneficios son:</p>
                
                <button className='p-2 text-lg font-bold rounded-md mt-5 bg-lime-500  hover:bg-lime-600 transition-all duration-200  '>Conoce mas</button>

            </div>

        </div>



        <div className='w-2/5 bg-white '>

            <div className='w-full h-96'>
                <img className='w-full h-full object-cover ' src={seguridad} alt="" />
            </div>

           
            <div className='p-5'>

                <h1 className='font-extrabold text-2xl'>Platicas de seguridad</h1>

                <p className='text-lg font-semibold mt-3'>Es un placer invitarlos a nuestra próxima plática sobre seguridad vial, donde discutiremos estrategias y mejores prácticas para promover la seguridad en nuestras carreteras y comunidades.</p>
                

                <button className='p-2 text-lg font-bold rounded-md mt-5 bg-lime-500  hover:bg-lime-600 transition-all duration-200  '>Conoce mas</button>

            </div>

        </div>


        <div className='w-2/5 bg-white '>

<div className='w-full h-96'>
    <img className='w-full h-full object-cover ' src={camion} alt="" />
</div>


<div className='p-5'>

    <h1 className='font-extrabold text-2xl'>Corrupti delectus mollo aut.</h1>

    <p className='text-lg mt-3'>Lorem ipsum, dolor sit amet consectetur adipinima accusantium iure uasi itaque odit ipsum sunt!</p>
    <p className='text-lg'>Lorem ipsum, dolor sit amet consectetur adipinima accusanti!</p>

    <button className='p-2 text-lg font-bold rounded-md mt-5 bg-lime-500 hover:bg-lime-600 transition-all duration-200 '>Conoce mas</button>

</div>

</div>

</div>

  )
}

export default Componente3