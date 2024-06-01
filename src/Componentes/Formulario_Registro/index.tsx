// NuevoUsuario.tsx
import { useState } from 'react';
import './estilos.css'

const NuevoUsuario = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [fotoPerfil, setFotoPerfil] = useState('');
  const [metodoPago, setMetodoPago] = useState('');
  const [esAnfitrion, setEsAnfitrion] = useState(false);

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const nuevoUsuario = {
      nombre,
      email,
      telefono,
      fecha_nacimiento: fechaNacimiento,
      foto_perfil: fotoPerfil,
      metodo_pago: metodoPago,
      es_anfitrion: esAnfitrion,
    };

    try {
      const response = await fetch('https://glampingapi.onrender.com/usuarios/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoUsuario),
      });

      if (!response.ok) {
        throw new Error('Error al crear nuevo usuario');
      }

      alert('Usuario creado exitosamente!');
      // Aquí podrías redirigir o realizar otras acciones después de crear el usuario correctamente
    } catch (error) {
      console.error('Error al crear usuario:', error);
      alert('Hubo un error al crear el usuario. Por favor, intenta nuevamente.');
    }
  };

  return (
    <div className="nuevo-usuario-container">
      <h2>Crear Nuevo Usuario</h2>
      <form onSubmit={handleFormSubmit} className="nuevo-usuario-form">
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label htmlFor="telefono">Teléfono:</label>
        <input type="tel" id="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />

        <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
        <input
          type="date"
          id="fechaNacimiento"
          value={fechaNacimiento}
          onChange={(e) => setFechaNacimiento(e.target.value)}
          required
        />

        <label htmlFor="fotoPerfil">Foto de Perfil (URL):</label>
        <input type="url" id="fotoPerfil" value={fotoPerfil} onChange={(e) => setFotoPerfil(e.target.value)} />

        <label htmlFor="metodoPago">Método de Pago:</label>
        <input type="text" id="metodoPago" value={metodoPago} onChange={(e) => setMetodoPago(e.target.value)} />

        <label htmlFor="esAnfitrion">Es Anfitrión:</label>
        <input
          type="checkbox"
          id="esAnfitrion"
          checked={esAnfitrion}
          onChange={(e) => setEsAnfitrion(e.target.checked)}
        />

        <button type="submit">Crear Usuario</button>
      </form>
    </div>
  );
};

export default NuevoUsuario;
