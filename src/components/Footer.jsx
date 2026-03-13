import "../styles/footer.css";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="beauty-footer">
      <div className="container">
        <div className="row footer-content">
          {/* LOGO */}
          <div className="col-lg-4 footer-brand">
            <img src={logo} alt="NC Beauty Studio" width="120" />

            <h4>NC Beauty Studio</h4>

            <p>
              Exquisito arte de uñas para la mujer moderna. Diseños únicos y
              cuidado profesional.
            </p>
          </div>

          {/* NAVEGACIÓN */}
          <div className="col-lg-4 footer-links">
            <h5>Navegación</h5>

            <ul>
              <li>
                <Link to="/">Inicio</Link>
              </li>

              <li>
                <Link to="/servicios">Servicios</Link>
              </li>

              <li>
                <Link to="/galeria">Galería</Link>
              </li>

              <li>
                <Link to="/contacto">Contacto</Link>
              </li>
            </ul>
          </div>

          {/* CONTACTO */}
          <div className="col-lg-4 footer-contact">
            <h5>Contacto</h5>

            <p>
              <FaMapMarkerAlt /> Sayula, Jalisco, México
            </p>

            <p>
              <FaWhatsapp /> WhatsApp
            </p>

            <div className="footer-social">
              <a href="#">
                <FaInstagram />
              </a>

              <a href="#">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} NC Beauty Studio — Todos los derechos
            reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
