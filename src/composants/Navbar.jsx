import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">Hawa Thiam</h2>

      {/* BOUTON HAMBURGER */}
      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* NAV LINKS */}
      <ul className={`nav-links ${open ? "active" : ""}`}>
        <li><Link to="/" onClick={() => setOpen(false)}>Accueil</Link></li>
        <li><Link to="/apropos" onClick={() => setOpen(false)}>À propos</Link></li>
        <li><Link to="/projects" onClick={() => setOpen(false)}>Projects</Link></li>
        <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;