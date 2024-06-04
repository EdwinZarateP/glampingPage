import React from 'react';
import './estilos.css'

interface BotonProps {
  descripcion: string;
}

const Boton: React.FC<BotonProps> = ({ descripcion }) => {

  return (
    <div>
      <button className='Boton'><span>{descripcion}</span></button>
    </div>
  );
};

export default Boton;
