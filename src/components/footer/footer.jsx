import {Link} from "react-router-dom"
import logo from "../../images/footer-logo.svg"
import "./footer.css"

export const Footer = () => {
    return (
        <div className="footer">
            <div className="container footer__container">
                <div className="footer__left">
                    <Link className="footer__logo-link" to={"/"}>
                        <img className="footer__logo" src={logo} alt="logo" />
                        <h2 className="babur">Bobur</h2>
                    </Link>
                </div>
                <div className="footer__right">
                    <div className="footer__right-left">
                        <h2 className="footer__heading">FIGHT WITH ME ON:</h2>
                        <ul className="footer__list">
                            <li className="footer__item">
                                <a href="https://twitter.com" className="footer__link">Twitter</a>
                            </li>
                            <li className="footer__item">
                                <a href="https://instagram.com.com" className="footer__link">Instagram</a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">Telegram</a>
                            </li>
                            <li className="footer__item">
                                <a href="https://youtube.com" className="footer__link">YouTube</a>
                            </li>
                            <li className="footer__item">
                                <a href="https://figma.com" className="footer__link">Figma</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__right-center">
                        <h2 className="footer__heading">WHAT I HAVE DONE:</h2>
                        <ul className="footer__list">
                            <li className="footer__item">
                                <a href="#" className="footer__link">Xalq Kutubxonasi</a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">Website</a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">Play Market</a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">App Store</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__right-right">
                    <ul className="footer__list">
                            <li className="footer__item">
                                <a href="tel:936293242" className="footer__link">Contact</a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">Blog</a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">Dribbble</a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">Behance</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}