import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../css/navbar.css";

export default function Navbar(props) {
  let location = useLocation();
  let history = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem("token");
    history("/")
  };
  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            TextUtils
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/history" ? "active" : ""
                  }`}
                  to="/history"
                >
                  History
                </Link>
              </li>
            </ul>
            <div className="d-flex loginSingupDark">
            {!localStorage.getItem("token") ? (
              <form className="d-flex loginSingupDark">
                <Link
                  to="/login"
                  className="btn btn-primary"
                  type="submit"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="btn btn-primary"
                  type="submit"
                >
                  Signup
                </Link>
              </form>
            ) : (
              <button
                onClick={handleLogout}
                className="btn btn-primary"
              >
                Logout
              </button>
            )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
