
import React, {Component} from 'react';
import axios from "axios";
import Sunflower from "../../../static/assets/images/sunflower.jpg";
// import mailgun.messages from '../email/email';


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
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e){
       e.preventDefault()
       console.log(mailgun.message())

       const{name, email, subject, message} = this.state

    //    const form = await axios.post('/api/form', {
    //        name,
    //        email,
    //        subject,
    //        message
    //    })
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
                            />
                        </div>

                        <div className="form-elements">
                            <input
                            type="email"
                            name="email"
                            placeholder="Your email"
                            onChange={this.handleChange}
                            />
                        </div>
                        
                        <div className="form-elements">
                            <input
                            type="text"
                            subject="subject"
                            placeholder="Subject"
                            onChange={this.handleChange}
                            />
                        </div>
                        
                        <div className="form-elements">
                        <textarea 
                            type="text"
                            name="message"
                            placeholder="Your Message"
                            onChange={this.handleChange}
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