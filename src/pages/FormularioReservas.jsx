import React, { useEffect, useState } from "react";
import { Hero } from "../components/Hero";
import { db } from "../../firebase/firebase";
import Swal from "sweetalert2";

export const FormularioReservas = () => {
  const [reservas, setReservas] = useState([]);

  const eliminar = async (id) => {
    const confirmarEliminar = await Swal.fire({
      title: "¿Estás seguro que quieres eliminar?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí",
      cancelButtonText: "Cancelar",
    });

    if (confirmarEliminar.isConfirmed) {
      try {
        const reservasFiltradas = reservas.map(
          (elemento) => elemento.id !== id
        );
        setReservas(reservasFiltradas);
        await db.collection("reservas").doc(id).delete();
        Swal.fire("Eliminado", "La reserva ha sido eliminada", "success");
      } catch (error) {
        Swal.fire("Error", "Ocurrió un error al eliminar la reserva", "error");
      }
    }
  };

  const obtenerReservas = async () => {
    db.collection("reservas").onSnapshot((querySnapshot) => {
      const informacion = [];
      querySnapshot.forEach((documento) => {
        informacion.push({ ...documento.data(), id: documento.id });
        setReservas(informacion);
      });
    });
  };

  useEffect(() => {
    obtenerReservas();
    console.log(reservas);
  }, []);
  return (
    <main>
      <Hero />
      {reservas.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="thead-dark">
              <tr scope="row">
                <th scope="col">Nombre</th>
                <th scope="col">Correo</th>
                <th scope="col">Telefono</th>
                <th scope="col">Numero de personas</th>
                <th scope="col">Fecha</th>
                <th scope="col" className="d-md-table-cell">
                  Acción
                </th>
              </tr>
            </thead>
            <tbody>
              {reservas.map((element) => (
                <tr scope="row" key={element.id}>
                  <td>{element.nombre}</td>
                  <td>{element.correo}</td>
                  <td>{element.telefono}</td>
                  <td>{element.numeroPersona}</td>
                  <td>{element.fecha}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => eliminar(element.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No hay reservas realizadas.</p>
      )}
    </main>
  );
};
