import { Outlet, Navigate } from "react-router-dom";

export const ProtectedRoutes = ({ children, user }) => {
  console.log(user);

  if (!user) {
    return <Navigate to="/" />;
  }
  return children ? children : <Outlet />;
};
