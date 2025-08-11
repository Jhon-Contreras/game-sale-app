import { useState, useEffect } from "react";

// LOGICA SCROLL BACKGROUND
// Este hook captura el desplazamiento vertical de la ventana y lo devuelve
export default function useScrollOffset() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);

    window.addEventListener("scroll", handleScroll);
    // Limpieza al desmontar
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return offsetY;
}
