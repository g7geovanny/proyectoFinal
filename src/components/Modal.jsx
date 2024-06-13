import { Link } from "react-router-dom";


/* Imagenes */



function Modal({ onClose, title, content, link, boton}) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="modal-overlay absolute inset-0 bg-gray-900 opacity-70"></div>
        <div className="modal-container bg-white w-96 rounded-lg shadow-lg z-50 overflow-y-auto">
          <div className="modal-content py-4 text-left px-6">
            <div className="flex justify-end items-center pb-3">
              
              <button className="modal-close text-4xl" onClick={onClose}>
                <img  className=' w-12 h-12' alt="" />
              </button>
            </div>

            <div className="flex flex-col items-center gap-5 p-10">
              <h2 className="text-2xl font-bold text-center">{title}</h2>
              <p className="text-lg text-center font-pop">{content}</p>
              <Link to={link}  className="bg-gradient-to-r from-[#7ecf49]  to-[#04bbf1]  hover:bg-gradient-to-r hover:from-[#6db23d] hover:to-[#027da6] cursor-pointer text-white font-bold py-2 px-4 rounded-full shadow-md">Registrarme</Link>
              {boton && (
                <button className="text-white bg-[#7ecf49] py-3 px-2 rounded-lg font-semibold">solicitar capacitacion</button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Modal;