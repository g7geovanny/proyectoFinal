import React from 'react'
import  { useRef } from 'react';


/*Componentes*/
import Principal from "./components/Principal/Principal";
import Video from "./components/Video/Video";
import Linea from "./components/Linea/Linea";
import Cards from "./components/Cards/Cards";
import Mapa from "./components/Mapa/Mapa";
import Footer from "./components/Footer/Footer";



const App = () => {

 
  return (

    <>

      
    <Principal/>

    <Video/>

    <Linea/>

    <Cards/>

    <Mapa/>

    <Footer/>
    
    </>

    

  )
}

export default App