import logo from '../../Imagenes/logoColor.png';
import './estilos.css';
import { useContext } from 'react';
import { ContextoGlamping } from '../../Contexto/index';
import { Link } from 'react-router-dom'; // Importa Link desde React Router
// import { BiWorld } from "react-icons/bi";
import { FiMenu, FiSearch } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { GiCampingTent } from "react-icons/gi";
import { TbFilterSearch } from "react-icons/tb";
import Boton from "../Botones/boton"

const NavBar = () => {
  const almacenVar = useContext(ContextoGlamping);

  return (
    <nav className='barNav'>
      {/* Parte Izquierda */}
      <div className="contenedorizquierdo">
        <div className="logoPrincipal">
          <img src={logo} alt="Logo" />
        </div>
        <div className="logoTienda">
          <GiCampingTent />
        </div>
      </div>

      {/* Parte media */}
      <div className='contenedorMedio'>
        <input
          className='inputmedio'
          type='search'
          placeholder='Dónde'
        />
        <div className='contenedorMedioBotones'>
          <button>Tiempo</button>
          <button>Quién cuantos</button>
        </div>
        <div className='lupaBusqueda'>
          <FiSearch />
        </div>
      </div>

      {/* Parte derecha */}
      <div className='contenedorderecho'>

        <Link to="/registro">
          <Boton descripcion="Ofrece tu Glamping" />
          {/* <BiWorld />  */}
        </Link>


        {/* Utiliza Link para envolver contenedorMenu */}
        <div className='contenedorMenu'>
          <FiMenu />
          <AiOutlineUser />
        </div>
      </div>

      {/* Parte derecha multifiltro */}
      <div className='multifiltroNav' onClick={() => almacenVar?.abrirFiltroAvanzado()}>
        <TbFilterSearch />
      </div>

    </nav>
  );
};

export default NavBar;
