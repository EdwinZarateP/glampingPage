import React, { useContext, useState } from 'react';
import GoogleRegistro from '../../Componentes/loginGoogle';
import FormularioRegistro from '../../Componentes/FormularioRegistro';
import Footer from '../../Componentes/Footer/index';
import { ContextoGlamping } from '../../Contexto';
import { GuardarUsuario } from '../../funciones/guardarUsuario';
import MostrarConfeti from '../../funciones/confeti'; // Ajustar la ruta si es necesario
import './estilos.css';

const Registro: React.FC = () => {
    const almacenVar = useContext(ContextoGlamping);
    const [errorMensaje, setErrorMensaje] = useState<string | null>(null);
    const [usuarioExistente, setUsuarioExistente] = useState<boolean>(false);
    const [mostrarConfeti, setMostrarConfeti] = useState<boolean>(false); // Estado para controlar el confeti

    const handleLoginSuccess = async (usuario: { nombre: string, email: string, userId: string }) => {
        const telefono = ''; // Valor predeterminado para el teléfono
        const fecha_nacimiento = '1990-01-01T00:00:00.000Z'; // Valor predeterminado para la fecha de nacimiento
        const foto_perfil = 'https://example.com/profile.jpg'; // Valor predeterminado para la foto de perfil

        almacenVar?.setUsuario(usuario);
        console.log('Datos del usuario al iniciar sesión:', usuario);

        try {
            await GuardarUsuario(usuario.userId, usuario.nombre, usuario.email, telefono, fecha_nacimiento, foto_perfil);
            console.log('Usuario guardado en la base de datos');
            setMostrarConfeti(true); 
            setErrorMensaje(null); // Limpiar cualquier mensaje de error anterior
            setUsuarioExistente(false); // Reiniciar el estado de usuario existente
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error('Hubo un problema al guardar el usuario:', error.message);
                if (error.message === 'El usuario ya existe') {
                    setErrorMensaje('El usuario ya existe. Por favor, use otro correo electrónico.');
                    setUsuarioExistente(true); // Marcar que el usuario ya existe
                } else {
                    setErrorMensaje('Hubo un problema al guardar el usuario. Por favor, intente nuevamente.');
                    setUsuarioExistente(false); // Reiniciar el estado de usuario existente
                }
            } else {
                console.error('Error inesperado al guardar el usuario');
                setErrorMensaje('Error inesperado al guardar el usuario. Por favor, intente nuevamente.');
                setUsuarioExistente(false); // Reiniciar el estado de usuario existente
            }
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        almacenVar?.setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (almacenVar) {
            console.log('Formulario enviado:', almacenVar.formData);
            const usuario = {
                nombre: almacenVar.formData.nombre,
                email: almacenVar.formData.email,
                userId: '',
                telefono: '', // Valor predeterminado para el teléfono
                fecha_nacimiento: '1990-01-01T00:00:00.000Z', // Valor predeterminado para la fecha de nacimiento
                foto_perfil: 'https://example.com/profile.jpg' // Valor predeterminado para la foto de perfil
            };
            almacenVar.setUsuario(usuario);
        }
    };

    const handleTerminarExplosion = () => {
        setMostrarConfeti(false); // Desactivar el confeti después de la explosión
    };

    return (
        <div className='contenedor_registro'>
            <GoogleRegistro onLoginSuccess={handleLoginSuccess} />
            <FormularioRegistro
                formData={almacenVar?.formData || { nombre: '', email: '', password: '' }}
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
            />
            {errorMensaje && <p className="error">{errorMensaje}</p>}
            {!usuarioExistente && almacenVar?.usuario && (
                <div>
                    <p>Bienvenido, {almacenVar.usuario.nombre}</p>                
                </div>
            )}
            {mostrarConfeti && <MostrarConfeti mostrar={true} onTerminarExplosion={handleTerminarExplosion} />}
            <Footer />
        </div>
    );
};

export default Registro;
