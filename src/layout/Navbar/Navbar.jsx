import React from 'react'
import style from './navbar.module.css'
import { Link as Anchor } from 'react-router-dom'

export default function Navbar() {
  return (
    <div  className={style.container}>
        <div>
          <img src="/assets/images/logo.png" alt="logo" className={style.logo}/>
        </div>
        <div className={style.anchorContainer}>
        <Anchor to={"/"} className={style.anchor}>Inicio</Anchor>
        <Anchor to={"/shopping"} className={style.anchor}>Tienda</Anchor>
        <Anchor className={style.anchor}>Mi Perfil</Anchor>
        <Anchor className={style.anchor} to={"/signin"}>Sign In</Anchor>
        <Anchor className={style.anchor} to={"/signup"}>Sign Up</Anchor>
        </div>
    </div>
  )
}
