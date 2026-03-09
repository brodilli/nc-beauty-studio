import BeautyCard from "../components/BeautyCard"
import '../styles/home.css'
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
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="services-section">
        <div className="container">

          <h2 className="section-title text-center mb-5">
            Servicios
          </h2>

          <div className="row">

            <BeautyCard
              title="Manicure"
              text="Cuidado completo para tus manos con acabados elegantes y duraderos."
              image="https://images.unsplash.com/photo-1604654894610-df63bc536371"
            />

            <BeautyCard
              title="Pedicure"
              text="Relajación y estética para tus pies con tratamientos premium."
              image="https://images.unsplash.com/photo-1596462502278-27bfdc403348"
            />

            <BeautyCard
              title="Nail Art"
              text="Diseños creativos y personalizados para expresar tu estilo."
              image="https://images.unsplash.com/photo-1607779097040-26e80aa78e66"
            />

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
                alt="Nail Artist"
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
                creativos. Mi pasión es hacerte sentir hermosa, uña por uña.
              </p>

              <p>
                Me especializo en diseños intrincados y tratamientos saludables
                para uñas que promueven el crecimiento natural.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="cta-section text-center">
        <div className="container">
          <h2>Consiéntete</h2>
          <p>Agenda tu cita y vive una experiencia de belleza única.</p>
        </div>
      </section>

    </div>
  )
}

export default Home