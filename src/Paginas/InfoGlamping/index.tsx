import Footer from '../../Componentes/Footer/index'
import NavBar from '../../Componentes/NavBar/index'
import { useContext } from 'react';
import { ContextoGlamping } from '../../Contexto/index'
import { FiShare } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { IoMdPhotos } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import './estilos.css'

function InfoGlamping () {
  
  const almacenVar = useContext(ContextoGlamping)

  return (
    <div className="contenedorInfoGlamping">
      
      <div className='navBar'>

      <NavBar/>

      </div>

      {/* Cuadro emergente donde se muestra la descripcion del lugar */}
      
      <div className={almacenVar?.estaAbiertoAlgo ? 'fondoContenDescrOpen' : 'fondoContenDescrClose'}>
        <div className={almacenVar?.estaAbiertoAlgo ? 'contenedorDescripcionOpen' : 'contenedorDescripcionClose'}>
          <div>

            <IoCloseSharp 
            className='contenedorDescripcionSuperior'
            onClick={() => {
              almacenVar?.cerrarAlgo();
            }}/>

            <h3 className='contenedorDescripcionSuperior'>Descripción</h3>  
          </div>

          <div className='contenedorDescripcionInferior'>
            {almacenVar?.glampingSeleccionado.descripcion}
          </div>
        </div>
      
      </div>

      {/* Cuadro emergente donde se muestra las reglas */}
      
      <div className={almacenVar?.estaAbiertoAlgo2 ? 'fondoContenReglasOpen' : 'fondoContenReglasClose'}>
        <div className={almacenVar?.estaAbiertoAlgo2 ? 'contenedorReglasOpen' : 'contenedorReglasClose'}>
          <div>

            <IoCloseSharp 
            className='contenedorReglasSuperior'
            onClick={() => {
              almacenVar?.cerrarAlgo2();
            }}/>

            <h3 className='contenedorReglasSuperior'>Reglas del lugar</h3>  
          </div>

          <div className='contenedorReglasInferior'>
            {almacenVar?.glampingSeleccionado.anfitrion}
          </div>
        </div>
      
      </div>
      
      {/* Creamos la informacion del Glamping seleccionado total */}
      
      <div className='contenedorDetalleGlamping'>
        
        {/* ------------------PARTE SUPERIOR------------- */}

        <div className='nombreGlampingSuperior'>
            <h1>{almacenVar?.glampingSeleccionado.title.substring(0, 35)}</h1>
        </div>
          
        <div className='barraSuperior'>

          <div className='ubicacionSuperior'><SlLocationPin/> {almacenVar?.glampingSeleccionado.ciudad} </div>
          
          <div className='barraSuperiorDerecha'>
            <div className='contenedorInfoBarraSuperior'><FiShare/> <span> Compartir </span></div>
            <div className='contenedorInfoBarraSuperior'><FaHeart/> <span> Guardar </span></div>
          </div>
          
        </div>
        
        <div className='barraMedia'>
          
          <div className='contenedorFotoDetalleMax'>
          <Link to="/">
            <div className='iconoRegresar'> <MdOutlineKeyboardArrowLeft/></div> 
          </Link>
             
            <img 
            className='FotoDetalleMax'
            src={almacenVar?.glampingSeleccionado.image}
            alt={almacenVar?.glampingSeleccionado.title} />
            <div className='compartirFotoDetalleMax'> <FiShare/> </div> 
            <div className='favoritoFotoDetalleMax'> <FaHeart/> </div> 
            
            <div className='totalFotos'><IoMdPhotos style={{ marginRight: '8px' }}/> 23 Fotos</div>
          </div>

          {/* ------------------IMAGENES------------- */}
          <div>
            <div className='contenedorImagenes'>
              <div><img className='fotoDetalle' src={almacenVar?.glampingSeleccionado.image} alt={almacenVar?.glampingSeleccionado.title} /></div>
              <div><img className='fotoDetalle' src={almacenVar?.glampingSeleccionado.image} alt={almacenVar?.glampingSeleccionado.title} /></div>
              <div><img className='fotoDetalle' src={almacenVar?.glampingSeleccionado.image} alt={almacenVar?.glampingSeleccionado.title} /></div>
              <div><img className='fotoDetalle' src={almacenVar?.glampingSeleccionado.image} alt={almacenVar?.glampingSeleccionado.title} /></div>
              <div><img className='fotoDetalle' src={almacenVar?.glampingSeleccionado.image} alt={almacenVar?.glampingSeleccionado.title} /></div>            
              <div className='totalFotos'><IoMdPhotos style={{ marginRight: '8px' }}/> 23 Fotos</div>
            </div>

            {/* ------------------INFORMACION GENERAL------------- */}

            <div className='nombreGlampingInferior'>
              <h2>{almacenVar?.glampingSeleccionado.title.substring(0, 35)}</h2>
              <span><SlLocationPin/> {almacenVar?.glampingSeleccionado.ciudad}</span>
            </div>

          </div>

          <div className='contenedorInformacionYFiltros'>
            
            <div className='contenedorInformacion'>
              
              <h2>{almacenVar?.glampingSeleccionado.title.substring(0, 35)}</h2>
              
              {/* ------------------------descripcion Lugar---------------------------- */}
              <div className='descripcionLugar'>
                <h3>Acerca de este lugar</h3>
                <p className='descripcionLugarAbierto'>{almacenVar?.glampingSeleccionado.descripcion}</p>          

                <span
                  className='botonAbrirInfo'
                  onClick={() => almacenVar?.abrirAlgo()}>
                  Mostrar mas 
                </span>

              </div>

              {/* ------------------------anfitrion---------------------------- */}
              <div className='anfitrion'>
                
                <div><img className='fotoAnfitrion' src={almacenVar?.glampingSeleccionado.image} alt={almacenVar?.glampingSeleccionado.title} /></div>
                <div>
                  <h4>Anfitrion: {almacenVar?.glampingSeleccionado.anfitrion}</h4>
                  <p>3 años de experiencia</p>
                </div>
                

              </div>

              {/* ------------------------Amenidades---------------------------- */}
              <div className='amenidades'>
                <h3>Lo que ofrece este lugar</h3>
                <span>Capacidad: {almacenVar?.glampingSeleccionado.capacidad} huespedes</span>
                <span>Baño privado:  { almacenVar?.glampingSeleccionado.bano===1 ? 'Si':'No'}</span>
              </div>
              
              {/* --------------------Reglas de la casa-------------------------- */}
              <div className='reglas'>
                <h3>Reglas de la casa</h3>
                <p className='descripcionReglasAbierto'>{almacenVar?.glampingSeleccionado.descripcion}</p>          

                <span
                  className='botonAbrirReglas'
                  onClick={() => almacenVar?.abrirAlgo2()}>
                  Mostrar mas 
                </span>

              </div>

              
          
            </div>

            <div className='contenedorFiltrosViaje'>
            
              Aqui van los filtros de viaje

              $precios
              y fechas
          
            </div>
            
          </div>  
          
        </div>

      </div>
      
      <Footer/>
    </div>
  );
};

export default InfoGlamping;
