import { useContext } from "react"
import { AuthContext } from "../context/Auth-context"

export const UseAuth = () => {
    const {token, setToken} = useContext(AuthContext)
    return {token, setToken}
}