import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Home/index';
import Favoritos from '../Favoritos/index';
import Propietarios from '../Propietarios/index';
import Registro from '../Registro/index';
import Usuarios from '../Usuarios/index';
import InfoGlamping from '../InfoGlamping/index';
import NoEncontrado from '../NoEncontrado/index';
import { ProveedorVariables } from '../../Contexto/index';
import './App.css';

const App = () => {
  return (
    // Encerramos todo en el ProveedorVariables para que puedan acceder a ellas
    <ProveedorVariables 
      hijo={
        <Router basename="/glampingPage">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Favoritos" element={<Favoritos />} />
            <Route path="/Propietarios" element={<Propietarios />} />
            <Route path="/Registro" element={<Registro />} />
            <Route path="/Usuarios" element={<Usuarios />} />
            <Route path="/InfoGlamping" element={<InfoGlamping />} />
            <Route path="/*" element={<NoEncontrado />} />
          </Routes>
        </Router>
      } 
    />
  )
}

export default App;
