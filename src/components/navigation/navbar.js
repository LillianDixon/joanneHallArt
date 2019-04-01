import React from 'react';
import axios from "axios";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from 'js-cookie';

const Navbar = props => {
    const dynamicLink = (route, linkText) => {
      return (
        <div className="nav-link-wrapper">
          <NavLink to={route} activeClassName="nav-link-active">
            {linkText}
          </NavLink>
        </div>
      );
    };
  
    const handleSignOut = (event) => {
      event.preventDefault();
          if (response.status === 200) {
            props.handleSuccessfulLogout();
          }
    };  
    return(
        <div className="navbar">
            <div className="right-side">
                <div className="sign-out">
                  {props.loggedInStatus === "LOGGED_IN" ? (
                    <a onClick={handleSignOut}>
                      <FontAwesomeIcon icon="sign-out-alt" />
                    </a>
                  ) : null}
                </div>
                
                <div className="siteManager">
                    {props.loggedInStatus === "LOGGED_IN" ? (
                    dynamicLink("/siteManager", "Site Manager")
                    ) : null}
                </div>

            </div>
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

export default withRouter(Navbar);