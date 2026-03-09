import "../styles/navbar.css"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-beauty sticky-top">
      <div className="container">
        <img src="src/assets/logo.svg" alt="NC Beauty Studio Logo" width={'100px'} />
        <a className="navbar-brand brand-logo" href="#">
          Beauty Studio
        </a>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-lg-4">

            <li className="nav-item">
              <Link className="nav-link beauty-link active" to="/">
                INICIO
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link beauty-link" to="/servicios">
                SERVICIOS
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link beauty-link" to="/galeria">
                GALERÍA
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link beauty-link" to="/contacto">
                CONTACTO
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  )
}

export default NavBar