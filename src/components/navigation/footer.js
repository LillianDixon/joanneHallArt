import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';

export default function(){
    

    return(
        <div className="footer-wrapper">
            <div className="footer-nav-links-wrapper">
                <div className="footer-link">
                    <NavLink exact to="/" activeClassName = "nav-link-active">Home</NavLink>
                </div>
                <div className="footer-link">
                    <NavLink to="/about" activeClassName = "nav-link-active">About Me</NavLink>
                </div>
                <div className="footer-link">
                    <NavLink to="/artwork" activeClassName = "nav-link-active">Artwork</NavLink>
                </div>
                <div className="footer-link">
                    <NavLink to="/contact" activeClassName = "nav-link-active">Contact</NavLink>
                </div>
                <div className="footer-link">
                    <NavLink to="#" activeClassName = "nav-link-active">Blog</NavLink>
                </div>
            </div>
            <div className="social-media-wrapper">

            <div className="social-media-link">
                <SocialIcon url="https://www.facebook.com/joannehallart/" />
            </div>
            <div className="social-media-link">
                <SocialIcon url="https://www.instagram.com" />
            </div>
                
            </div>
            
        </div>
    )
}