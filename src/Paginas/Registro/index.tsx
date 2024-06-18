
import React, { useContext } from 'react';
import GoogleRegistro from '../../Componentes/loginGoogle';
import FormularioRegistro from '../../Componentes/FormularioRegistro';
import Footer from '../../Componentes/Footer/index';
import { ContextoGlamping } from '../../Contexto';
// import { GuardarUsuario } from './funcionGuardarUsuario';
import './estilos.css';

const Registro: React.FC = () => {
    const almacenVar = useContext(ContextoGlamping);

    const handleLoginSuccess = (usuario: { nombre: string, email: string, userId: string }) => {
        almacenVar?.setUsuario(usuario);
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
            almacenVar.setUsuario({
                nombre: almacenVar.formData.nombre,
                email: almacenVar.formData.email,
                userId: '' 
            });
        }
    };

    return (
        <div className='contenedor_registro'>
            <GoogleRegistro onLoginSuccess={handleLoginSuccess} />
            <FormularioRegistro
                formData={almacenVar?.formData || { nombre: '', email: '', password: '' }}
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
            />
            {almacenVar?.usuario && (
                <div>
                    <p>Bienvenido, {almacenVar.usuario.nombre}</p>
                    <p>Email: {almacenVar.usuario.email}</p>
                    <p>cod: {almacenVar.usuario.userId}</p>
                </div>
            )}
            <Footer />
        </div>
    );
};

export default Registro;
