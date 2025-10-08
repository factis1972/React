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

function App() {

  return (
    <>
      <Header />
      <Nav />
      <Main />

      <Routes>
        <Route path={'/'} element={<Inicio/>} />
        <Route path={'/contacto'} element={<Contacto/>} />
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

export default App
