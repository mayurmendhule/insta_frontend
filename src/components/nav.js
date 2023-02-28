import React from "react";
import insta_logo from '../img/insta_logo.PNG'
import camera_icon from '../img/camera_icon.jpg'
import { Link } from "react-router-dom";
import './Postview.css'
const Nav =()=>{
    return(
        <div>
        <header>
         <Link to="/Postview"><img src={insta_logo} className="logo" alt="logo"/> </Link>
            <a  className="camera-icon"><Link  to="/CreatePost"> <img src={camera_icon} className="camera-icon" alt='camera-icon'/> </Link></a>
        </header>
        </div>
    )
}

export default Nav;