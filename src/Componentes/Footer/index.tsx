import { useState, useEffect } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
// import { FaRegMessage } from "react-icons/fa6";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from 'react-router-dom';
import './estilos.css';

// Declaración de la propiedad 'data' en el objeto 'Window'
declare global {
  interface Window {
    data?: {
      scrollY: number;
    };
  }
}

const iconosfooter = [
  { titulo: "Explora", redirigir:'', icono: <FiSearch /> },
  { titulo: "Favoritos", redirigir:'Favoritos', icono: <IoIosHeartEmpty /> },
  // { titulo: "Mensajes", redirigir:'Mensajes', icono: <FaRegMessage /> },
  { titulo: "Iniciar sesión", redirigir:'Registro', icono: <AiOutlineUser /> },
];

const Footers = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    
    // Check if scrolling up or down
    setIsScrollingUp(
      currentScrollY <
        (window.data && typeof window.data.scrollY === 'number'
          ? window.data.scrollY
          : currentScrollY) || currentScrollY === 0
    );

    // Save the current scroll position for the next check
    window.data = {
      scrollY: currentScrollY,
    };
  };

  useEffect(() => {
    // Check window size and add scroll event listener if not on mobile
    const handleResize = () => {
      if (window.innerWidth > 768) {
        window.addEventListener("scroll", handleScroll);
      } else {
        setIsScrollingUp(true); // Always visible on mobile
        window.removeEventListener("scroll", handleScroll);
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Resize check

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`contenedor-Footer ${isScrollingUp ? "visible" : "oculto"}`}
    >
      <div className="contenedor-iconoFooter">
        {iconosfooter.map((elemento, index) => (
          <Link key={index} to={`/${elemento.redirigir}`}>
            <div className="iconos-footer">
              <span>{elemento.titulo}</span>
              <div className="iconoFooter">{elemento.icono}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footers;
