import { Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import Hero from "./pages/Hero";
import Footer from "./composants/Footer";
import Contact from "./pages/Contact";
import Apropos from "./pages/Apropos";
import Projects from "./pages/Projects";
import Layout from "./pages/Layout";
import Home from "./pages/Home";


function App(){

  const router = createBrowserRouter([
      {element: <Layout/> ,
        children : [
          { path:'/' ,element: <Home/>},
          { path:'/projets' ,element: <Projects/>},
          { path:'/contact' ,element: <Contact/>},
          { path:'/Apropos' ,element: <Apropos/>},
        ]

      }
  
  

  ])


  return(

      <RouterProvider  router={router} />
  )
}
export default App;