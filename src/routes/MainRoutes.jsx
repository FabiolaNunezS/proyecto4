import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { FormularioReservas } from "../pages/FormularioReservas";
import { Menu } from "../pages/Menu";
import { Admin } from "../pages/Admin";

export const MainRoutes = ({ setUser }) => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route element={<protectedRoutes />} />
        <Route path="/reservas" element={<FormularioReservas />} />
        <Route path="/administrador" element={<Admin setUser={setUser} />} />
      </Routes>
    </div>
  );
};
