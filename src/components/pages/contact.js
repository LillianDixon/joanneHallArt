
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

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    handleSubmit(e){
        e.preventDefault();
        axios({
          method: 'post',
          url: `${API_PATH}`,
          headers: { 'content-type': 'application/json' },
          data: this.state
        })
          .then(result => {
            this.setState({
              mailSent: result.data.sent
            })
          })
          .catch(error => this.setState({ error: error.message }));
    }

    render(){
        return(
            <div className="contact-wrapper">
                <div className="image">
                    <img src={Sunflower} />
                </div>
                <div className="contact-form">
                    <form onSubmit={this.handleSubmit}>

                        <div className="form-elements">
                            <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            onChange={e => this.setState({ name: e.target.value })}
                            />
                        </div>

                        <div className="form-elements">
                            <input
                            type="email"
                            name="email"
                            placeholder="Your email"
                            onClick={this.handleChange}
                            onChange={e => this.setState({ 
                            email: e.target.value })}
                            />
                        </div>
                        
                        <div className="form-elements">
                            <input
                            type="text"
                            subject="subject"
                            placeholder="Subject"
                            onChange={e => this.setState({ subject: e.target.value })}
                            />
                        </div>
                        
                        <div className="form-elements">
                        <textarea 
                            type="text"
                            name="message"
                            placeholder="Your Message"
                            onChange={e => this.setState({ message: e.target.value })}
                            value={this.state.message}
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