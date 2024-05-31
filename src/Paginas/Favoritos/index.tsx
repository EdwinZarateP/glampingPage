import { Link } from 'react-router-dom'
import Footer from '../../Componentes/Footer/index'

function Favoritos () {
    return (
        <div className="bg-red-400">    
            <Link to="/">
                Favoritos
            </Link>
            <Footer/>
        </div>
    );
};

export default Favoritos;