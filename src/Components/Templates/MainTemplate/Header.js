import React, { createElement } from 'react'
import * as Styled from "./styles"
import { AiFillLinkedin, AiFillGithub, AiFillFacebook, AiFillFile } from "react-icons/ai"
import { FaReact } from "react-icons/fa"
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Menu from './Menu'


const Header = () => {


    const [showMenu, setShowmenu] = useState(false)

    return (
        <Styled.Header initial={{ opacity: 0 }} transition={{ duration: 1.5 }} animate={{ opacity: 1 }} >
            <div>
                <span>Powered by</span>
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ ease: 'linear', duration: 10, repeat: Infinity }}>

                    <FaReact color='aqua' size="90px" opacity="0.8" />

                </motion.div>
                <span>React</span>
            </div>

            <div>
                <h1>Strona portfolio przyszłego programisty</h1>
                <h2>Jacek Kozłowski</h2>
                <span>(Web Developer/Javascript Developer/React Developer)</span>
            </div>

            <div>

                <ul>
                    <li><Link to="https://www.linkedin.com/in/kozlowski-jacek/">
                        <AiFillLinkedin size="50px" />
                    </Link>
                    </li>

                    <li><Link to="https://github.com/Jacek-Kozlowski/">
                        <AiFillGithub size="50px" />
                    </Link>
                    </li>

                    <li><Link to="https://www.facebook.com/MrTwisterPL">
                        <AiFillFacebook size="50px" />
                    </Link>
                    </li>

                    <li><Link to="/Cv.pdf" target="_blank" download>
                        <AiFillFile size="50px" /><br />Pobierz CV
                    </Link>
                    </li>

                </ul>

            </div>
            <Styled.Nav onClick={() => setShowmenu(!showMenu)}>
                <p>Menu</p>
                {showMenu ? <Menu /> : null}
            </Styled.Nav>
        </Styled.Header>
    )
}

export default Header