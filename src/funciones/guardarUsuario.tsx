// GuardarUsuario.ts
export async function GuardarUsuario(userId: string, nombre: string, email: string, telefono: string = '', fechaNacimiento: string = '1990-01-01T00:00:00.000Z', fotoPerfil: string = 'https://example.com/profile.jpg'): Promise<void> {
  const apiUrl = 'https://glampingapi.onrender.com/usuarios/';

  const datosUsuario = {
    id: userId,
    nombre: nombre,
    email: email,
    telefono: telefono,
    fecha_nacimiento: fechaNacimiento,
    foto_perfil: fotoPerfil,
    metodo_pago: 'Visa',
    es_anfitrion: false
  };

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datosUsuario)
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      console.error('Detalles del error del servidor:', errorResponse);
      if (errorResponse.detail === 'El usuario ya existe') {
        throw new Error('El usuario ya existe');
      }
      throw new Error('Error al guardar el usuario');
    }

    console.log('Usuario guardado correctamente');

  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error al guardar el usuario:', error.message);
      throw error;
    } else {
      console.error('Error inesperado al guardar el usuario');
      throw new Error('Error inesperado al guardar el usuario');
    }
  }
}
