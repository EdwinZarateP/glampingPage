import { useContext } from 'react';
import { ContextoGlamping } from '../../Contexto/index';
import './estilos.css';
import { IoCloseSharp } from "react-icons/io5";

const RegistroIngreso = () => {
  const almacenVar = useContext(ContextoGlamping);

  return (
    <aside className={`contenedorIngresoRegistro ${almacenVar?.estaAbiertoAlgo ? 'abierto' : 'cerrado'}`}>
      <button className="close-button" onClick={almacenVar?.cerrarAlgo}><IoCloseSharp /></button>
      <ul className="list">
        <li className="list-item"><a href="/glampingPage/Usuarios">Iniciar Sesión</a></li>
        <li className="list-item"><a href="/glampingPage/Registro">Regístrate</a></li>
        <li className="list-item"><a href="/glampingPage/Registro">Ofrece tu Glamping</a></li>
      </ul>
    </aside>
  );
};

export default RegistroIngreso;
