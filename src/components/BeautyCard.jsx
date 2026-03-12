import '../styles/BeautyCard.css'
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const BeautyCard = ({ id, title, text, image, price }) => {

  const { addToCart } = useContext(CartContext)

  const handleAdd = () => {
    addToCart({
      id,
      name: title,
      price
    })
  }

  return (
    <div className="col-md-4 mb-5">

      <div className="beauty-card">

        <div className="beauty-card-image">
          <img src={image} alt={title} />
        </div>

        <div className="beauty-card-body">

          <h5>{title}</h5>

          <p>{text}</p>

          <div className="beauty-card-footer">

            <span className="beauty-price">
              ${price}
            </span>

            <button
              className="beauty-add-btn"
              onClick={handleAdd}
            >
              Agregar
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default BeautyCard