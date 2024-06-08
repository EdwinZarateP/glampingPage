import './estilos.css'
import { FaHouseFloodWater, FaUmbrellaBeach, FaTemperatureArrowUp, FaTemperatureArrowDown } from "react-icons/fa6";
import { BsTreeFill } from "react-icons/bs";
import { PiMountainsBold } from "react-icons/pi";
import { GiDesert, GiTreehouse, GiHiking } from "react-icons/gi";
import { MdCabin, MdOutlinePets } from "react-icons/md";
import { TbFilterSearch } from "react-icons/tb";
import { FaCaravan } from "react-icons/fa";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useRef } from 'react';
import { useContext } from 'react';
import { ContextoGlamping } from '../../Contexto/index'
import RegistroIngreso from "../Registro_ingreso/index"

const Filtros = () => {
    const iconos = [
        {titulo: "Playa", icono: <FaUmbrellaBeach />},
        {titulo: "Tropical", icono: <FaTemperatureArrowUp />},
        {titulo: "Clima frio", icono: <FaTemperatureArrowDown />},
        {titulo: "Naturaleza", icono: <BsTreeFill />},
        {titulo: "En la montaña", icono: <PiMountainsBold />},
        {titulo: "Desierto", icono: <GiDesert />},
        {titulo: "Pet Friend", icono: <MdOutlinePets />},
        {titulo: "Flotantes", icono: <FaHouseFloodWater />},
        {titulo: "Cabañas", icono: <MdCabin />},
        {titulo: "Casa del árbol", icono: <GiTreehouse />},
        {titulo: "Caminata", icono: <GiHiking />},
        {titulo: "Remolques", icono: <FaCaravan />},
        {titulo: "Desierto", icono: <GiDesert />},
        {titulo: "Pet Friend", icono: <MdOutlinePets />},
        {titulo: "Flotantes", icono: <FaHouseFloodWater />},
        {titulo: "Cabañas", icono: <MdCabin />},
        {titulo: "Casa del árbol", icono: <GiTreehouse />},
        {titulo: "Caminata", icono: <GiHiking />},
        {titulo: "Remolques", icono: <FaCaravan />}       
    ];

        const contenedorFiltrosListaRef = useRef<HTMLDivElement | null>(null);
    
        const handleScrollLeft = () => {
            if (contenedorFiltrosListaRef.current) {
                (contenedorFiltrosListaRef.current as HTMLDivElement).scrollBy({
                    left: -100,
                    behavior: 'smooth',
                });
            }
        };
    
        const handleScrollRight = () => {
            if (contenedorFiltrosListaRef.current) {
                (contenedorFiltrosListaRef.current as HTMLDivElement).scrollBy({
                    left: 100,
                    behavior: 'smooth',
                });
            }
        };
    
        const almacenVar = useContext(ContextoGlamping)

    return (

        <div className='contenedorFiltros'>
            <div ref={contenedorFiltrosListaRef}  className='contenedorFiltrosLista'>
            
                {/* Flecha para desplazar a izquierda iconos */}
                <div className="flecha-izquierda" onClick={handleScrollLeft}>
                    <MdOutlineKeyboardArrowLeft />
                </div>
    

                {iconos.map((elemento, index) => (
                    <div key={index} className="filtro">
                        <span>{elemento.titulo}</span>
                        <div className="icono">{elemento.icono}</div>
                    </div>
                ))}

                {/* Flecha para desplazar a izquierda iconos */}
                <div className="flecha-derecha" onClick={handleScrollRight}>
                    <MdOutlineKeyboardArrowRight />
                </div>

            </div>
            <div className='multifiltro' onClick={()=>almacenVar?.abrirFiltroAvanzado()}>
                <TbFilterSearch />       
            </div>
            <RegistroIngreso/>
        </div>
    );
};

export default Filtros;
