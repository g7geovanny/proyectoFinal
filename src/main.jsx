import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

/*rutas */
import App from './App.jsx'
import Planta from "./routes/Planta.jsx";
import HYS from "./routes/HYS.jsx";
import imagen from "./routes/Imagen.jsx";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/planta",
    element: <Planta/>
  },
  {
    path: "/hys",
    element: <HYS/>
  },

  {
    path: "/precalificacion",
    element: <imagen/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
