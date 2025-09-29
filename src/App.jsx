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


function App() {

  return (
    <>
      <Header />
      <Nav />
      <Main />
      <ListaEmpleados />
      <ListaProyectos />
      <ListaIntereses />
      <Footer />
    </>      

    /*
      <div>
        <h1>Bienvenido a mi aplicación</h1>
        <p> Esta es una aplicación de ejemplo usando Vite + React</p>
        <Boton />
        <ListaEstudiantes />
      </div>
*/      
  )
}

export default App
