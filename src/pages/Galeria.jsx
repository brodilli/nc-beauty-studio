import { useState } from "react";
import "../styles/galeria.css";

const images = [
  "https://images.unsplash.com/photo-1604654894610-df63bc536371",
  "https://images.unsplash.com/photo-1604654894610-df63bc536371",
  "https://images.unsplash.com/photo-1604654894610-df63bc536371",
  "https://images.unsplash.com/photo-1604654894610-df63bc536371",
  "https://images.unsplash.com/photo-1604654894610-df63bc536371",
  "https://images.unsplash.com/photo-1604654894610-df63bc536371",
  "https://images.unsplash.com/photo-1604654894610-df63bc536371",
  "https://images.unsplash.com/photo-1604654894610-df63bc536371"
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
        <div
          className="modal"
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage} alt="Diseño ampliado" />
        </div>
      )}
    </div>
  );
}

export default Galeria;