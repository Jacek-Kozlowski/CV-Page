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

export default UserInfoContextProvider