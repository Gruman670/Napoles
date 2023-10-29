import React from 'react';
import aboutImg from '../images/about-img.jpg';

function About() {
  return (
    <div className="about-section-box">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <img src={aboutImg} alt="" className="img-fluid" />
          </div>
          <div className="col-lg-6 col-md-6 text-center">
            <div className="inner-column">
              <h1>Bienvenidos a <span>Napoles Restaurant</span></h1>
              <h4>Pequeña historia</h4>
              <p>El restaurante "Nápoles" es un encantador lugar familiar en un pueblo costero. Comenzó con Don Antonio y Doña Isabella Martínez, quienes compartieron su amor por la cocina mediterránea e italiana con la comunidad. El restaurante pasó de generación en generación, manteniendo la tradición culinaria y la hospitalidad. La tercera generación modernizó el restaurante, fusionando platos locales con influencias mediterráneas. Hoy en día, "Nápoles" sigue siendo un lugar especial donde la gente disfruta de buena comida y crea recuerdos inolvidables. La familia Martínez ha creado un legado culinario y un rincón de felicidad en su comunidad.</p>
              <button className="btn btn-lg btn-circle btn-outline-new-white">Reservación</button>
            </div>
          </div>
          <div className="col-md-12">
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
