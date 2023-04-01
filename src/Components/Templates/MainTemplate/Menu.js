<<<<<<< HEAD
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

=======
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

>>>>>>> e0872a7b48fc738d7518e6eb1bf0690ea7647853
export default Menu