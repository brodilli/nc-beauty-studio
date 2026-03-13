import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import Servicios from "./pages/Servicios"
import Galeria from "./pages/Galeria"
import Contacto from "./pages/Contacto"
import Carrito from "./pages/Carrito"
import Footer from "./components/Footer"
import { Routes, Route } from "react-router-dom"
import ScrollToTop from "./components/ScrollToTop"

function App() {
  return (
    <>
    <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App