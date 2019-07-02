
import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class ManagerSideBar extends Component {
    constructor(props){
        super(props)

        this.state={
            current: [],
            past: []
        }
        
    }

    componentDidMount(){
        fetch("https://joanneapi.herokuapp.com/current", {
            method: 'GET',
            headers: {
                'accepts': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => {return response.json();})
        .then(data => {this.setState({current: data})})
        .catch(err => {
            console.log("Fetch error on current artwork" + err)
        })

        
        fetch("https://joanneapi.herokuapp.com/past", {
            method: 'GET',
            headers: {
                'accepts': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => {return response.json();})
        .then(data => {this.setState({past: data})})
        .catch(err => {
            console.log("Fetch error on past artwork" + err)
        })
        
    }

  


    render() {
        return (
            <div className='artwork-wrapper'>
                <h1>ARTWORK</h1>
                <div className="artwork-info-wrapper">
                    <h2>Current Art</h2>
                    <div className='two-column-wrapper'>
                        {this.state.current.map((post) => (
                            <div key={post[0]} className="individual-artwork">
                                <Link className="title" to={`../artworkCurrent/${post[0]}`}>{post[1]}</Link>
                                {/* <h3>{post[2]}</h3> */}
                                <img src={post[3]}></img>

                            </div>
                        ))}
                    </div>
                </div>

                <div className="artwork-info-wrapper">
                    <h2>Past Art</h2>
                    <div className='two-column-wrapper'>
                        {this.state.past.map((post) => (
                            <div key={post[0]} className="individual-artwork">
                                <Link className="title" to={`../artworkPast/${post[0]}`} id={post[0]}>{post[1]}</Link>
                                {/* <h3>{post[2]}</h3> */}
                                <img src={post[3]}></img>

                            </div>
                        ))}
                    </div>
                </div>

            </div>
        );
    }
}
