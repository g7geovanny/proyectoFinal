import React from 'react';
import './Footer.css'; // Importa la hoja de estilos externa

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="section">
          <h3>Programas</h3>
          <ul>
            <li>Programa 1</li>
            <li>Programa 2</li>
            <li>Programa 3</li>
          </ul>
        </div>
        <div className="section">
          <h3>Servicios</h3>
          <ul>
            <li>Servicio 1</li>
            <li>Servicio 2</li>
            <li>Servicio 3</li>
          </ul>
        </div>
        <div className="section">
          <h3>Contacto</h3>
          <p>Correo: correo@example.com</p>
          <p>Teléfono: 123-456-789</p>
        </div>
        <div className="contact-form">
          <input type="text" placeholder="Escribe aquí" />
          <button>Enviar</button>
        </div>
        <div className="social-media">
          <p>Síguenos en redes sociales:</p>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
      <hr className="divider" />
    </footer>
  );
};

export default Footer;
