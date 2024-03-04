import { useContext } from "react";
import { jwtDecode as jwt_decode } from "jwt-decode";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

function Navbar() {
  const { logoutUser } = useContext(AuthContext);
  const token = localStorage.getItem("authTokens");

  if (token) {
    jwt_decode(token);
  }

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        style={{ backgroundColor: "black" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              style={{ width: "10vh", padding: "6px" }}
              src="https://team23.sarc-iitb.org/static/SARC%20WHITE.png"
              alt=""
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item" style={{ display: "flex" }}>
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  exact
                  to="/"
                >
                  Home
                </NavLink>
                
              </li>
              <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="https://team23.sarc-iitb.org/contact/"
                >
                  About
                </NavLink>
              {token !== null && (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/dashboard">
                      Dashboard
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/event">
                      Events
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      onClick={logoutUser}
                      style={{ cursor: "pointer" }}
                      to="/"
                    >
                      Logout
                    </Link>
                  </li>
                </>
              )}
              {token === null && (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/login">
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/register">
                      Register
                    </NavLink>
                  </li>
                </>
              )}

              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
