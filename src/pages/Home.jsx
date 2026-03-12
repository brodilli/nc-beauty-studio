import BeautyCard from "../components/BeautyCard";
import "../styles/home.css";
import { FaInstagram } from "react-icons/fa";
const services = [
  {
    id: 1,
    title: "Uñas Esculturales",
    text: "Extensión profesional con diferentes largos",
    image: "/nc-beauty-studio/images/esculturales.jpg",
    price: 300,
  },
  {
    id: 2,
    title: "Rubber Balance",
    text: "Fortalecimiento de uña natural con diseño",
    image: "/nc-beauty-studio/images/rubber.jpg",
    price: 300,
  },
  {
    id: 3,
    title: "Técnica Híbrida",
    text: "Extensión con polygel y sellado rubber",
    image: "/nc-beauty-studio/images/hibrida.jpg",
    price: 400,
  },
  {
    id: 4,
    title: "Pedicure Spa",
    text: "Tratamiento completo con exfoliación y masaje",
    image: "/nc-beauty-studio/images/pedicure.jpg",
    price: 400,
  },
  {
    id: 5,
    title: "Retoque Acrílicas",
    text: "Mantenimiento profesional de uñas",
    image: "/nc-beauty-studio/images/retoque.jpg",
    price: 300,
  },
  {
    id: 6,
    title: "Gel Semipermanente",
    text: "Aplicación duradera en manos o pies",
    image: "/nc-beauty-studio/images/gel.jpg",
    price: 200,
  },
  {
    id: 7,
    title: "Retiro de Producto",
    text: "Retiro seguro de acrílico, rubber o gel",
    image: "/nc-beauty-studio/images/retiro.jpg",
    price: 50,
  },
  {
    id: 8,
    title: "Maquillaje Social",
    text: "Maquillaje profesional + peinado",
    image: "/nc-beauty-studio/images/maquillaje.jpg",
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
              <h4>Productos Premium</h4>
              <p>Utilizamos materiales de alta calidad.</p>
            </div>

            <div className="col-md-3 benefit">
              <h4>Ambiente Relajante</h4>
              <p>Un espacio diseñado para tu bienestar.</p>
            </div>

            <div className="col-md-3 benefit">
              <h4>Diseños Personalizados</h4>
              <p>Arte único adaptado a tu estilo.</p>
            </div>

            <div className="col-md-3 benefit">
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
                src="https://images.unsplash.com/photo-1604654894610-df63bc536371"
                className="gallery-img"
              />
            </div>

            <div className="col-md-3">
              <img
                src="https://images.unsplash.com/photo-1607779097040-26e80aa78e66"
                className="gallery-img"
              />
            </div>

            <div className="col-md-3">
              <img
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348"
                className="gallery-img"
              />
            </div>

            <div className="col-md-3">
              <img
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
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
                src="/nc-beauty-studio/images/nc-cibrian.jpg"
                className="about-img"
              />
            </div>

            <div className="col-md-6">
              <h2 className="section-title">Sobre mí</h2>

              <p>
                Hola, soy <strong>Nayeli Cibrian</strong>, con más de 5 años de
                experiencia en el cuidado y arte de las uñas.
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
            <div className="col-md-4 testimonial">
              <p>"El mejor servicio de uñas que he probado."</p>
              <strong>Mariana R.</strong>
            </div>

            <div className="col-md-4 testimonial">
              <p>"Diseños hermosos y atención increíble."</p>
              <strong>Ana P.</strong>
            </div>

            <div className="col-md-4 testimonial">
              <p>"Siempre salgo feliz con mis uñas."</p>
              <strong>Sofía L.</strong>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}

      <section className="cta-section text-center">
        <div className="container">
          <h2>Consiéntete</h2>

          <p>Agenda tu cita y vive una experiencia de belleza única.</p>

          <a href="https://wa.me/523421029554" className="btn cta-btn">
            Reservar por WhatsApp
          </a>
        </div>
      </section>
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
                src="/nc-beauty-studio/images/instagram_1.jpg"
                className="insta-img"
              />
            </div>

            <div className="col-md-3 col-6">
              <img
                src="/nc-beauty-studio/images/instagram_2.jpg"
                className="insta-img"
              />
            </div>

            <div className="col-md-3 col-6">
              <img
                src="/nc-beauty-studio/images/instagram_3.jpg"
                className="insta-img"
              />
            </div>

            <div className="col-md-3 col-6">
              <img
                src="/nc-beauty-studio/images/instagram_4.jpg"
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
