async function GuardarUsuario(userId: string, nombre: string, email: string): Promise<void> {
  const apiUrl = 'https://glampingapi.onrender.com/usuarios/';

  // Datos a enviar a la API
  const datosUsuario = {
    id: userId,
    nombre: nombre,
    email: email,
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
      throw new Error('Error al guardar el usuario');
    }

    console.log('Usuario guardado correctamente');
    // Puedes manejar cualquier lógica adicional aquí después de que se guarde correctamente
  } catch (error) {
    const errorObj = error as Error; // Type assertion
    console.error('Error al guardar el usuario:', errorObj.message);
    // Puedes manejar el error de alguna manera apropiada, como mostrar un mensaje al usuario
    throw errorObj; // Opcionalmente, puedes volver a lanzar el error después de manejarlo
  }
}
