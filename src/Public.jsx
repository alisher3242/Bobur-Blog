import { Route, Routes } from "react-router-dom"
import { Header } from "./components/header/header"
import { Login } from "./moduls/public/login/login"

export const Public = () => {
    return(
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Login/>} />
            </Routes>
        </div>
    )
}