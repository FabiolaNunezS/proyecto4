import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { FormularioReservas } from "../pages/FormularioReservas";
import { Menu } from "../pages/Menu";
import { Admin } from "../pages/Admin";
import { ProtectedRoutes } from "./protectedRoutes";

export const MainRoutes = ({ setUser, user }) => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route element={<ProtectedRoutes user={user} />}>
          <Route path="/reservas" element={<FormularioReservas />} />
        </Route>
        <Route path="/administrador" element={<Admin setUser={setUser} />} />
      </Routes>
    </div>
  );
};
