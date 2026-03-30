import React from 'react'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-left">
          <h2>Hawa Thiam</h2>
          <p>Développeuse React passionnée par le web moderne.</p>
        </div>

        <div className="footer-links">
          <h3>Liens</h3>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/apropos">À propos</a></li>
            <li><a href="/projets">Projets</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Réseaux</h3>
          <p>🌐 Youtube</p>
          <p>💻 GitHub</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Hawa Thiam - Tous droits réservés</p>
      </div>
    </footer>
  )
}

export default Footer