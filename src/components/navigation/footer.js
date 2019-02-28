import React, {Component} from 'react';
import { NavLink } from "react-router-dom";

export default function(){
    return(
        <div>
            <div className="nav-links-wrapper">
                <NavLink exact to="/" activeClassName = "nav-link-active">Home</NavLink>
                <NavLink to="/about" activeClassName = "nav-link-active">About Me</NavLink>
                <NavLink to="/artwork" activeClassName = "nav-link-active">Artwork</NavLink>
                <NavLink to="/contact" activeClassName = "nav-link-active">Contact</NavLink>
            </div>
            <div className="social-media-wrapper">
                
            <a href=""></a>
            </div>
            
        </div>
    )
}