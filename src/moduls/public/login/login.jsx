import { useRef, useState } from "react"
import { UseAuth } from "../../../hooks/UseAuth"
import "./login.css"

export const Login = () => {
    const {setToken} = UseAuth()
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const [error, setError] = useState(false)
    const handleLogin =  async(evt) => {
        evt.preventDefault()

        const data = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }

         const res = await fetch("https://reqres.in/api/login", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
            if (res.ok) {
                const userToken = await res.json()
                setToken(userToken)
            }else {
                setError(true)
            }
    }   

    return(
        <div className="login container">
            <h1 className="login__heading">Login</h1>
            <form className="form" onSubmit={handleLogin}>
                <input className={`login_input ${error? "border border-danger": ""}`} ref={emailRef} type="text" placeholder="Login" required />
                <input className={`login_input ${error? "border border-danger": ""}`} ref={passwordRef} type="password" placeholder="Password" required />
                <button className="login__btn" type="submit">Submit</button>
            </form>
        </div>
    )
}