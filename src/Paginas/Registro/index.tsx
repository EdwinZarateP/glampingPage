import React, { useState, useEffect } from 'react';
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import Confetti from 'react-confetti';
import './estilos.css'; // Importa el archivo CSS

const Registro: React.FC = () => {
    const [usuario, setUsuario] = useState<string | null>(null);
    const [mostrarConfeti, setMostrarConfeti] = useState(false);
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        password: ''
    });

    const handleSuccess = (credentialResponse: CredentialResponse | undefined) => {
        if (credentialResponse?.credential) {
            const decoded: any = jwtDecode(credentialResponse.credential);
            const nombreUsuario: string = decoded.name;
            setUsuario(nombreUsuario);
            setMostrarConfeti(true);
        } else {
            console.log('No se recibió el credencial');
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Formulario enviado:', formData);
        setUsuario(formData.nombre);
        setMostrarConfeti(true);
    };

    useEffect(() => {
        if (mostrarConfeti) {
            const timeout = setTimeout(() => {
                setMostrarConfeti(false);
            }, 3000);

            return () => clearTimeout(timeout);
        }
    }, [mostrarConfeti]);

    return (
        <div className='contenedor_registro'>
            <div>
                <h3>Regístrate con tu cuenta de Google</h3>
                <span>
                    <GoogleLogin
                        onSuccess={handleSuccess}
                        onError={() => {
                            console.log('Login Failed')
                        }}
                    />
                </span>
            </div>
            <div className='formulario'>
                <h3>o registrate aquí</h3>
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor="nombre">Nombre:</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Contraseña:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <button type="submit">Registrarse</button>
                </form>
            </div>
            {usuario && (
                <div>
                    <p>Bienvenido, {usuario}!</p>
                    {mostrarConfeti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
                </div>
            )}
        </div>
    );
};

export default Registro;    
