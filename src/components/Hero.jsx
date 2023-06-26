import React from "react";

export const Hero = () => {
  return (
    <div
      className="hero text-black text-center mb-4 py-5"
      style={{ backgroundImage: `url('./images/hero.jpg')` }}
    >
      <div className="container">
        <h1 className="display-4 text-bg-light p-2">¡Bienvenido a Pinolero</h1>
        <p className="lead text-bg-light p-2">
          Disfruta de nuestra deliciosa comida y excelente servicio
        </p>
        <button className="btn btn-light btn-lg">Ver Menú</button>
      </div>
    </div>
  );
};
