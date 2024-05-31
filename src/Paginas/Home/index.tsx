import NavBar from '../../Componentes/NavBar/index'
import Filtros from '../../Componentes/Filtros/index'
import Footer from '../../Componentes/Footer/index'
import Tarjeta from '../../Componentes/Tarjeta/index'
import FiltroAvanzado from '../../Componentes/FiltroAvanzado/index'
import { useState , useEffect} from 'react'
import './estilos.css'


import g1 from '../../Imagenes/g1.jpg';
import g2 from '../../Imagenes/g2.jpg';
import g3 from '../../Imagenes/g3.jpg';
import g4 from '../../Imagenes/g4.jpg';
import g5 from '../../Imagenes/g5.jpg';
import g6 from '../../Imagenes/g6.jpg';
import g7 from '../../Imagenes/g7.jpg';
import g8 from '../../Imagenes/g8.jpg';
import g9 from '../../Imagenes/g9.jpg';


  const Glampings = [
    { id: 1, title: "Terrojo", image: g4, price:317000, date:'1 enero', distancia:200, ciudad:'Villa de leyva - Boyaca', bano:0, camas:1, wifi:1,anfitrion:"Edwin Z",nevera:1, capacidad:3, puntuacion:5, descripcion:'Guatavita: Sus Hermosas casas blancas uniformes y sus recorridos laberinticos enamoran al turista; está rodeada de un hermoso paisaje y un lugar mítico y sagrado, la laguna de Guatavita, cuna de la leyenda de El Dorado. Este bello pueblo es el patrimonio arquitectónico nacional que incluso los viajeros más apurados no dejan de visitar. Sus Hermosas casas blancas uniformes y sus recorridos laberinticos enamoran al turista; está rodeada de un hermoso paisaje y un lugar mítico y sagrado, la laguna de Guatavita, cuna de la leyenda de El Dorado. Este bello pueblo es el patrimonio arquitectónico nacional que incluso los viajeros más apurados no dejan de visitar.'},
    { id: 2, title: "Bajo el Xielo", image: g2, price:100000, date:'11 enero', distancia:300, ciudad:'San Francisco - Cundinamarca', bano:1, camas:1, wifi:1,anfitrion:"Edwin Z",nevera:1, capacidad:2, puntuacion:4.5, descripcion:'Guatavita: Sus Hermosas casas blancas uniformes y sus recorridos laberinticos enamoran al turista; está rodeada de un hermoso paisaje y un lugar mítico y sagrado, la laguna de Guatavita, cuna de la leyenda de El Dorado. Este bello pueblo es el patrimonio arquitectónico nacional que incluso los viajeros más apurados no dejan de visitar.'},
    { id: 3, title: "Constelacion Glamping", image: g1, price:350000, date:'19 enero', distancia:50, ciudad:'Tota - Boyaca', bano:0, camas:1, wifi:1,anfitrion:"Edwin Z",nevera:1, capacidad:1, puntuacion:3.2,descripcion:'Guatavita: Sus Hermosas casas blancas uniformes y sus recorridos laberinticos enamoran al turista; está rodeada de un hermoso paisaje y un lugar mítico y sagrado, la laguna de Guatavita, cuna de la leyenda de El Dorado. Este bello pueblo es el patrimonio arquitectónico nacional que incluso los viajeros más apurados no dejan de visitar.'},
    { id: 4, title: "Aika - Tabio", image: g5, price:400000, date:'18 enero', distancia:43, ciudad:'Tabio - Cundinamarca', bano:1, camas:1, wifi:1,anfitrion:"Edwin Z",nevera:1, capacidad:1, puntuacion:4.5,descripcion:'Guatavita: Sus Hermosas casas blancas uniformes y sus recorridos laberinticos enamoran al turista; está rodeada de un hermoso paisaje y un lugar mítico y sagrado, la laguna de Guatavita, cuna de la leyenda de El Dorado. Este bello pueblo es el patrimonio arquitectónico nacional que incluso los viajeros más apurados no dejan de visitar.'},
    { id: 5, title: "Punta de los remedios", image: g6, price:300000, date:'12 enero', distancia:41, ciudad:'Ibague', bano:1, camas:1, wifi:1,anfitrion:"Edwin Z",nevera:1, capacidad:4, puntuacion:2.5,descripcion:'Guatavita: Sus Hermosas casas blancas uniformes y sus recorridos laberinticos enamoran al turista; está rodeada de un hermoso paisaje y un lugar mítico y sagrado, la laguna de Guatavita, cuna de la leyenda de El Dorado. Este bello pueblo es el patrimonio arquitectónico nacional que incluso los viajeros más apurados no dejan de visitar.'},
    { id: 6, title: "Rionegro", image: g7, price:180000, date:'14 enero', distancia:150, ciudad:'Rionegro - Antioquia', bano:1, camas:2, wifi:1,anfitrion:"Edwin Z",nevera:1, capacidad:1, puntuacion:3.5,descripcion:'Guatavita: Sus Hermosas casas blancas uniformes y sus recorridos laberinticos enamoran al turista; está rodeada de un hermoso paisaje y un lugar mítico y sagrado, la laguna de Guatavita, cuna de la leyenda de El Dorado. Este bello pueblo es el patrimonio arquitectónico nacional que incluso los viajeros más apurados no dejan de visitar.'},
    { id: 7, title: "El retiro", image: g8, price:180000, date:'21 enero', distancia:40, ciudad:'La vega', bano:1, camas:1, wifi:1,anfitrion:"Edwin Z",nevera:1, capacidad:2, puntuacion:4.1,descripcion:'Guatavita: Sus Hermosas casas blancas uniformes y sus recorridos laberinticos enamoran al turista; está rodeada de un hermoso paisaje y un lugar mítico y sagrado, la laguna de Guatavita, cuna de la leyenda de El Dorado. Este bello pueblo es el patrimonio arquitectónico nacional que incluso los viajeros más apurados no dejan de visitar.'},
    { id: 8, title: "Suesca", image: g9, price:120000, date:'13 enero', distancia:20, ciudad:'Suesca - Cundinamarca', bano:0, camas:1, wifi:1,anfitrion:"Edwin Z",nevera:1, capacidad:3, puntuacion:4,descripcion:'Guatavita: Sus Hermosas casas blancas uniformes y sus recorridos laberinticos enamoran al turista; está rodeada de un hermoso paisaje y un lugar mítico y sagrado, la laguna de Guatavita, cuna de la leyenda de El Dorado. Este bello pueblo es el patrimonio arquitectónico nacional que incluso los viajeros más apurados no dejan de visitar.'},
    { id: 9, title: "Bajo el Xielo", image: g2, price:200000, date:'11 enero', distancia:10, ciudad:'San Francisco - Cundinamarca', bano:1, camas:1, wifi:1,anfitrion:"Edwin Z",nevera:1, capacidad:2, puntuacion:4.5, descripcion:'Guatavita: Sus Hermosas casas blancas uniformes y sus recorridos laberinticos enamoran al turista; está rodeada de un hermoso paisaje y un lugar mítico y sagrado, la laguna de Guatavita, cuna de la leyenda de El Dorado. Este bello pueblo es el patrimonio arquitectónico nacional que incluso los viajeros más apurados no dejan de visitar.'},
    { id: 10, title: "Paihuen", image: g3, price:305000, date:'21 enero', distancia:35, ciudad:'Vilavicencio - Meta', bano:0, camas:1, wifi:1,anfitrion:"Edwin Z",nevera:1, capacidad:5, puntuacion:2.5,descripcion:'Guatavita: Sus Hermosas casas blancas uniformes y sus recorridos laberinticos enamoran al turista; está rodeada de un hermoso paisaje y un lugar mítico y sagrado, la laguna de Guatavita, cuna de la leyenda de El Dorado. Este bello pueblo es el patrimonio arquitectónico nacional que incluso los viajeros más apurados no dejan de visitar.'},
    { id: 11, title: "Paihuen", image: g3, price:182100, date:'14 enero', distancia:420, ciudad:'Vilavicencio - Meta', bano:1, camas:1, wifi:1,anfitrion:"Edwin Z",nevera:1, capacidad:3, puntuacion:4.4,descripcion:'Guatavita: Sus Hermosas casas blancas uniformes y sus recorridos laberinticos enamoran al turista; está rodeada de un hermoso paisaje y un lugar mítico y sagrado, la laguna de Guatavita, cuna de la leyenda de El Dorado. Este bello pueblo es el patrimonio arquitectónico nacional que incluso los viajeros más apurados no dejan de visitar.'},
    { id: 12, title: "Terrojo", image: g4, price:180000, date:'21 enero', distancia:40, ciudad:'Villa de leyva - Boyaca', bano:1, camas:1, wifi:1,anfitrion:"Edwin Z",nevera:1, capacidad:1, puntuacion:4.5,descripcion:'Guatavita: Sus Hermosas casas blancas uniformes y sus recorridos laberinticos enamoran al turista; está rodeada de un hermoso paisaje y un lugar mítico y sagrado, la laguna de Guatavita, cuna de la leyenda de El Dorado. Este bello pueblo es el patrimonio arquitectónico nacional que incluso los viajeros más apurados no dejan de visitar.'},

  ];


function Home () {
  //para cuando tengga la api
  const [items, setItems] = useState<any>(null);
  
  useEffect(()=>{
    // fetch('https://fakestoreapi.com/products')
    // .then(response=> response.json())
    // .then(datos => setItems (datos))
   setItems(Glampings);

   },[])

  return (
    <div className="contenedorHome">

     
      <NavBar/>
      <Filtros/>

      
      <div className='contenedorTarjetas'>
      
        {/* Con esto usamos la api */}
        {items?.map((item: any) => (
          
          <Tarjeta key={item.id} data={item} />
          
        ))}


      </div>

      <FiltroAvanzado/>

      <Footer/>

    </div>

  );
};

export default Home;