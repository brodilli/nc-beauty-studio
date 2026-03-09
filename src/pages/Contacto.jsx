
function Contacto() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Contacto</h1>
      <p>Agenda tu cita o contáctanos para más información.</p>

      <div style={{ marginTop: "30px" }}>
        <h3>Teléfono / WhatsApp</h3>
        <a
          href="https://wa.me/5210000000000"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: "10px",
            padding: "10px 20px",
            background: "#25D366",
            color: "white",
            textDecoration: "none",
            borderRadius: "5px",
          }}
        >
          Enviar mensaje por WhatsApp
        </a>
      </div>

      <div style={{ marginTop: "30px" }}>
        <h3>Instagram</h3>
        <a
          href="https://instagram.com/nayeli_cibrianns"
          target="_blank"
          rel="noopener noreferrer"
        >
          @nayeli_cibrianns
        </a>
      </div>

      <div style={{ marginTop: "40px" }}>
        <h3>Envíanos un mensaje</h3>

        <form
          style={{
            maxWidth: "400px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <input type="text" placeholder="Nombre" required />
          <input type="email" placeholder="Correo" required />
          <textarea placeholder="Mensaje" rows="4" required />
          <button
            type="submit"
            style={{
              padding: "10px",
              background: "#000",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contacto;