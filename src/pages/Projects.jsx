import React from "react";
import project1 from "../assets/project1.jpg"
import project2 from "../assets/project2.jpg"
import project3 from "../assets/project3.jpg"
import project4 from "../assets/project4.jpg"
import project5 from "../assets/project5.jpg"

function Projets() {
  return (
    <section className="projets">
      <h1>Mes Projets</h1>

      <div className="projets-container">

        <div className="projet-card">
            <img src={project1} alt="Todo App" />
          <h3>Todo App</h3>
          <p>Application pour gérer les tâches avec React.</p>
          
        </div>

        <div className="projet-card">
            <img src={project2} alt="gestion d’articles" />
          <h3>Blog Laravel</h3>
          <p>Création et gestion d’articles avec Laravel.</p>
          
        </div>

        <div className="projet-card">
          <img src={project3} alt="App Météo" />
          <h3>App Météo</h3>
          <p>Application météo avec API en React.</p>
         
        </div>
        
         <div className="projet-card">
          <img src={project4} alt="App réservation hôtel" />
          <h3>App de resevation d'hotel</h3>
          <p>Application pour gerer la reservation d'hotel.</p>
         
        </div>

         <div className="projet-card">
          <img src={project5} alt="E-commerce" />
          <h3>site e.commerce</h3>
          <p>Application ventre en ligne</p>
         
        </div>


      </div>
    </section>
  );
}

export default Projets;