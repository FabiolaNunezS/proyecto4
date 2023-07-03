export const Ubicacion = () => {
  return (
    <div className="container">
      <div className="card bg-dark text-white p-4 text-center align-items-center">
        <h2 className="mb-4">Ubicación y Contacto</h2>
        <div className="row">
          <div className="col-md-12 mb-3">
            <img
              src="./images/ubicacion.png"
              alt="imagen ubicacion"
              className="rounded img-fluid"
            />
            <p className="mt-3">
              Dirección: Alonso de Córdova 4263, Vitacura, Región Metropolitana
            </p>
            <div className="col-md-12 mb-3">
              <img
                src="./images/horario.png"
                alt="imagen horario"
                className="rounded img-fluid"
              />
              <p className="mt-3">
                Horario: Lunes a Domingo 11:00 - 23:00 hrs.
              </p>
            </div>
            <div className="col-md-12 mb-3">
              <img
                src="./images/telefono.png"
                alt="imagen telefono"
                className="rounded img-fluid text-center"
              />
            </div>
            <p className="mt-3">Teléfono: +56 9 3236 1687</p>
          </div>
          <div className="col-md-12">
            <img
              src="./images/correo.png"
              alt="imagen correo"
              className="rounded img-fluid text-center"
            />
            <p className="mt-3">Correo: reservas@pinoleros.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};
