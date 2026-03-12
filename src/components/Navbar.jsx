import "../styles/navbar.css"
import { Link } from "react-router-dom"
import logo from "../assets/logo.svg"
import { FaShoppingCart } from "react-icons/fa"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const NavBar = () => {

  const { cart } = useContext(CartContext)

  return (
    <nav className="navbar navbar-expand-lg navbar-beauty sticky-top">
      <div className="container">

        <img src={logo} alt="NC Beauty Studio Logo" width="100px" />

        <Link className="navbar-brand brand-logo" to="/">
          Beauty Studio
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav ms-auto gap-lg-4 align-items-lg-center">

            <li className="nav-item">
              <Link className="nav-link beauty-link" to="/">
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

            {/* CARRITO */}

            <li className="nav-item cart-icon">

              <Link to="/carrito" className="cart-link">

                <FaShoppingCart size={20} />

                {cart.length > 0 && (
                  <span className="cart-badge">
                    {cart.length}
                  </span>
                )}

              </Link>

            </li>

          </ul>

        </div>

      </div>
    </nav>
  )
}

export default NavBar