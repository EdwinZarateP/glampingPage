import React, { useState, useEffect } from 'react';
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import Confetti from 'react-confetti';
import './estilos.css';

interface GoogleRegistroProps {
    onLoginSuccess: (usuario: { nombre: string, email: string, userId: string }) => void;
}

const GoogleRegistro: React.FC<GoogleRegistroProps> = ({ onLoginSuccess }) => {
    const [mostrarConfeti, setMostrarConfeti] = useState(false);

    const handleSuccess = (credentialResponse: CredentialResponse | undefined) => {
        if (credentialResponse?.credential) {
            const decoded: any = jwtDecode(credentialResponse.credential);
            const nombreUsuario: string = decoded.name;
            const emailUsuario: string = decoded.email;
            const userId: string = decoded.sub;

            onLoginSuccess({ nombre: nombreUsuario, email: emailUsuario, userId });
            setMostrarConfeti(true);
        } else {
            console.log('No se recibió el credencial');
        }
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
        <div className='contenedor_login_Google'>
            <h3>Regístrate con tu cuenta de Google</h3>
            <span>
                <GoogleLogin
                    onSuccess={handleSuccess}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />
            </span>
            {mostrarConfeti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
        </div>
    );
};

export default GoogleRegistro;
