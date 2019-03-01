import React, {Component} from 'react';
import { NavLink } from "react-router-dom";

export default function(){
    return(
        <div className="navbar">
            <div className="link">
                <NavLink exact to="/" activeClassName = "nav-link-active">Home</NavLink>
            </div>
            <div className="link">
                <NavLink to="/about" activeClassName = "nav-link-active">About Me</NavLink>
            </div>
            <div className="link">
                <NavLink to="/artwork" activeClassName = "nav-link-active">Artwork</NavLink>
            </div>
            <div className="link">
                <NavLink to="/contact" activeClassName = "nav-link-active">Contact</NavLink>
            </div>
            <div className="link">
                <NavLink to="#" activeClassName = "nav-link-active">Blog</NavLink>
            </div>
            
        </div>
    )
}