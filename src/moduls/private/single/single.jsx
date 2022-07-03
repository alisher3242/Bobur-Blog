import ok from "../../../images/five.png";
import { Link, useNavigate } from "react-router-dom";
import "./single.css"
import share from "../../../images/share.png";
import singlePhoto from "../../../images/single.png";
import time from "../../../images/time.png";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Single = () => {
    const [posts, setPosts] = useState([])
    const { id } = useParams()
    const navigate = useNavigate()
    const [post, setPost] = useState([])
    const [currentPage] = useState(1)
    const [perPage] = useState(3)
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => setPost(data))
    }, [])

    const lastPost = currentPage * perPage;
    const firstPost = lastPost - perPage
    const currentPosts = post.slice(firstPost, lastPost)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/" + id)
        .then(res => res.json())
        .then(data => setPosts(data))
        .catch(err => console.log(err))
    }, [id])

    const handleLink = (id) => {
        navigate("/" + id)
    }

  return (
    <div className="single">
      <div className="container single-container">
        <div className="single__left">
          <div className="single__left-top">
            <button className="single__left-ok">
              <img src={ok} alt="icon" width={18} height={19} />
            </button>
            <p className="single__left-ok-num">125</p>
          </div>

          <div className="single__left-bottom">
            <button className="single__right-share">
              <img src={share} alt="icon" width={18} height={19} />
            </button>
            <p className="single__right-share-num">125</p>
          </div>
        </div>
        <div className="single__right">
          <p className="single__right-user">User interface</p>
         <h2 className="single__right-heading">
            {posts?.title}
          </h2>
          <div className="single__right-data">
            <p className="single__right-data-left">October 24, 2020</p>
            <div className="single__right-data-right">
              <img src={time} width={17.5} height={17.5} alt="time icon" />
              <p className="home__right-last">3 minutes read</p>
            </div>
          </div>
          <img className="single-image" src={singlePhoto} alt="user img"  />
          <p className="single__right-text">
            {posts?.body}
          </p>
          <div className="single__right-overload">
            <p className="single__right-overload-title">Information overload</p> Vivamus dictum ultrices tortor. Ut imperdiet,
            enim in suscipit dignissim, mauris massa pellentesque augue, quis
            ultricies sem tortor et velit.
          </div>
          <div className="single__right-border">
            Sed commodo ligula vitae mollis tristique. Maecenas egestas semper
            mauris. Duis tempus blandit ultrices. Proin <span className="elit">elit.uz</span> nulla, viverra
            id suscipit quis, tristique a dolor.
            <p className="blockquote">
              'Designing For Sustainability, Tim Frick, 2014'
            </p>
          </div>
          <div className="single__right-lesson">
            <h2 className="single__right-lesson-heading">Lessons Learnt: Best Practice</h2>
            <ul className="single__right-lesson-list">
                <li className="single__right-lesson-item">
                Morbi congue odio vel luctus aliquam. Morbi accumsan sapien at lorem ultricies aliquam eu eu nisl. Suspendisse.
                </li>
                <li className="single__right-lesson-item">
                Maecenas sit amet ligula auctor neque aliquam placerat et ac neque. Proin risus eros, fringilla eu suscipit dignissim, dignissim.
                </li>
            </ul>
          </div>
          <div className="single__right-more">
            <h3 className="single__right-heading">More like this</h3>
            <ul className="single__right-list">
                        {currentPosts.map(post => (
                            <Link onClick={() => handleLink(post.id)} key={post.id} className="single__right-single" to={"/" + post.id}>
                            <li className="single__right-item">
                                <div className="single__right-info">
                                    <p className="single__right-dataa">September 24.2020</p>
                                    <p className="single__right-type">Design theory</p>
                                </div>
                                <p className="single__right-text">{post.title}</p>
                                <div className="single__right-bottom">
                                    <img src={time} width={17.5} height={17.5} alt="time icon" />
                                    <p className="single__right-last">3 minutes read</p>
                                </div>
                            </li>
                            </Link>
                        ))}
                    </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
