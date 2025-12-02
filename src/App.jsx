import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
/*
import Boton from './components/boton'
import ListaEstudiantes from './components/ListaEstudiantes'
*/
import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'
/*
import ListaEstudiantes from './components/ListaEstudiantes.jsx'
*/
import ListaEmpleados from './components/EjerciciosClase3/listaEmpleados.jsx'
import ListaProyectos from './components/EjerciciosClase3/ListaProyectos.jsx'
import ListaIntereses from './components/EjerciciosClase3/ListaInterese.jsx'
import BotonContador from './components/Clase4/BotonContador.jsx'
import Formulario from './components/Clase4/Formulario.jsx'
import Carrito from './components/Clase4/Carrito.jsx'
import Cliker from './components/Clase5/Clicker.jsx'

import { Routes, Route } from 'react-router-dom'
import Inicio from './components/Clase6/Inicio.jsx'
import Contacto from './components/Clase6/Contacto.jsx'
import DetalleProducto from './components/Clase6/DetalleProducto.jsx'
import Login from './components/Clase7/Login.jsx'
import Admin from './components/Clase7/Admin.jsx'
import RutaProtegida from './components/Clase7/RutaProtegida.jsx'

function App() {

  const [isAuthenticated, setisAuthenticated] = useState(true);

  const cerrarSesion = () => setisAuthenticated(false);
  const iniciarSesion = () => setisAuthenticated(true);

  return (
    <>
      <Header />
      <Nav />

      { isAuthenticated?
        (<button onClick={cerrarSesion}>Cerrar Sesion</button>):
        (<button onClick={iniciarSesion}>Iniciar Sesion</button>)

      }
      <Main />
      <reactLogo/>
      <Routes>
        <Route path={'/'} element={<Inicio/>} />
        <Route path={'/contacto'} element={<Contacto/>} />
        <Route path={'/login'} element={<Login/>} />
        <Route path={'/admin'} element={
          <RutaProtegida isAuthenticated={isAuthenticated}>
            <h2>Acá se muestra el Admin</h2>
            <Admin/>
          </RutaProtegida>
        } />
        <Route path={'/producto/:id'} element={<DetalleProducto/>} />
      </Routes>
      <Footer />
    </>      

/*
Clase 2
      <div>
        <h1>Bienvenido a mi aplicación</h1>
        <p> Esta es una aplicación de ejemplo usando Vite + React</p>
        <Boton />
        <ListaEstudiantes />
      </div>

Ejercicio clase 3
      <ListaEmpleados />
      <ListaProyectos />
      <ListaIntereses />

*/      

  )
}

export default App;
