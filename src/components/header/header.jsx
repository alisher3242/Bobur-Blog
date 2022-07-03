import {Link} from "react-router-dom"
import { UseAuth } from "../../hooks/UseAuth"
import logo from "../../images/logo.svg"
import search from "../../images/search.png"
import "./header.css"
import hamburger from "../../images/hamburger.png"
import close from "../../images/close.png"
import { useRef, useState } from "react"
import { UseSearch } from "../../hooks/UseSearch"
export const Header = () => {
    const {token} = UseAuth()
    const [hamburgerBtn, setHamburgerBtn] = useState(false)
    const handleHamburger = () => {
        setHamburgerBtn(!hamburgerBtn)
    }

    const { setSearch } = UseSearch()
    const searchRef = useRef(null)
    const handleSearch = () => {
        setSearch(searchRef.current.value)
        searchRef.current.value = null
    }

    const handleNavLink = () => {
        setHamburgerBtn(false)
    }

    return (
        <div className="container">
            <div className="header">
            <Link className="logo__link" to={"/"}>
                <img className="logo__img" src={logo} alt="logo" width="58" height="58" />
                <h3 className="logo__text">BoburBlog</h3>
            </Link>
            {token && (<ul className={`${hamburgerBtn ? "header__list" : "visible"}`}>
                <li className="header__item">
                    <Link onClick={handleNavLink} className="header__item-link" to={"/"}>
                    All
                    </Link>
                </li>
                <li className="header__item">
                    <Link onClick={handleNavLink} className="header__item-link" to={"/design-theory"}>
                    Design Theory
                    </Link>
                </li>
                <li className="header__item">
                    <Link onClick={handleNavLink} className="header__item-link" to={"/ux"}>
                    UX
                    </Link>
                </li>
                <li className="header__item">
                    <Link onClick={handleNavLink} className="header__item-link" to={"/ui"}>
                    UI
                    </Link>
                </li>
                <li className="header__item">
                    <Link onClick={handleNavLink} className="header__item-link" to={"/typography"}>
                    Typography
                    </Link>
                </li>
            </ul>)}
            {token && (<div className="header__search">
                <input ref={searchRef} type="text" placeholder="Search" className="search__input" />
                <button onClick={handleSearch} className="search__img">
                <img src={search} alt="search icon" width={16} height={16} className="search-icon" />
                </button>
            </div>)}
            </div>
            {token && (
                <div><img onClick={handleHamburger} src={`${hamburgerBtn ? close : hamburger}`} alt="hamburger" className="hamburger" /></div>
                )}
        </div>
    )
}