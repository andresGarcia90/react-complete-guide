import React from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {} //Dummy function for the IDE
});

export default AuthContext;