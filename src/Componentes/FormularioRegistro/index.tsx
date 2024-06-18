// FormularioRegistro.tsx
import React from 'react';
import './estilos.css'; 

interface FormularioRegistroProps {
    formData: { nombre: string, email: string, password: string };
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const FormularioRegistro: React.FC<FormularioRegistroProps> = ({ formData, handleInputChange, handleFormSubmit }) => {
    return (
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
    );
};

export default FormularioRegistro;
