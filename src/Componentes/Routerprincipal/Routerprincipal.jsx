import React from 'react'
import {Routes, Route, Link,NavLink,BrowserRouter} from 'react-router-dom'
import About from '../About/About'
import Home from '../Home/Home'
import Princing from '../Princing/Princing'
import Error from '../Error/Error'
import './stylesrouter.css'

export const Routerprincipal = () => {
  return (
   <>
    <h1>Cabecera</h1>
        <hr />
        <nav>
          <ul>
            <li >
              <NavLink  
              to="/home" 
              claseName= {({isActive})=> isActive ?"activate" : ""}
              >home</NavLink>
            </li>
            <li>
            <NavLink claseName="activate" to="/princing">princing</NavLink>
            </li>
            <li>
            <NavLink claseName="activate" to="/about">About</NavLink>
            </li>
          </ul>
          </nav>  

   <section className='Contenido_Principal'> 
  
         <Routes>
             <Route path='/' element={<Home/>} />
             <Route path='/home' element={<Home/>} />
             <Route path='/princing' element={<Princing/>} />
             <Route path='/about' element={<About/>} />
             <Route path='*' element={<Error/>} />
           </Routes>
        
        
        
       
        </section>  
   
   </>
  )
}
