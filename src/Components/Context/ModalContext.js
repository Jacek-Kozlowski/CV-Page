<<<<<<< HEAD
import React, { createContext, useState } from 'react'
import Modal from '../Elements/Modal'
export const ModalContext = createContext()
const ModalContextProvider = ({children}) => {
    const [isVisible,setIsVisible] = useState(false)
    const [modalMessage,setModalMessage] = useState("")
    
    const showModal = ({msg}) => {
        setIsVisible(true);
        setModalMessage({msg})
    }
    const hideModal = () => setIsVisible(false)
    const value = {
        showModal,
        hideModal,
    }
  return (
    <ModalContext.Provider value={value}>
        {isVisible ? <Modal msg={modalMessage}/> : null}
        {children}
    </ModalContext.Provider>
  )
}

=======
import React, { createContext, useState } from 'react'
import Modal from '../Elements/Modal'
export const ModalContext = createContext()
const ModalContextProvider = ({children}) => {
    const [isVisible,setIsVisible] = useState(false)
    const [modalMessage,setModalMessage] = useState("")
    
    const showModal = ({msg}) => {
        setIsVisible(true);
        setModalMessage({msg})
    }
    const hideModal = () => setIsVisible(false)
    const value = {
        showModal,
        hideModal,
    }
  return (
    <ModalContext.Provider value={value}>
        {isVisible ? <Modal msg={modalMessage}/> : null}
        {children}
    </ModalContext.Provider>
  )
}

>>>>>>> e0872a7b48fc738d7518e6eb1bf0690ea7647853
export default ModalContextProvider