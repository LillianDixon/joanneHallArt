import React, {Component} from 'react';
import { NavLink } from "react-router-dom";

export default function(){
    return(
        <div>
            <NavLink exact to="/" activeClassName = "nav-link-active">Home</NavLink>
            <NavLink to="/about" activeClassName = "nav-link-active">About Me</NavLink>
            <NavLink to="/artwork" activeClassName = "nav-link-active">Artwork</NavLink>
            <NavLink to="/contact" activeClassName = "nav-link-active">Contact</NavLink>
            
        </div>
    )
}