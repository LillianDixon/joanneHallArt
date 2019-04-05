import React, { Component } from "react";

const EMAIL = process.env.REACT_APP_EMAIL
const PASSWORD = process.env.REACT_APP_PASSWORD

export default class Login extends Component {
    constructor(props){
        super(props);

        this.state={
            email: "",
            password: "",
            errorText: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value,
          errorText: ""
        });
      }

    handleSubmit(event) {
      event.preventDefault();
      console.log(EMAIL)
      console.log(PASSWORD)

      // if(this.state.email === EMAIL && this.state.password === PASSWORD){
      //     console.log('you can come in')
      //     this.props.handleSuccessfulAuth();
      //   }else{
      //     console.log('error')
      //     // this.props.handleUnSuccessfulAuth();
      //   }
    }

  render() {
    return (
      <div>
        <h1>LOGIN</h1>

        <div>{this.state.errorText}</div>

        <form onSubmit={this.handleSubmit}>

        <input 
        type="email" 
        name="email"
        placeholder="Your email"
        value={this.state.email}
        onChange={this.handleChange}
        />

          
        <input 
          type="password" 
          name="password"
          placeholder="Your password"
          value={this.state.password}
          onChange={this.handleChange}
          />

          <div>
              <button type="submit">Login</button>
          </div>
        </form>
      </div>
    );
  }
}