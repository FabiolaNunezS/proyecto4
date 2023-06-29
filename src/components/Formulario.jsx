import { useState } from "react";
import moment from "moment";
import { toast } from "react-toastify";
import { db } from "../../firebase/firebase";

export const Formulario = () => {
  const [formState, setFormState] = useState({
    nombre: "",
    correo: "",
    telefono: "",
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
          <div className="form-group mb-3">
            <label htmlFor="name" className="mr-2">
              Nombre
            </label>
            <input
              type="text"
              name="nombre"
              placeholder="Agregue su nombre"
              value={formState.Nombre}
              onChange={onChangeFormulario}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email" className="mt-2">
              Correo
            </label>
            <input
              type="email"
              name="correo"
              value={formState.Correo}
              onChange={onChangeFormulario}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="telefono" className="mt-2">
              Teléfono
            </label>
            <input
              type="number"
              value={formState.Telefono}
              name="telefono"
              onChange={onChangeFormulario}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="date" className="mr-2">
              Fecha
            </label>
            <input
              type="datetime-local"
              name="fecha"
              min={moment().format("YYYY-MM-DD hh:mm")}
              value={formState.Fecha}
              onChange={onChangeFormulario}
            />
          </div>
          <button type="submit" className="btn btn-primary mb-3" id="sumbit">
            Agregar
          </button>
        </form>
      </div>
    </div>
  );
};
