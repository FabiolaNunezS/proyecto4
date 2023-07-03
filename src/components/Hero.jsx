import React from "react";

export const Hero = () => {
  return (
    <div
      className="hero text-black text-center mb-4 py-5"
      style={{ backgroundImage: `url('./images/hero.png')` }}
    >
      <div className="container">
        <h1 className="header">¡Bienvenido a Pinolero!</h1>
        <p className="header">
          Disfruta de nuestra deliciosa comida y excelente servicio
        </p>
      </div>
    </div>
  );
};
