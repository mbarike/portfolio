import { useNavigate } from "react-router-dom";
import image from "../assets/hawa.jpg";
import Apropos from "./Apropos";


function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Bienvenue sur mon portfolio</h1>
        <p>Je suis développeuse React passionnée par la création de sites web modernes.</p>
      </div>  
      <div className="hero-image"> 
        <img src={image} alt="Hawa" />
      </div>
      <div className="hero-buttons">
        <button onClick={() => navigate("/projects")}>Voir mes projets</button>
        <button onClick={() => navigate("/contact")} className="btn-outline">Contact</button>
      </div>
    </section>
    
    
    
  );
}

export default Hero;