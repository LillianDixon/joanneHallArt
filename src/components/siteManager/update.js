import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Update extends Component {
    constructor(props){
        super(props)

        this.state={
            id: 0,
            title: '',
            description: '',
            img_url: '',
            category: 'current',
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
        fetch(`https://joanneapi.herokuapp.com/update_current/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title: title, description: description})
        }).then(res => res.json())
        .then(responseData => {return responseData})
        .then(() => {this.props.history.push('/siteManager')})
        .catch(err => console.log(err))
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    editPost(post){
        this.setState({id: post[0]})
        this.setState({title: post[1]})
        this.setState({description: post[2]})
        // this.setState({img_url: post[3]})
        this.setState({formHidden: !this.state.formHidden})

    }

    render() {
        return (
            <div>
               {/* <button onClick= {() => this.editPost(this.props.rec)}>Edit Post</button> */}
               <a
              className="action-icon"
              onClick={() => this.editPost(this.props.rec)}>
              <FontAwesomeIcon icon="edit" />
                </a>


                <form onSubmit={this.handleSubmit} style = {{visibility: this.state.formHidden ? 'hidden' : "visible"}} >
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                    <textarea type="textarea" name="description" value={this.state.description} onChange={this.handleChange} />
                    <select
                        name="category"
                        vlaue={this.state.category}
                        onChange={this.handleChange}
                    >
                        <option value="current">Current</option>
                        <option value="past">Past</option>
                    </select>
                    <input type="submit" value="submit" />
                </form>
                
            </div>
        );
    }
}

export default withRouter(Update)