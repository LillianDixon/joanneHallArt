import React, { Component } from 'react';

export default class artworkPage extends Component {
    constructor(props){
        super(props)

        this.state={
            singlePost: []
        }
    }

    componentDidMount(){
        const{id} = this.props.match.params
        console.log(id)

        fetch(`https://joanne-hall-art-api.herokuapp.com/current/${this.props.id}`, {
            method:"GET",
            headers: {
                'accepts': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => {return response.json();})
        .then(data => {this.setState({singlePost: data});})
        .catch(err => {
            console.log("Fetch error", err)
        })
    }

    render() {
        return (
            <div className="artworkPage-wrapper">
                <h1>Artwork Detail</h1>
                <h2>{this.state.singlePost[1]}</h2>
                <h3>{this.state.singlePost[2]}</h3>
                
            </div>
        );
    }
}