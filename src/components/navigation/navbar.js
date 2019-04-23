import React from 'react';
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            props.handleSuccessfulLogout();
            localStorage.removeItem('loggedInStatus')
            window.location.reload()
    };  
    return(
        <div className="navbar">
          <div className="nav-btn">
              <label htmlFor="toggle">
                  <span></span>
                  <span></span>
                  <span></span>
              </label>
          </div> 
          
            <input type='checkbox' id="toggle"/>

            <div className="links-wrapper">
              <div className="right-side">
                  <div className="sign-out">
                  {localStorage.getItem('loggedInStatus') ? (
                      <a onClick={handleSignOut}>
                        <FontAwesomeIcon icon="sign-out-alt" />
                      </a>
                    ) : null}
                  </div>
                  
                  <div className="siteManager">
                      {localStorage.getItem('loggedInStatus') ? (
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

            
        </div>
    )
}

export default withRouter(Navbar);