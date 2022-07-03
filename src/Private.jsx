import { Routes, Route } from "react-router-dom"
import { Footer } from "./components/footer/footer"
import { Header } from "./components/header/header"
import { Home } from "./moduls/private/home/home"
import { Single } from "./moduls/private/single/single"

export const Private = () => {
    return(
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/:id" element={<Single/>}></Route>
            </Routes>
            <Footer/>
        </div>
    )
}