import React from 'react'
import { Link } from 'react-router-dom'
import * as Styled from "./styles"

const Menu = () => {
  return (
    <Styled.menu animate={{y:200}} transition={{duration:0.5}}>
        <Link to="/">Strona główna</Link>
        <Link to="/projects">Projekty</Link>
        <Link to="/contact">Kontakt</Link>
    </Styled.menu>
  )
}

export default Menu