import './estilos.css'
import { Link } from 'react-router-dom';
import { AiTwotoneHeart } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useContext } from 'react';
import { ContextoGlamping } from '../../Contexto/index'

const Tarjeta = (data: any) => {

  const almacenVar = useContext(ContextoGlamping)

  const irInfoGlamping = (infoGlamping: any) =>{
    almacenVar?.setGlampingSeleccionado(infoGlamping)
  }

  return (
    <div className="contenedorTarjeta">

      <figure className='contenedorImagen'>
        
        <Link to="/InfoGlamping">
        
        <img
         className='foto'
         src={data.data.image}
         alt={data.data.title}
         onClick={() =>
          {almacenVar?.cerrarAlgo();
          irInfoGlamping(data.data);
          }}
        />

        </Link>

        <div className='favorito'>
          <AiTwotoneHeart/>
        </div>

        {/* Flecha para desplazar a izquierda iconos */}
        <div className="flecha-izquierda-foto" >
              <MdOutlineKeyboardArrowLeft />
        </div>

        {/* Flecha para desplazar a derecha fotos */}
        <div className="flecha-derecha-foto" >
              <MdOutlineKeyboardArrowRight />
        </div>
        
      </figure>
      <p className='informacion'>
        
        <div className='informacionSuperior'>
        <span>{data.data.title.substring(0, 35)}</span>
        <span><FaStar />{data.data.puntuacion}</span>
        </div>

        <div className='informacionMedia'>
        <span>a {data.data.distancia} Km</span>
        <span>{data.data.date}</span>
        </div>
        
        <div className='informacionBaja'>
          <span>${data.data.price}</span>
        </div>
        
      </p>
    </div>
    
  );
};

export default Tarjeta;