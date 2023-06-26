import { useState } from "react";

export const Formulario = () => {
  const [formState, setFormState] = useState({
    Nombre: "",
    Correo: "",
    Telefono: "",
    Fecha: "",
  });

  const onChangeFormulario = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
    console.log(formState);
    console.log(target.value);
  };

  return (
    <div className="container">
      <div className="card bg-light text-dark p-4 text-center">
        <h2 className="mb-4">Formulario para reservas</h2>
        <form action="submit">
          <div className="form-group mb-3">
            <label htmlFor="name" className="mr-2">
              Nombre
            </label>
            <input
              type="text"
              name="Nombre"
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
              name="Correo"
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
              name="Telefono"
              onChange={onChangeFormulario}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="date" className="mr-2">
              Fecha
            </label>
            <input
              type="datetime-local"
              name="Fecha"
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
