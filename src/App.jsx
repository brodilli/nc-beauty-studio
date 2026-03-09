import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import Servicios from "./pages/Servicios"
import Galeria from "./pages/Galeria"
import Contacto from "./pages/Contacto"

import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </>
  )
}

export default App