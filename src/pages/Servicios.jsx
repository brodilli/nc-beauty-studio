import "../styles/servicios.css";
const Servicios = () => {
  return (
    <div className="container mt-5">
      <h1>Servicios</h1>
      <p>Descubre nuestros tratamientos de manicure, pedicure y nail art.</p>
      {/* MENU DE PRECIOS */}

      <section className="pricing-section">
        <div className="container">
          <h2 className="section-title text-center mb-5">Menú de Servicios</h2>

          <div className="row g-4">
            {/* ESCULTURALES */}
            <div className="col-md-4">
              <div className="price-card">
                <h4>Uñas Esculturales</h4>

                <div className="price-item">
                  <span>Largo 1-2 + Esmaltado</span>
                  <span>$300</span>
                </div>

                <div className="price-item">
                  <span>Largo 3</span>
                  <span>$350</span>
                </div>

                <div className="price-item">
                  <span>Largo 4</span>
                  <span>$400</span>
                </div>
                <div className="price-item">
                  <p className="price-desc">
                    *El costo de las uñas incluye un color liso. Efectos,
                    accesorios diseños, etc, tienen costo extra
                  </p>
                </div>
                <div className="price-item">
                  <p className="price-desc">
                    *Los precios incluyen manicura y espaltado profundo
                  </p>
                </div>

                <div className="price-item">
                  <span>Reposición de uña</span>
                  <span>$25</span>
                </div>
              </div>
            </div>

            {/* RUBBER */}
            <div className="col-md-4">
              <div className="price-card">
                <h4>Rubber Balance</h4>

                <div className="price-item">
                  <span>En uña natural Diseño sencillo en color</span>
                  <span>$300</span>
                </div>

                <hr />

                <h5>Complementos</h5>
                <p className="price-desc">(Precio por todas las uñas)</p>
                <div className="price-item">
                  <span>French</span>
                  <span>+$50</span>
                </div>
                <div className="price-item">
                  <span>Efecto espejo</span>
                  <span>+$50</span>
                </div>
                <div className="price-item">
                  <span>Ojo de gato</span>
                  <span>+$50</span>
                </div>
                <div className="price-item">
                  <span>Carey</span>
                  <span>+$80</span>
                </div>
                <div className="price-item">
                  <span>Relieves</span>
                  <span>+$50</span>
                </div>
                <div className="price-item">
                  <span>Baby boomer</span>
                  <span>+$50</span>
                </div>
                <div className="price-item">
                  <span>Cristales (precio por unidad)</span>
                  <span>+$2</span>
                </div>
              </div>
            </div>

            {/* TECNICA HIBRIDA */}
            <div className="col-md-4">
              <div className="price-card">
                <h4>Técnica Híbrida</h4>
                <p className="price-desc">(Extensión con polygel con sellado con ruber).</p>
                <div className="price-item">
                  <span>Largo 1-2 (color sólido)</span>
                  <span>$400</span>
                </div>

                <hr />

                <h4>Pedicure</h4>

                <div className="price-item">
                  <span>Pedi Spa</span>
                  <span>$400</span>
                </div>
                <p className="price-desc">
                  (Remojo de pies en sales minerales o efervescentes, limpieza
                  de cutícula, limado y corte de uñas adecuado, limado de
                  callitos e impurezas exfoliación con masaje, mascarilla
                  refrescante y blanqueadora, terminado en gel semipermanente de
                  un color, (diseño +$), crema humectante e hidratante).
                </p>
              </div>
            </div>
          </div>

          {/* segunda fila */}

          <div className="row g-4 mt-2">
            <div className="col-md-4">
              <div className="price-card">
                <h4>Retoque de uñas Acrílicas</h4>

                <p className="price-desc">Retoque
                El tiempo recomendado para tomar en cuenta el retoque es 3 semanas, uñas completas, (reposición de uña tiene costo extra).
                </p>

                <div className="price-item">
                  <span>Color sólido</span>
                  <span>$300</span>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="price-card">
                <h4>Gel Semipermanente</h4>

                <div className="price-item">
                  <span>Manos (color Sólido).</span>
                  <span>$200</span>
                </div>

                <div className="price-item">
                  <span>Pies (color Sólido).</span>
                  <span>$200</span>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="price-card">
                <h4>Retiro</h4>

                <div className="price-item">
                  <span>Uñas acrílicas</span>
                  <span>$100</span>
                </div>
                <div className="price-item">
                  <span>Rubber</span>
                  <span>$100</span>
                </div>
                <div className="price-item">
                  <span>Gel semipermanente</span>
                  <span>$50</span>
                </div>
                <p className="price-desc">
                    *Retiros en aplicación hecha en @nayeli_cibrian.
                </p>
              </div>
            </div>
            <div className="col-md-8">
              <div className="price-card">
                

                <div className="price-item">
                  <h4>MAQUILLAJE SOCIAL + ONDAS O PLANCHADO</h4>
                  <span>$750</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicios;
