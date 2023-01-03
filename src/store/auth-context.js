import React, { useEffect, useState } from "react";

export const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {}, //Dummy function for the IDE
    onLogin: () => {}
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
      const isLoggedLocalStorage = localStorage.getItem('isLoggedIn')
      if (isLoggedLocalStorage === 'true') {
        setIsLoggedIn(true);
      }
    }, []);
    

    const logoutHandler = () => {
        setIsLoggedIn(false);
    }
    
    const loginHandler = () => {
        setIsLoggedIn(true);
    }

    return <AuthContext.Provider
        value={{
            isLoggedIn:isLoggedIn,
            onLogout: logoutHandler,
            onLogin: loginHandler
        }}
    >{props.children}</AuthContext.Provider>
}

export default AuthContext;