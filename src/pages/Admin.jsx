import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Admin = () => {
  const [formState, setFormState] = useState({
    correo: "",
    contrasena: "",
  });

  const onChangeAdmin = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  const submitFormulario = async (e) => {
    e.preventDefault();
    toast.success("Login realizado");
    // alert("login realizado");
  };

  return (
    <form onSubmit={submitFormulario} className="text-center">
      <h1 className="display-4 mb-4">Administrador</h1>
      <div className="form-group">
        <label htmlFor="correo">
          <strong>Correo electrónico</strong>
        </label>
        <input
          type="email"
          className="form-control"
          name="correo"
          value={formState.correo}
          onChange={onChangeAdmin}
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="contrasena">
          <strong>Contraseña</strong>
        </label>
        <input
          type="password"
          className="form-control"
          name="contrasena"
          value={formState.contrasena}
          onChange={onChangeAdmin}
        />
      </div>
      <button type="submit" id="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
};
