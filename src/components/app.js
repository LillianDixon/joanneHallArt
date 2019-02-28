import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Artwork from "./pages/artwork";
import Contact from "./pages/contact";
import Navbar from "./navigation/navbar";
import Footer from "./navigation/footer";


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <Navbar />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/artwork" component={Artwork} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>

        </Router>
          <h1>Joanne Hall Art</h1>

          <Footer />
      </div>
    );
  }
}
