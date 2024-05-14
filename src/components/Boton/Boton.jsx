// Button.js
import React from 'react';

import estilos from "./Boton.module.css";

function Button({ onClick, text }) {
  return (
    <button className={estilos.boton} onClick={onClick}>{text}</button>
  );
}

export default Button;
