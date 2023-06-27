import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { FormularioReservas } from "../pages/FormularioReservas";

export const MainRoutes = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<FormularioReservas />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
