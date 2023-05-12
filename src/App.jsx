import { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import './App.css'
import { Routerprincipal } from './Componentes/Routerprincipal/Routerprincipal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routerprincipal/>
     
    </>
  )
}

export default App
