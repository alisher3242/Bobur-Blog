import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthPovider = ({ children }) => {
    const [token, setToken] = useState(JSON.parse(localStorage.getItem("tokens")))
    useEffect(() => {
        if(token){
            localStorage.setItem("tokens", JSON.stringify(token))
        }
        else{
            localStorage.removeItem("tokens")
        }
    }, [token])

    return (
        <AuthContext.Provider value={{token,setToken}}>{children}</AuthContext.Provider>
    )
}