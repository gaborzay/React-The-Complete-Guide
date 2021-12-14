import React, { useState, useEffect } from 'react'

export const IS_LOGGED_IN = 'isLoggedIn'

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
})

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem(IS_LOGGED_IN);

    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, [])

  const logoutHandler = () => {
    setIsLoggedIn(false)
    localStorage.removeItem(IS_LOGGED_IN)
  }

  const loginHandler = () => {
    setIsLoggedIn(true)
    localStorage.setItem(IS_LOGGED_IN, '1')
  }

  return <AuthContext.Provider value={{
    isLoggedIn: isLoggedIn,
    onLogout: logoutHandler,
    onLogin: loginHandler,
  }}>
    {props.children}
  </AuthContext.Provider>
}

export default AuthContext