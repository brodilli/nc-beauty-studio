import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import "../styles/carrito.css"

function Carrito() {

  const { cart, removeFromCart } = useContext(CartContext)

  const total = cart.reduce((acc, item) => acc + item.price, 0)

  const sendWhatsApp = () => {

    const message = cart
      .map(item => `• ${item.name} - $${item.price}`)
      .join("%0A")

    const text = `Hola! Quiero reservar los siguientes servicios:%0A%0A${message}%0A%0ATotal: $${total}`

    const phone = "523421029554"

    window.open(`https://wa.me/${phone}?text=${text}`, "_blank")
  }

  return (
    <div className="container carrito-page">

      <h1 className="carrito-title">
        Tu selección de servicios
      </h1>

      {cart.length === 0 ? (

        <p className="empty-cart">
          No has agregado servicios aún.
        </p>

      ) : (

        <>

          <div className="cart-list">

            {cart.map((item, index) => (

              <div key={index} className="cart-item">

                <div>

                  <h5>{item.name}</h5>
                  <p>${item.price}</p>

                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Eliminar
                </button>

              </div>

            ))}

          </div>

          <div className="cart-total">

            <h4>Total: ${total}</h4>

            <button
              className="whatsapp-checkout"
              onClick={sendWhatsApp}
            >
              Reservar por WhatsApp
            </button>

          </div>

        </>

      )}

    </div>
  )
}

export default Carrito