import BeautyCard from "../components/BeautyCard";
import "../styles/home.css";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaGem, FaLeaf, FaPalette, FaTrophy } from "react-icons/fa";
import { FaStar, FaGoogle } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Uñas Esculturales",
    text: "Extensión profesional con diferentes largos",
    image: "/images/esculturales.jpg",
    price: 300,
  },
  {
    id: 2,
    title: "Rubber Balance",
    text: "Fortalecimiento de uña natural con diseño",
    image: "/images/rubber.jpg",
    price: 300,
  },
  {
    id: 3,
    title: "Técnica Híbrida",
    text: "Extensión con polygel y sellado rubber",
    image: "/images/hibrida.jpg",
    price: 400,
  },
  {
    id: 4,
    title: "Pedicure Spa",
    text: "Tratamiento completo con exfoliación y masaje",
    image: "/images/pedicure.jpg",
    price: 400,
  },
  {
    id: 5,
    title: "Retoque Acrílicas",
    text: "Mantenimiento profesional de uñas",
    image: "/images/retoque.jpg",
    price: 300,
  },
  {
    id: 6,
    title: "Gel Semipermanente",
    text: "Aplicación duradera en manos o pies",
    image: "/images/gel.jpg",
    price: 200,
  },
  {
    id: 7,
    title: "Retiro de Producto",
    text: "Retiro seguro de acrílico, rubber o gel",
    image: "/images/retiro.jpg",
    price: 50,
  },
  {
    id: 8,
    title: "Maquillaje Social",
    text: "Maquillaje profesional + peinado",
    image: "/images/maquillaje.jpg",
    price: 750,
  },
];
const Home = () => {
  return (
    <div>
      {/* HERO */}

      <section className="hero-section text-center">
        <div className="container">
          <h1>Exquisito arte de uñas para la mujer moderna</h1>

          <p>
            Experimenta manicuras y pedicuras de lujo adaptadas a tu estilo.
            Relájate en un ambiente sereno y deja que tus manos hablen por ti.
          </p>

          <a href="https://wa.me/523421029554" className="btn hero-btn">
            <FaWhatsapp className="btn-icon" />
            Reservar cita
          </a>
        </div>
      </section>

      {/* SERVICIOS */}

      <section className="services-section">
        <div className="container">
          <h2 className="section-title text-center mb-5">Servicios</h2>

          <div className="row">
            {services.map((service) => (
              <BeautyCard
                key={service.id}
                id={service.id}
                title={service.title}
                text={service.text}
                image={service.image}
                price={service.price}
              />
            ))}
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}

      <section className="benefits-section">
        <div className="container text-center">
          <h2 className="section-title mb-5">¿Por qué elegirnos?</h2>

          <div className="row">
            <div className="col-md-3 benefit">
              <FaGem className="benefit-icon" />
              <h4>Productos Premium</h4>
              <p>Utilizamos materiales de alta calidad.</p>
            </div>

            <div className="col-md-3 benefit">
              <FaLeaf className="benefit-icon" />
              <h4>Ambiente Relajante</h4>
              <p>Un espacio diseñado para tu bienestar.</p>
            </div>

            <div className="col-md-3 benefit">
              <FaPalette className="benefit-icon" />
              <h4>Diseños Personalizados</h4>
              <p>Arte único adaptado a tu estilo.</p>
            </div>

            <div className="col-md-3 benefit">
              <FaTrophy className="benefit-icon" />
              <h4>5+ años de experiencia</h4>
              <p>Profesionalismo garantizado.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GALERÍA PREVIEW */}

      <section className="gallery-preview">
        <div className="container">
          <h2 className="section-title text-center mb-5">Nuestros trabajos</h2>

          <div className="row">
            <div className="col-md-3">
              <img
                src="/images/trabajo1.jpg"
                className="gallery-img"
              />
            </div>

            <div className="col-md-3">
              <img
                src="/images/trabajo2.jpg"
                className="gallery-img"
              />
            </div>

            <div className="col-md-3">
              <img
                src="/images/trabajo3.jpg"
                className="gallery-img"
              />
            </div>

            <div className="col-md-3">
              <img
                src="/images/trabajo4.jpg"
                className="gallery-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE MI */}

      <section className="about-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="/images/nc-cibrian.jpg"
                className="about-img"
              />
            </div>

            <div className="col-md-6">
              <h2 className="section-title">Sobre mí</h2>

              <p>
                Hola Me presento, Soy <b>Nayeli Cibrian</b>, mi misión es
                embellecerte y es un placer para mí ser parte de hacer que no
                solo te veas mejor si no que así te sientas. Me siento muy
                afortunada de emprender en este bello mundo, en el que no solo
                he aprendido bastante, si no también he conocido muchas personas
                y he hecho amistades que jamás imaginé que llegaría a tener a
                través de mi trabajo. En el transcurso de 5 años en esta
                profesión siempre busco mejorar para brindarles un servicio de
                calidad. La magia sucede aquí.
              </p>

              <p>
                Me dedico a brindar servicios de alta calidad, higiénicos y
                creativos.
              </p>

              <p>Mi pasión es hacerte sentir hermosa, uña por uña.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}

      <section className="testimonials-section text-center">
        <div className="container">
          <h2 className="section-title mb-5">Lo que dicen nuestras clientas</h2>

          <div className="row">
            <div className="col-md-4">
              <div className="testimonial-card">
                <div className="review-header">
                  <div className="avatar">M</div>
                  <div className="review-info">
                    <strong>Mariana R.</strong>
                    <div className="google-label">
                      <FaGoogle /> Google
                    </div>
                  </div>
                </div>

                <div className="stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <p>"El mejor servicio de uñas que he probado."</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="testimonial-card">
                <div className="review-header">
                  <div className="avatar">A</div>
                  <div className="review-info">
                    <strong>Ana P.</strong>
                    <div className="google-label">
                      <FaGoogle /> Google
                    </div>
                  </div>
                </div>

                <div className="stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <p>"Diseños hermosos y atención increíble."</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="testimonial-card">
                <div className="review-header">
                  <div className="avatar">S</div>
                  <div className="review-info">
                    <strong>Sofía L.</strong>
                    <div className="google-label">
                      <FaGoogle /> Google
                    </div>
                  </div>
                </div>

                <div className="stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <p>"Siempre salgo feliz con mis uñas."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="/images/nails-cta.jpg"
                alt="Servicio de uñas"
                className="cta-image"
              />
            </div>
            <div className="col-md-6 text-center text-md-start">
              <h2>Consiéntete</h2>

              <p>Agenda tu cita y vive una experiencia de belleza única.</p>

              <a href="https://wa.me/523421029554" className="btn cta-btn">
                Reservar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Instagram */}
      <section className="instagram-section">
        <div className="container text-center">
          <div className="instagram-header">
            <FaInstagram className="instagram-icon" />

            <h2 className="section-title">Síguenos en Instagram</h2>

            <p>Descubre nuestros últimos diseños y trabajos.</p>
          </div>

          <div className="row g-3 instagram-grid">
            <div className="col-md-3 col-6">
              <img
                src="/images/instagram_1.jpg"
                className="insta-img"
              />
            </div>

            <div className="col-md-3 col-6">
              <img
                src="/images/instagram_2.jpg"
                className="insta-img"
              />
            </div>

            <div className="col-md-3 col-6">
              <img
                src="/images/instagram_3.jpg"
                className="insta-img"
              />
            </div>

            <div className="col-md-3 col-6">
              <img
                src="/images/instagram_4.jpg"
                className="insta-img"
              />
            </div>
          </div>

          <a
            href="https://www.instagram.com/nayeli_cibrianbs/"
            target="_blank"
            className="instagram-btn"
          >
            <FaInstagram />
            Ver Instagram
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
