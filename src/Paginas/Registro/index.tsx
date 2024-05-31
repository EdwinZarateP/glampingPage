import { GoogleLogin, CredentialResponse } from '@react-oauth/google' 
import { jwtDecode } from "jwt-decode"
import { useState, useEffect  } from 'react'
import Confetti from 'react-confetti'


function Registro() {
    const [usuario, setUsuario] = useState<string | null>(null)
    const [mostrarConfeti, setMostrarConfeti] = useState(false)

    const handleSuccess = (credentialResponse: CredentialResponse | undefined) => {
        if (credentialResponse?.credential) {
            const decoded: any = jwtDecode(credentialResponse.credential)
            const nombreUsuario: string = decoded.name // Asumiendo que el nombre está en el token JWT
            setUsuario(nombreUsuario)
            setMostrarConfeti(true) // Mostrar el confeti al autenticarse correctamente
        } else {
            console.log('No se recibió el credencial')
        }
    }

    useEffect(() => {
        if (mostrarConfeti) {
            const timeout = setTimeout(() => {
                setMostrarConfeti(false) // Ocultar el confeti después de 3 segundos
            }, 3000)

            return () => clearTimeout(timeout)
        }
    }, [mostrarConfeti])

    return (
        <div>
            <h2>Regístrate con tu cuenta de Google</h2>
            <span>
                <GoogleLogin
                    onSuccess={handleSuccess}
                    onError={() => {
                        console.log('Login Failed')
                    }}
                />
            </span>
            {usuario && (
                <div>
                    <p>Bienvenido, {usuario}!</p>
                    {mostrarConfeti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
                </div>
            )}
        </div>
    )
}

export default Registro