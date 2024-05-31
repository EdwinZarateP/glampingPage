import { RouterProvider, createHashRouter } from 'react-router-dom';
import Home from '../Home/index'
import Favoritos from '../Favoritos/index'
import Propietarios from '../Propietarios/index'
import Registro from '../Registro/index'
import Usuarios from '../Usuarios/index'
import InfoGlamping from '../InfoGlamping/index'
import NoEncontrado from '../NoEncontrado/index'
import { ProveedorVariables } from '../../Contexto/index'
import './App.css'

const rutas = createHashRouter([
    { path: '/', element: <Home /> },
    { path: '/Favoritos', element: <Favoritos /> },
    { path: '/Propietarios', element: <Propietarios /> },
    { path: '/Registro', element: <Registro /> },
    { path: '/Usuarios', element: <Usuarios /> },
    { path: '/InfoGlamping', element: <InfoGlamping /> },
    { path: '/*', element: <NoEncontrado /> }
  ]);

const App = () => {
  return (
    //Encerramos todo en el ProveedorVariables para que puedan acceder a ellas
    <ProveedorVariables 
    hijo={ 
      <>
      <RouterProvider router={rutas} />
      </>
     } 
    
    />

  )
}

export default App
