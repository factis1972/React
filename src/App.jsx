import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Boton from './components/boton'
import ListaEstudiantes from './components/ListaEstudiantes'

function App() {

  return (
      <div>
        <h1>Bienvenido a mi aplicación</h1>
        <p> Esta es una aplicación de ejemplo usando Vite + React</p>
        <Boton />
        <ListaEstudiantes />
      </div>
  )
}

export default App
