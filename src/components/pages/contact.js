
import React, {Component} from 'react';
import Sunflower from "../../../static/assets/images/sunflower.jpg";


export default class Contact extends Component{
    constructor(props){
        super(props)

        this.state = {
            name: "",
            email: "",
            subject: "",
            message: "",
            mailSent: false,
            error: null
        }

        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log( this)
    }
    
    handleSubmit(e){
        e.preventDefault()
        console.log(this)
       fetch(`https://joanne-hall-art-api.herokuapp.com/email`, {
           method: 'POST',
           headers: {
               'Content-Type': "application/json"
           },
           body: JSON.stringify({name: this.state.name, email: this.state.email, subject: this.state.subject, message: this.state.message})
       })
        .then(response => {return response.json();})
        .then(responseData => {console.log(responseData)})
        .catch(error => {
            console.log('handlesubmit error' + error)
        })
    }

    render(){
        return(
            <div className="contact-wrapper">
                <div className="image">
                    <img src={Sunflower} />
                </div>
                <div className="contact-form">
                    <h1>CONTACT ME</h1>
                    <form onSubmit={this.handleSubmit}>

                        <div className="form-elements">
                            <input
                            type="text"
                            name="name"
                            placeholder="Your Name" 
                            onChange={this.handleChange}
                            value = {this.state.name} 
                            /> 
                        </div>

                        <div className="form-elements">
                            <input
                            type="email"
                            name="email"
                            placeholder="Your email"
                            onChange={this.handleChange}
                            value = {this.state.email} 
                            /> 
                        </div>
                        
                        <div className="form-elements">
                            <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            onChange={this.handleChange}
                            value = {this.state.subject} 
                            /> 
                        </div>
                        
                        <div className="form-elements">
                        <textarea 
                            type="text"
                            name="message"
                            placeholder="Your Message"
                            onChange={this.handleChange}
                            value = {this.state.message} 
                            /> 
                        </div>
                                            
                        <div>
                        {this.state.mailSent &&
                            <div>Thank you for contcting us.</div>
                        }
                        </div>
                    </form>

                    <button className="btn" type="send" onClick={e => this.handleSubmit(e)} value="Submit">Send</button>
                </div>
            </div>
        )
    }
}