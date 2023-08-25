/* import  { useState, useEffect } from 'react'; */
import Home from "./views/homeView"; 
import Detail from "./views/detail";

import {
  createBrowserRouter,
  RouterProvider,
 /*  Route,
  Link, */
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>
  },
  {
    path: "/detail/:id",
    element: <Detail/>
  }
])

function App() {

  return (

    <div className="App">
 <RouterProvider router={router} />

      
    </div>

      )
}

export default App 
