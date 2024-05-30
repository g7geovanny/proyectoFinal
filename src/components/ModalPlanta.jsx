import React from 'react'

const ModalPlanta = (onClose, title , text) => {


  return (


    <div className="fixed inset-0 flex items-center justify-center z">
        <div className="modal-overlay absolute inset-0 bg-gray-900 opacity-70"></div>
        <div className="modal-container bg-white w-96 rounded-lg shadow-lg z-50 overflow-y-auto">
          <div className="modal-content  py-4 text-left px-6">
            
            <div className="flex justify-end items-center pb-3">
              <button className="modal-close text-4xl" onClick={onClose}>
                &times;
              </button>
            </div>

            <div className="flex flex-col items-center gap-5 p-10">
              <h2 className="text-2xl font-bold text-center">{title}</h2>
              <p className="text-lg text-center font-pop">{text}</p>
            </div>
            
          </div>
        </div>
      </div>


  )


}

export default ModalPlanta