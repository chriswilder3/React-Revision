import React, { useState } from 'react'
import UserContext from './UserContext'

function UserContextProvider({children}) {
    // data inside the context
    const [userData, setUserData] = useState(null)

  return (
    // Wrapper to provide access of context data to wrapped elemts.
    // Around which elements will it act as a wrapper? that is decided
    // in other JSX files like App.jsx where we use UserContextProvider 
    // just like Strictmode or Router
    
    <UserContext.Provider value={{userData, setUserData}} >
        {children}
    </UserContext.Provider>
    // We give value={{userData, setUserData}}, because we want to pass
    // on the access to these elements (orginal data, method to set it)
    // to nested components.
  )
}

export default UserContextProvider