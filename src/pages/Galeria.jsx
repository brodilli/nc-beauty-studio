import { useState } from "react";
import "../styles/galeria.css";

const images = [
  "/images/trabajo1.jpg",
  "/images/trabajo2.jpg",
  "/images/trabajo3.jpg",
  "/images/trabajo4.jpg",
  "/images/esculturales.jpg",
  "/images/gel.jpg",
  "/images/hibrida.jpg",
  "/images/rubber.jpg",
];

function Galeria() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Galería de Diseños</h1>
      <p className="gallery-subtitle">
        Algunos de nuestros trabajos realizados
      </p>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => setSelectedImage(img)}
          >
            <img src={img} alt="Diseño de uñas" />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Diseño ampliado" />
        </div>
      )}
    </div>
  );
}

export default Galeria;
