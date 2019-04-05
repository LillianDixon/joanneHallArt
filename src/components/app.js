import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import axios from "axios";
import {library} from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrash, faSignOutAlt, faEdit, faSpinner} from "@fortawesome/free-solid-svg-icons";

import Home from "./pages/home";
import About from "./pages/about";
import Artwork from "./pages/artwork";
import Contact from "./pages/contact";
import Navbar from "./navigation/navbar";
import Footer from "./navigation/footer";
import Auth from "./pages/auth";
import SiteManager from "./pages/siteManager";
import ArtworkCurrent from "./pages/artworkCurrent";
import ArtworkPast from "./pages/artworkPast";
import NoMatch from "./pages/no-match";

library.add(faTrash, faSignOutAlt, faEdit, faSpinner);




export default class App extends Component {
  constructor(props) {
  super(props);

  this.state = {
    loggedInStatus: "NOT_LOGGED_IN"
  };

  this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
  this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
  this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
}

handleSuccessfulLogin() {
    localStorage.setItem('loggedInStatus', true)
}

handleUnsuccessfulLogin() {
  console.log('not logged in')
}

handleSuccessfulLogout() {
  console.log("logged out")
}


authorizedPages() {
  return [<Route key="siteManager" path="/siteManager" component={SiteManager} />];
}


  render() {
    return (
      <div className='app'>
      <div className="container">
          <Router>
            <div className="main">
              <Navbar 
                loggedInStatus={this.state.loggedInStatus}
                handleSuccessfulLogout={this.handleSuccessfulLogout}
              />


              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/artwork" component={Artwork} />
                <Route path="/contact" component={Contact} />
                <Route path="/artworkCurrent/:id" component={ArtworkCurrent} />
                <Route path="/artworkPast/:id" component={ArtworkPast} />
                <Route
                  path="/auth"
                  render={props => (
                    <Auth
                      {...props}
                      handleSuccessfulLogin={this.handleSuccessfulLogin}
                      handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
                    />
                  )}
                />
                {localStorage.getItem('loggedInStatus') ? (
                  this.authorizedPages()
                ) : null}
                <Route
                  exact
                  path="/portfolio/:slug"
                  component={SiteManager}
                />
                <Route component={NoMatch} />
              </Switch>
            </div>

          </Router>
        </div>

        <Footer />
      </div>
    );
  }
}
