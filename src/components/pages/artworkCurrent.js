import React, { Component } from 'react';

export default class artworkCurrent extends Component {
    constructor(props){
        super(props)

        this.state={
            singlePost: [],
        }

    }

    componentWillMount(){
        const {id} = this.props.match.params
        fetch(`https://joanneapi.herokuapp.com/current/${id}`, {
            method:"GET",
            headers: {
                'accepts': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => {return response.json();})
        .then(data => {this.setState({singlePost: data});})
        .catch(err => {
            console.log("Fetch error on current artwork page", err)
        })
        
    }


    render() {
        return (
            <div className="artworkPage-wrapper">
                <h1>Artwork Current</h1>
                <div className='artworkPage-title'>{this.state.singlePost[1]}</div>
                <img src={`${this.state.singlePost[3]}`}/>
                <div className='artworkPage-description'>{this.state.singlePost[2]}</div>
                
            </div>
        );
    }
}