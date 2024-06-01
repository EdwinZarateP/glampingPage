import Footer from '../../Componentes/Footer/index';
import { useState, useEffect } from 'react';
import RegistrarUsuario from '../../Componentes/Formulario_Registro/index'

interface Usuario {
  id: string;
  nombre: string;
  email: string;
  telefono: string;
  fecha_nacimiento: string;
  foto_perfil: string;
  metodo_pago: string;
  es_anfitrion: boolean;
}

function Usuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    async function obtenerUsuarios() {
      const response = await fetch("https://glampingapi.onrender.com/usuarios");
      const usuarios = await response.json();
      setUsuarios(usuarios);
    }
    obtenerUsuarios();
  }, []);

  return (
    <div>
      <RegistrarUsuario/>
      <h1>Usuarios</h1>
      {usuarios.map(usuario => {
        return (
          <div key={usuario.id}>
            <p>{usuario.nombre}</p>
          </div>
        );
      })}
      <Footer/>      
    </div>
  );
}

export default Usuarios;
