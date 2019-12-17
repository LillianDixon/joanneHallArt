import React, { Component } from "react";
import axios from 'axios';



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

      axios.post('https://joanneapi.herokuapp.com/login', {
        email: this.state.email,
        password: this.state.password
      },
      {
        headers: {
          "content-type": "application/json",
          'Access-Control-Allow-Credentials': true
        }
      }
      ).then(response => {
        console.log('response', response)
        if(response.data === "logged in"){
          this.props.handleSuccessfulAuth();
        }else{
          this.setState({
            errorText: 'Wrong email or password'
          })
        }
      }).catch(error => {
        console.log('error', error)
      })

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