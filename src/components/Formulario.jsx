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
    toast.success("Reserva realizada");
    // alert("Reserva realizada");
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
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control mb-3"
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
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control mb-3"
                name="correo"
                placeholder="email@mail.com"
                value={formState.correo}
                onChange={onChangeFormulario}
              />
            </div>
          </div>
          <div className="form-group row justify-content-center">
            <label htmlFor="telefono" className="col-sm-2 col-form-label">
              Teléfono
            </label>
            <div className="col-sm-10">
              <input
                type="tel"
                className="form-control mb-3"
                name="telefono"
                placeholder="+56912345678"
                value={formState.telefono}
                onChange={onChangeFormulario}
              />
            </div>
          </div>
          <div className="form-group row justify-content-center">
            <label htmlFor="number" className="col-sm-2 col-form-label">
              Numero de Personas
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control mb-3"
                name="numeroPersona"
                placeholder="2"
                value={formState.numero}
                onChange={onChangeFormulario}
                max={20}
                min={2}
              />
            </div>
          </div>
          <div className="form-group row justify-content-center">
            <label htmlFor="date" className="col-sm-2 col-form-label">
              Fecha
            </label>
            <div className="col-sm-10">
              <input
                type="datetime-local"
                className="form-control"
                name="fecha"
                min={moment().format("YYYY-MM-DD hh:mm")}
                value={formState.fecha}
                onChange={onChangeFormulario}
              />
            </div>
          </div>
          <div className="form-group row justify-content-center">
            <div className="col-sm-12">
              <button
                type="submit"
                className="btn btn-primary btn-block mb-3 mt-3"
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
