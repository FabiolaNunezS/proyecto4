import React from "react";

export const Menu = () => {
  return (
    <div className="container text-center">
      <h1 className="mb-4 text-align-center">Menú</h1>
      <h2 className="mb-4">Platos Principales</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <img
              src="../images/asado.jpg"
              className="card-img-top"
              alt="carne asada"
            />
            <div className="card-body">
              <h3 className="card-title">Carne Asada</h3>
              <p className="card-text">$12,990</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img
              src="../images/comida.jpg"
              className="card-img-top"
              alt="ceviche"
            />
            <div className="card-body">
              <h3 className="card-title">Ceviche</h3>
              <p className="card-text">$10,990</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img
              src="../images/vigoron.jpg"
              className="card-img-top"
              alt="vigoron"
            />
            <div className="card-body">
              <h3 className="card-title">Vigoron</h3>
              <p className="card-text">$8,990</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4">
              <img
                src="../images/quesillo.jpg"
                className="card-img-top"
                alt="quesillo"
              />
              <div className="card-body">
                <h3 className="card-title">Quesillo</h3>
                <p className="card-text">$7,990</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <img
                src="../images/tajadas.jpg"
                className="card-img-top"
                alt="tajadas"
              />
              <div className="card-body">
                <h3 className="card-title">Tajadas con Queso</h3>
                <p className="card-text">$8,990</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <img
                src="../images/enchilada.jpg"
                className="card-img-top"
                alt="enchilada"
              />
              <div className="card-body">
                <h3 className="card-title">Enchilada</h3>
                <p className="card-text">$8,990</p>
              </div>
            </div>
          </div>
        </div>
        <h2 className="mb-4">Bebidas</h2>
        <div>
          <li>Refrescos Naturales: $2,000.</li>
          <li>Gaseosas: $2,000.</li>
          <li>Agua: $1,000.</li>
        </div>
      </div>
    </div>
  );
};
