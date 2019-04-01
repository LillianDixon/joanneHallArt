import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class Update extends Component {
    constructor(props){
        super(props)

        this.state={
            id: 0,
            title: '',
            description: '',
            img_url: '',
            formHidden: true
        }
        
        this.editPost = this.editPost.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        let id = this.state.id;
        let title = this.state.title;
        let description = this.state.description;
        fetch(`https://joanne-hall-art-api.herokuapp.com/update_current${id}`, {
            withCredentials: true,
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title: title, description: description})
        }).then(res => res.json())
        .then(responseData => {return responseData})
        .then(() => {this.props.history.push('/')})
        .catch(err => console.log(err))
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    editPost(){
        this.setState({id: this.props.ourProp[0]})
        this.setState({title: this.props.ourProp[1]})
        this.setState({description: this.props.ourProp[2]})
        this.setState({img_url: this.props.ourProp[3]})
        this.setState({formHidden: !this.state.formHidden})
    }

    render() {
        return (
            <div>
                <button onClick={this.editPost}>Edit Post</button>

                <form onSubmit={this.handleSubmit} style = {{visibility: this.state.formHidden ? 'hidden' : "visible"}} >
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                    <textarea type="textarea" name="description" value={this.state.description} onChange={this.handleChange} />
                    <input type="submit" value="submit" />
                </form>
                
            </div>
        );
    }
}

export default withRouter(Update)