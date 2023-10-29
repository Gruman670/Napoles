// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="footer-area bg-f">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <h3>Sobre Nosotros</h3>
            <p>
              Somos una empresa de origen familiar que siente una gran pasión
              por la excelencia culinaria. Valoramos la importancia de la buena
              comida y la experiencia que esta puede ofrecer. Nuestra historia
              se basa en el amor por la gastronomía, y nos enorgullece compartir
              ese amor con nuestros clientes.
            </p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3>Horario de Atencion</h3>
            <p>
              <span className="text-color">Lunes :</span>Cerrado
            </p>
            <p>
              <span className="text-color">Martes-Miércoles :</span> 9:Am - 10PM
            </p>
            <p>
              <span className="text-color">Jueves-Viernes :</span> 9:Am - 10PM
            </p>
            <p>
              <span className="text-color">Sábado-Domingo :</span> 5:PM - 10PM
            </p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3>Información de Contacto</h3>
            <p className="lead">
              Dirección: Via delle Delizie, 27, 80133 Nápoles, Italia
            </p>
            <p className="lead">
              <a href="tel:+0120008009999">+01 2000 800 9999</a>
            </p>
            <p>
              <a href="mailto:info@napoles.com">info@napoles.com</a>
            </p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3>Subscribe</h3>
            <div className="subscribe_form">
              <form className="subscribe_form">
                <input
                  name="EMAIL"
                  id="subs-email"
                  className="form_input"
                  placeholder="Email Address..."
                  type="email"
                />
                <button type="submit" className="submit">
                  SUBSCRIBE
                </button>
                <div className="clearfix"></div>
              </form>
            </div>
            <ul className="list-inline f-social">
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-google-plus" aria-hidden="true"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="company-name">
                All Rights Reserved. © 2018 <a href="#">Napoles Restaurant</a> Design By :{" "}
                <a href="https://html.design/">html design</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
