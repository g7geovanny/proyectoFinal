import React from 'react'

const Boton = ({ onClick, text }) => {
  return (
    <button className=' bg-lime-500 py-1 px-3 rounded-md font-semibold '  onClick={onClick}>{text}</button>
  )
}

export default Boton