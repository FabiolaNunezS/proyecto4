import { Outlet } from "react-router-dom";

export const protectedRoutes = ({ children }) => {
  return children ? children : <Outlet />;
};
