import React from 'react'
import { NavLink } from 'react-router-dom'
import imgBarNav from '../assets/not-found/ofrecetusservicios-removebg-preview.png'

import { useNavigate } from 'react-router-dom'

function BarNav({usuarioPresente, setSesionIniciada, sesionIniciada, functionVisibilityBarnav2, visibilityLogIn, setVisibilityLogIn, setVisibilityChat, setVisibilityHelp, visibilityHelp}) {
  const navigate = useNavigate()


  // visibilidad ayuda

  const functionVisibilityHelp = () => {
    setVisibilityHelp(!visibilityHelp)
    setVisibilityChat(false)
    setVisibilityLogIn(false)
  }
  
  const functionVisibilityLogIn = () => {
    setVisibilityLogIn(!visibilityLogIn)
    setVisibilityHelp(false)
  }

  const functionCloseSesion = () => {
    setSesionIniciada(false)
    navigate('/')
  }
  
  return (


    <nav className='barnav-container'>
    {sesionIniciada &&  <div className='photoPerfil-container' onMouseOver={functionVisibilityBarnav2}>
    {usuarioPresente.imagen ?    
    <img className='img-homero' src={`https://server-ofrecetusservicios.onrender.com/public/uploads/${usuarioPresente.imagen}`} alt='No cargo F'/>
    : <img className='img-homero' />
  }
      </div> }

        {/* <div className='container-img-barnav-found'>
          <img className='img-barnav-found' src={imgBarNavFond}></img>
        </div>> */}
        <div className='container-options-barnav'>
        <div  className='logo-container' style={{display: "flex", flexDirection: "row", marginLeft: '0px'}}>
  <h1><span style={{color: "red"}}>!OfreceTu</span><span style={{color: "red"}}>SERVICIO.com¡</span> </h1>
    <img src={imgBarNav} className='img-barnav' />
</div>

<div className='container-itembarnav'>
      {sesionIniciada && <button onClick={functionCloseSesion} className='item-barnav-button'>SALIR</button> }
   {!sesionIniciada &&  <button className='item-barnav-button' onClick={functionVisibilityLogIn} ><NavLink to='/iniciarSesion'>INICIAR SESION</NavLink></button> }
      {!sesionIniciada && <NavLink className='item-barnav' to='/'>INICIO</NavLink>}
       {!sesionIniciada && <NavLink className='item-barnav' to='/registro'>REGISTRARSE</NavLink> }
       {!sesionIniciada && <NavLink className='item-barnav' to='/quees'>QUE ES</NavLink> }
       {sesionIniciada && <NavLink className='item-barnav' to='/freealquilerpersona'>ALQUILAR PERSONAS!</NavLink>}
       {sesionIniciada && <NavLink className='item-barnav' to='/solicitarPersonas'>SOLICITAR PERSONAS!</NavLink>}
        <button className='item-barnav-button' onMouseEnter={functionVisibilityHelp} >AYUDA</button>
        </div>


        </div>


    </nav>
  )
}

export default BarNav