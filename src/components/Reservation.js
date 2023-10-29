// src/components/Reservation.js
import Firebase  from './firebase';
import React , { useState } from 'react';
// ...importar otros perfiles

function Reservaciones() {
  const [fecha, setFecha] = useState('');
  const [horaInicio, setHoraInicio] = useState('');
  const [numeroDePersonas, setNumeroDePersonas] = useState('');
  const [nombre, setNombre] = useState ('');
  const [mail, setMail ] = useState ('');
  const [telefono, setTelefono] = useState('');
  const handleFechaChange = (event) => {
    setFecha(event.target.value);
  };
const handleHoraInicioChange = (event) => {
  setHoraInicio(event.target.value);
  };
const handleNumeroDePersonasChange = (event) => {
  setNumeroDePersonas(event.target.value);
  };
const handleNombreChange = (event) => {
  setNombre(event.target.value);
  };
const handleMailChange = (event) => {
  setMail(event.target.value);
  };
const handleTelefonoChange = (event) => {
  setTelefono(event.target.value);
 
  };

const handleSubmit = () => {
  try {
    
  // Añade datos a Firestore, por ejemplo
  const db = Firebase.firestore();
  db.collection('reservas').add({
    fecha: fecha,
    horaInicio: horaInicio,
    numeroDePersonas: numeroDePersonas,
    nombre: nombre,
    mail: mail,
    telefono: telefono
    });
} catch (error) {
  console.error(error); // You might send an exception to your error tracker like AppSignal
  return error;
}
  };

  return (
    <div class="reservation-box">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="heading-title text-center">
              <h2>Reserva</h2>
              <p>Esperamos darle la bienvenida en nuestro restaurante. ¿Desea disfrutar de una experiencia culinaria inolvidable? Reserve su mesa hoy mismo y permítanos brindarle una velada de sabor y elegancia. Ya sea una ocasión especial o simplemente una comida entre amigos, estamos listos para hacer que su visita sea inolvidable. ¡Esperamos servirle pronto!</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 col-sm-12 col-xs-12">
            <div class="contact-block">
              <form id="contactForm" novalidate="true">
                <div class="row">
                  <div class="col-md-6">
                    <h3>Reservar una Mesa</h3>
                    <div class="col-md-12">
                      <div class="form-group">
                        <input type="text" placeholder="Fecha" id="fecha" class="form-control" name="fecha" required="" data-error="Por favor, ingrese su fecha" value={fecha} onChange={handleFechaChange}/>
                        <div class="help-block with-errors"></div>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <input type="text" placeholder="Hora" id="horaInicio" class="form-control" name="horaInicio" required="" data-error="Por favor, ingrese su hora" value={horaInicio} onChange={handleHoraInicioChange}/>
                        <div class="help-block with-errors"></div>
                        <div class="help-block with-errors"></div>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <select class="custom-select d-block form-control" id="numeroDePersonas" required="" data-error="Por favor, seleccione el número de personas" value={numeroDePersonas} onChange={handleNumeroDePersonasChange}>
                          <option disabled="" selected="">Seleccione el número de personas*</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                        </select>
                        <div class="help-block with-errors"></div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <h3>Detalles de Contacto</h3>
                    <div class="col-md-12">
                      <div class="form-group">
                        <input type="text" class="form-control" id="nombre" name="nombre" placeholder="Su Nombre" required="" data-error="Por favor, ingrese su nombre" value={nombre} onChange={handleNombreChange}/>
                        <div class="help-block with-errors"></div></div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <input type="text" id="mail" class="form-control" name="mail" required="" data-error="Por favor, ingrese su correo electrónico" value={mail} onChange={handleMailChange}/>
                        <div class="help-block with-errors"></div>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <input type="text" placeholder="Su Número de Teléfono" id="telefono" class="form-control" name="telefono" required="" data-error="Por favor, ingrese su número de teléfono" value={telefono} onChange={handleTelefonoChange} />
                        <div class="help-block with-errors"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="submit-button text-center">
                  <button class="btn btn-common" id="submit" type="submit" onClick={handleSubmit}>
      Reservar Mesa</button>
                    <div id="msgSubmit" class="h3 text-center hidden"></div>
                    <div class="clearfix"></div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservaciones;
