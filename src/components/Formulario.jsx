import { useState } from "react";
import moment from "moment";
import { toast } from "react-toastify";
import { db } from "../../firebase/firebase";

export const Formulario = () => {
  const [formState, setFormState] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    numeroPersona: "",
    fecha: "",
  });

  const onChangeFormulario = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
    console.log(formState);
    console.log(target.value);
  };

  const submitFormulario = async (e) => {
    e.preventDefault();
    await db.collection("reservas").add(formState);
    alert("Reserva realizada");
  };

  return (
    <div className="container">
      <div className="card bg-light text-dark p-4 text-center">
        <h2 className="mb-4">Realiza tu reserva</h2>
        <form onSubmit={submitFormulario}>
          <div className="form-group row justify-content-center">
            <label htmlFor="name" className="col-sm-2 col-form-label">
              Nombre
            </label>
            <div className="col-sm-0">
              <input
                type="text"
                name="nombre"
                placeholder="Agregue su nombre"
                value={formState.nombre}
                onChange={onChangeFormulario}
              />
            </div>
          </div>
          <div className="form-group row justify-content-center">
            <label htmlFor="email" className="col-sm-2 col-form-label">
              Correo
            </label>
            <div className="col-sm-0">
              <input
                type="email"
                name="correo"
                value={formState.correo}
                onChange={onChangeFormulario}
              />
            </div>
          </div>
          <div className="form-group row justify-content-center">
            <label htmlFor="telefono" className="col-sm-2 col-form-label">
              Teléfono
            </label>
            <div className="col-sm-0">
              <input
                type="number"
                value={formState.telefono}
                name="telefono"
                onChange={onChangeFormulario}
              />
            </div>
          </div>
          <div className="form-group row justify-content-center">
            <label htmlFor="number" className="col-sm-2 col-form-label">
              Numero de Personas
            </label>
            <div className="col-sm-0">
              <input
                type="number"
                name="numeroPersona"
                value={formState.numero}
                onChange={onChangeFormulario}
              />
            </div>
          </div>
          <div className="form-group row justify-content-center">
            <label htmlFor="date" className="col-sm-2 col-form-label">
              Fecha
            </label>
            <div className="col-sm-0">
              <input
                type="datetime-local"
                name="fecha"
                min={moment().format("YYYY-MM-DD hh:mm")}
                value={formState.fecha}
                onChange={onChangeFormulario}
              />
            </div>
          </div>
          <div className="form-group row justify-content-center">
            <div className="col-sm-6 mt-3">
              <button
                type="submit"
                className="btn btn-primary mb-3"
                id="sumbit"
              >
                Agregar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
