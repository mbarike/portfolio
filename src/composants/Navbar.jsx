import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";


const Navbar = () => {

  const [ openMenu , setOpenMenu ] = useState(false)
  console.log(openMenu)
   

  return (
    <nav> 
        {/* gauche */}
       <h1 className='logo'>Hawa thiam</h1>

        {/* au milieu */}

        <div className="lien">
              <NavLink to="/">
                <p>Accueil</p>
              </NavLink>
              <NavLink to="/projets">
               <p>Projets</p>
              </NavLink>
              <NavLink to="/contact" >
               <p>Contact</p>
              </NavLink>
              <NavLink to="/Apropos" >
               <p>Apropos</p>
              </NavLink>

        </div>

        {/* droite */}
         <div className="menu">
            <div className="about"></div>
            <IoMenu 
             onClick={() => setOpenMenu(!openMenu)}
            className='burguer'  size={30} />
         </div>

         {/* volet  */}

          {
            openMenu && (
            <div className="lien_mobile">
              <NavLink to="/">
                <p>Accueil</p>
              </NavLink>
              <NavLink to="/projets">
               <p>Projets</p>
              </NavLink>
              <NavLink to="/contact" >
               <p>Contact</p>
              </NavLink>
              <NavLink to="/Apropos">
              <p>Apropos</p>
              </NavLink>
              
           </div>
            )
          }



    </nav>
  )
}

export default Navbar
