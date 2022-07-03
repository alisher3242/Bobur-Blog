import { Link } from "react-router-dom"
import notFound from "../../images/404.png"
import arrow from "../../images/arrow.png"
import "./error.css"

export const Error = () => {
    return (
        <div className="error">
            <div className="container error-container">
                <img className="notFound" src={notFound} alt="404" />
                <h2 className="error__head">Page not found - 404</h2>
                <p className="error__text">This page not found (deleted or never exists). Try a phrase in search box or back to home and start again.</p>
                <Link className="error__link" to={"/"}>
                    <p className="error__link-text">TAKE ME HOME!</p>
                    <img className="error__arrow" src={arrow} alt="arrow icon"/>
                </Link>
            </div>
        </div>
    )
}