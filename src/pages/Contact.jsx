import React from "react";

function Contact() {
  return (
    <section className="contact">
      <div className="contact-container">

        {/* TEXTE */}
        <div className="contact-info">
          <h1>Contactez-moi</h1>
          <p>
            Vous avez un projet ou une question ? N’hésitez pas à me contacter.
            Je vous répondrai rapidement.
          </p>

          <div className="info">
            <p>📧 hawa@email.com</p>
            <p>📞 +221 77 000 00 00</p>
            <p>📍Dakar, Sénégal</p>
            <p>🌐 www.monportfolio.com</p>
          </div>
        </div>

        {/* FORMULAIRE */}
        <form className="contact-form">
          <input type="text" placeholder="Votre nom" required />
          <input type="email" placeholder="Votre email" required />
          <textarea placeholder="Votre message" rows="5" required></textarea>

          <button type="submit">Envoyer</button>
        </form>

      </div>
    </section>
  );
}

export default Contact;