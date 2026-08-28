import { Routes, Route } from "react-router-dom";
import { Articulos } from "./assets/ARTICULOS/Articulos.jsx";
import { Hero } from "./assets/HERO/Hero.jsx";
import { Navbar } from "./assets/Navbar/Navbar.jsx";
import { Rosarios } from "./assets/ARTICULOS/Rosario.jsx";
import { Galeria } from "./assets/GALERIA/Galeria.jsx";
import { Nosotros } from "./assets/NOSOTROS/Nosotros.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/articulos" element={<Articulos />} />
        <Route path="/rosarios" element={<Rosarios />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
    </>
  );
}

export default App;