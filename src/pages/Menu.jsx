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
              className="card-img-top menu-image"
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
        <div className="card mb-4">
          <div className="card-body">
            <h2 className="card-title">Bebidas</h2>
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Refrescos Naturales
                <span className="price">$2,000</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Gaseosas
                <span className="price">$2,000</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Agua
                <span className="price">$1,000</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
