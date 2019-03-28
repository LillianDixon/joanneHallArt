
import React, {Component} from 'react';
import axios from "axios";
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

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
       console.log('sent message')
    }

    render(){
        return(
            <div className="contact-wrapper">
                <div className="image">
                    <img src={Sunflower} />
                </div>
                <div className="contact-form">
                    <h1>CONTACT ME</h1>
                    <form>

                        <div className="form-elements">
                            <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            />
                        </div>

                        <div className="form-elements">
                            <input
                            type="email"
                            name="email"
                            placeholder="Your email"
                            />
                        </div>
                        
                        <div className="form-elements">
                            <input
                            type="text"
                            subject="subject"
                            placeholder="Subject"
                            />
                        </div>
                        
                        <div className="form-elements">
                        <textarea 
                            type="text"
                            name="message"
                            placeholder="Your Message"
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