import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav
      className="navbar bg-dark border-bottom border-bottom-dark mb-4"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Restaurante Pinolero
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/menu">
                Menu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/reservas">
                Iniciar Sesion
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
