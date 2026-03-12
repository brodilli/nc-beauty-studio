import BeautyCard from "../components/BeautyCard";
import "../styles/home.css";
import { FaInstagram } from "react-icons/fa";

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

          <a href="https://wa.me/521XXXXXXXXXX" className="btn hero-btn">
            Reservar cita
          </a>
        </div>
      </section>

      {/* SERVICIOS */}

      <section className="services-section">
        <div className="container">
          <h2 className="section-title text-center mb-5">Servicios</h2>

          <div className="row">
            <BeautyCard
              id={1}
              title="Uñas Acrílicas"
              text="Diseños personalizados y duraderos"
              image="https://images.unsplash.com/photo-1604654894610-df63bc536371"
              price={350}
            />

            <BeautyCard
              id={2}
              title="Pedicure"
              text="Relajación y estética premium para tus pies"
              image="https://images.unsplash.com/photo-1596462502278-27bfdc403348"
              price={250}
            />

            <BeautyCard
              id={3}
              title="Nail Art"
              text="Diseños creativos y personalizados"
              image="https://images.unsplash.com/photo-1607779097040-26e80aa78e66"
              price={300}
            />
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
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
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

          <a href="https://wa.me/521XXXXXXXXXX" className="btn cta-btn">
            Reservar por WhatsApp
          </a>
        </div>
      </section>
     <section className="instagram-section">

  <div className="container text-center">

    <div className="instagram-header">

      <FaInstagram className="instagram-icon"/>

      <h2 className="section-title">
        Síguenos en Instagram
      </h2>

      <p>
        Descubre nuestros últimos diseños y trabajos.
      </p>

    </div>

    <div className="row g-3 instagram-grid">

      <div className="col-md-3 col-6">
        <img
          src="https://images.unsplash.com/photo-1604654894610-df63bc536371"
          className="insta-img"
        />
      </div>

      <div className="col-md-3 col-6">
        <img
          src="https://images.unsplash.com/photo-1607779097040-26e80aa78e66"
          className="insta-img"
        />
      </div>

      <div className="col-md-3 col-6">
        <img
          src="https://images.unsplash.com/photo-1596462502278-27bfdc403348"
          className="insta-img"
        />
      </div>

      <div className="col-md-3 col-6">
        <img
          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
          className="insta-img"
        />
      </div>

    </div>

    <a
      href="https://instagram.com"
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
