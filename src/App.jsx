import { Routes, Route } from "react-router-dom";
import { Articulos } from "./assets/ARTICULOS/Articulos.jsx";
import { Hero } from "./assets/HERO/Hero.jsx";
import { Navbar } from "./assets/Navbar/Navbar.jsx";
import { Rosarios } from "./assets/ARTICULOS/Rosario.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/articulos" element={<Articulos />} />
        <Route path="/rosarios" element={<Rosarios />} />
      </Routes>
    </>
  );
}

export default App;