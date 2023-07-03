import React, { useEffect, useState } from "react";
import { Hero } from "../components/Hero";
import { db } from "../../firebase/firebase";

export const FormularioReservas = () => {
  const [reservas, setReservas] = useState([]);

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
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Telefono</th>
            <th>Numero de personas</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {reservas.map((element) => (
            <tr key={element.id}>
              <td>{element.nombre}</td>
              <td>{element.correo}</td>
              <td>{element.telefono}</td>
              <td>{element.numeroPersona}</td>
              <td>{element.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
