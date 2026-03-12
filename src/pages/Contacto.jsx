import "../styles/contacto.css";

function Contacto() {
  return (
    <section className="contact-section">

      <div className="container">

        <div className="contact-header">
          <h1>Contáctanos</h1>
          <p>
            Agenda tu cita y déjanos consentirte con un servicio de uñas profesional.
          </p>
        </div>

        <div className="row contact-wrapper">

          {/* INFO */}
          <div className="col-lg-5 contact-info">

            <h3>NC Beauty Studio</h3>

            <p>
              Atención personalizada para que vivas una experiencia de belleza
              relajante y elegante.
            </p>

            <div className="contact-item">
              📍 Sayula, Jalisco, México
            </div>

            <div className="contact-item">
              📱 WhatsApp
            </div>

            <div className="contact-item">
              📷 Instagram: @nayeli_cibrianns
            </div>

            <a
              href="https://wa.me/5210000000000"
              target="_blank"
              className="whatsapp-btn"
            >
              Reservar por WhatsApp
            </a>

          </div>


          {/* FORM */}
          <div className="col-lg-7 contact-form">

            <form>

              <div className="row">

                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="form-control"
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <input
                    type="email"
                    placeholder="Correo"
                    className="form-control"
                  />
                </div>

              </div>

              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Teléfono"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <textarea
                  rows="5"
                  placeholder="Mensaje"
                  className="form-control"
                />
              </div>

              <button className="send-btn">
                Enviar mensaje
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contacto;