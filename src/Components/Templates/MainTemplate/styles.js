import styled from "styled-components";
import {motion} from "framer-motion"


export const Header = styled(motion.header)`
//Background (glass)
background: rgba( 255, 255, 255, 0.1 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 5px );
-webkit-backdrop-filter: blur( 5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
//--------------------
z-index: 5;
width:90%;
margin: 0 auto;
margin-top:10px;
min-height: 25vh;
max-height: 40vh;
display: flex;
justify-content: space-around;
& div {
    display: flex;
    flex-direction: column;
    align-items:center;
    &:first-child {
        font-size:30px;
        color:whitesmoke;
        gap:20px;
        margin-top: 1em;
        
    }
}
& a {
    color:white;
    text-decoration:none;
    transition: 0.5s;
    &:hover {color:gray;}
}
&:nth-child(1) {font-style:italic;text-align:center;}
& span {color:gray;}
& ul > li {
    list-style: none;
    text-decoration: none;
    color:white;
}



`
export const Nav = styled.nav`
position:absolute;
margin:0 auto;
top:88%;
z-index: 3;
width: 50%;
border-radius:10px 10px 0 0;
border-bottom: none;
overflow: hidden;
font-size: 30px;
& p {
    position: relative;
    z-index: 2;
    margin:0;
background-color:green;
width:100%;
color:white;
transition: 0.5s;
cursor: pointer;
user-select: none;
&:hover {
    background-color:rgb(0, 170, 0);
}
}
`

export const menu = styled(motion.div)`
position: relative;
z-index: 1;
top:-200px;
margin:0 auto;
padding:15px 0 15px 0;
width: 100%;
border:none;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
background-color: rgb(0,0,0,0.5);
gap:20px;
& a {
    cursor: pointer;
    &:hover {
        font-weight: 600;
    }
}
`
export const Footer = styled.footer`
`