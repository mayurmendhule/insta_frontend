import React, { useEffect, useState } from "react"
import three_dot from '../img/three_dot.png'
import likeButton_icon from '../img/likeButton_icon.png'
import rocket_btn from '../img/rocket_btn.png'
import './Postview.css'
import Nav from "./nav"
import axios from "axios"



const Postview = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios
          .get("https://instaclone-backend-ycdb.onrender.com/posts")
          .then(function (response) {
            console.log(response);
            setPosts(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
      }, []);


    return(
        <>
        <Nav /> 
        
        <div className="container">
            

                <ul className="Posts-info">

                    {posts.map((post, index) =>{
                        return (

                            <li className="post" key={index}>
                                <div className="post-head">
                                    <div className="person-info"> 
                                        <p className="p-name">{post.name}</p>
                                        <p className="p-location">{post.location}</p>
                                    </div> 
                                        <a href="www.google.com" target='_blank' className="more-op"><img className="dot" src={three_dot} alt="more-op"/></a>
                                    </div>
                                    <div className="post-img">
                                        <img className="img" src={post.PostImage} alt="post-img"/>
                                    </div>

                                    <div className="p-body">
                                        <div className="btn">
                                            <img  src={likeButton_icon} alt="like-btn" className="like-btn"/>
                                            <img  src={rocket_btn} alt="share-btn" className="share-btn"/>
                                           <span className="date">{post.date}</span>
                                        </div>
                                        <div className="nolikes">{post.likes} likes</div><br/>
                                        <div className="descrip">{post.description}</div>
                                    </div>        
                            </li>
                        )
                    })}
                </ul>
        </div>

    </>
    )
}

export default Postview