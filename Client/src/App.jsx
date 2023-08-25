/* import  { useState, useEffect } from 'react'; */
import Home from "./views/homeView";/* 
import Detail from "./components/detail";
import Landing from "./components/landing" */
import {
  createBrowserRouter,
  RouterProvider,
 /*  Route,
  Link, */
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home></Home>
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
