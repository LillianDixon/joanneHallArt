import React, { Component } from "react";
import Login from "../auth/login";
import chinaWorker from "../../../static/assets/images/chinaWorker.jpg";

export default class Auth extends Component {
    constructor(props){
        super(props);

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
        this.handleUnSuccessfulAuth = this.handleUnSuccessfulAuth.bind(this);
    }

    handleSuccessfulAuth(){
        this.props.handleSuccessfulLogin();
        this.props.history.push('/');
    }

    handleUnSuccessfulAuth(){
        this.props.handleUnSuccessfulLogin(); 
    }


  render() {
      return (
          <div className="auth-page-wrapper">
           <div className="left-column">
                <img src={chinaWorker} />
            </div>
            <div className="right-column">
                <Login 
                    handleSuccessfulAuth={this.handleSuccessfulAuth}
                    handleUnSuccessfulAuth={this.handleUnSuccessfulAuth}
                />
            </div>
          </div>
      )
  }
} 