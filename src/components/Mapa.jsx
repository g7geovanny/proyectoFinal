import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

/* Estilos */
import "../styles/Mapa.css";

const Map = ({ coordinates }) => {
  const mapContainerStyle = {
    width: '100%',
    height: '400px'
  };
  
  const center = coordinates || { lat: 19.436529891730846, lng: -99.15457569196104 };

  return (

    <section className='contenedorMapa'>

      <div className='p-10'>
        <LoadScript googleMapsApiKey="AIzaSyCGg6DFKVwN7iiFmgZHtNh-Zguebdak8D8">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={10}
        >
          <Marker position={coordinates} />
        </GoogleMap>
      </LoadScript>
      </div>
      

      <div className="contenedorMapaTexto">
        <div className="contenedorMapaTextoParrafos">
          <p className='text-center text-4xl font-pop font-semibold text-black'>¡Buscanos!</p>
          <h2 className='text-center text-6xl font-bold font-pop uppercase text-white'>Holcim Mexico</h2>
          <p className='text-center text-2xl text-black font-pop font-semibold'>Estas son todas nuestras ubicaciones en el pais</p>
        </div>
      </div>

    </section>
    
  );
};

export default Map;
