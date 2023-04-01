<<<<<<< HEAD
import React, { createContext, useState } from 'react'
export const UserInfoContext= createContext()
const UserInfoContextProvider = ({children}) => {
    const [isLogged,setIsLogged] = useState(false)
    
    const userLogin = () => setIsLogged(true)
    const logout = () => setIsLogged(false)
    const value = {
        userLogin,
        logout
    }

  return (
    <UserInfoContext.Provider value={value}>
        {children}
    </UserInfoContext.Provider>
  )
}

=======
import React, { createContext, useState } from 'react'
export const UserInfoContext= createContext()
const UserInfoContextProvider = ({children}) => {
    const [isLogged,setIsLogged] = useState(false)
    
    const userLogin = () => setIsLogged(true)
    const logout = () => setIsLogged(false)
    const value = {
        userLogin,
        logout
    }

  return (
    <UserInfoContext.Provider value={value}>
        {children}
    </UserInfoContext.Provider>
  )
}

>>>>>>> e0872a7b48fc738d7518e6eb1bf0690ea7647853
export default UserInfoContextProvider