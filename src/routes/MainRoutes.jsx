import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { FormularioReservas } from "../pages/FormularioReservas";
import { Menu } from "../pages/Menu";

export const MainRoutes = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservas" element={<FormularioReservas />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
