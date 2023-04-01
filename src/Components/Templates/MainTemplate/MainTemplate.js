import React from 'react'
import Footer from './Footer'
import Header from './Header'
const MainTemplate = ({children}) => {
  return (
    <>
        <Header/>
        {children}
        <Footer/>
        
    </>
  )
}

export default MainTemplate