import arrow from "../../../images/arrow.png"
import fb from "../../../images/fb.png"
import loadingGif from "../../../images/Spin-1s-200px.gif"
import github from "../../../images/github.png"
import twitter from "../../../images/twitter.png"
import linkedin from "../../../images/in.png"
import time from "../../../images/time.png"
import "./home.css";
import {Link} from "react-router-dom"
import { useEffect, useState } from "react"
import { Pagination } from "../../../components/pagination/pagination"


export const Home = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] =useState(false)
    const [currentPage, setCurrent] = useState(1)
    const [perPage] = useState(20)
    useEffect(() => {
        setLoading(true)
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => setPosts(data))
        setLoading(false)
    }, [])

    const lastPost = currentPage * perPage;
    const firstPost = lastPost - perPage
    const currentPosts = posts.slice(firstPost, lastPost)
    
    const paginate = (pageNumber) => setCurrent(pageNumber)

    return(
        <div className="container home-container">
            <div className="home">
                <div className="home__left">
                    <h2 className="home__left-heading">What I do!</h2>
                    <p className="home__left-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet, orci in bibendum luctus, turpis ante pretium velit, eu rutrum augue erat ac eros. Cras ultricies mattis convallis.</p>
                    <ul className="home__left-more">
                        <li className="home__left-more-text">EXPLORE ME</li>
                        <li className="home__left-more-arrow">
                            <button className="udar__btn">
                            <img id="img" src={arrow} alt="arrow" width={4} height={8} />
                            </button>
                        </li>
                    </ul>
                    <ul className="home__left-links">
                        <li className="home__left-link">
                            <a href="https://facebook.com">
                            <img src={fb} alt="facebook icon" width={10} height={18}/>
                            </a>
                        </li>
                        <li className="home__left-link">
                            <a href="https://github.com/alisher3242" >
                            <img src={github} alt="github icon" width={20} height={20}/>
                            </a>
                        </li>
                        <li className="home__left-link">
                            <a href="https://twitter.com">
                            <img src={twitter} alt="twitter icon" width={20} height={17}/>
                            </a>
                        </li>
                        <li className="home__left-link">
                            <a href="https://linkedin.com">
                            <img src={linkedin} alt="linkedin icon" width={17} height={17}/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="home__right">
                    <h3 className="home__right-heading">Recent Posts</h3>
                    <ul className="home__right-list">
                        { loading ? <img src={loadingGif} alt="gif" /> :
                        currentPosts.map(post => (
                            <Link key={post.id} className="home__right-single" to={"/posts/" + post.id}>
                            <li className="home__right-item">
                                <div className="home__right-info">
                                    <p className="home__right-data">September 24.2020</p>
                                    <p className="home__right-type">Design theory</p>
                                </div>
                                <p className="home__right-text">{post.title}</p>
                                <div className="home__right-bottom">
                                    <img src={time} width={17.5} height={17.5} alt="time icon" />
                                    <p className="home__right-last">3 minutes read</p>
                                </div>
                            </li>
                            </Link>
                        ) ) }
                    </ul>
                    <Pagination perPage={perPage} postsLength={posts.length} paginate={paginate} />
                </div>
            </div>
        </div>
    )
} 