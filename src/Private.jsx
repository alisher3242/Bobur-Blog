import { Routes, Route } from "react-router-dom"
import { Footer } from "./components/footer/footer"
import { Header } from "./components/header/header"
import { Home } from "./moduls/private/home/home"
import { Single } from "./moduls/private/single/single"
import { Error } from "./pages/error/error"

export const Private = () => {
    return(
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/posts/:id" element={<Single/>}></Route>
                <Route path="/*" element={<Error/>}></Route>
            </Routes>
            <Footer/>
        </div>
    )
}