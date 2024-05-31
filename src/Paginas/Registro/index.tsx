import { GoogleLogin, CredentialResponse } from '@react-oauth/google'; 
import { jwtDecode } from "jwt-decode";

function Registro() {
    return (
        <div>
            <h1>Continuar con Google</h1>
            <span>
                <GoogleLogin
                    onSuccess={(credentialResponse: CredentialResponse | undefined) => {
                        if (credentialResponse?.credential) {
                            const decoded = jwtDecode(credentialResponse.credential);
                            console.log(decoded);
                        } else {
                            console.log('No se recibió el credencial');
                        }
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />
            </span>
        </div>
    );
};

export default Registro;
