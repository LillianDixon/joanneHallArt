
import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Delete from './delete';
import Update from "./update";

export default class ManagerSideBar extends Component {
    constructor(props){
        super(props)

        this.state={
            current: []
        }
    }

    componentDidMount(){
        fetch("https://joanne-hall-art-api.herokuapp.com/current", {
            method: 'GET',
            headers: {
                'accepts': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => {return response.json();})
        .then(data => {this.setState({current: data})})
        .catch(err => {
            console.log("Fetch error" + err)
        })
    }

    render() {
        return (
            <div>
                <h1>Posts</h1>
                {this.state.current.map((post) => (
                    <div key={post[0]}>
                        <Link to={`../artworkPage`}>{post[1]}</Link>
                        <h3>Description: {post[2]}</h3>
                        <div>{post[3]}</div>
                        <Delete id={post[0]}/>
                        <Update
                        id={post[0]}
                        ourProp={this.state.current}
                        />

                    </div>
                ))}
                
            </div>
        );
    }
}