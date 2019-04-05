
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

        
        fetch("https://joanne-hall-art-api.herokuapp.com/past", {
            method: 'GET',
            headers: {
                'accepts': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => {return response.json();})
        .then(data => {this.setState({past: data})})
        .catch(err => {
            console.log("Fetch error" + err)
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


// import React, {Component} from 'react';
// import {Link} from "react-router-dom";
// // import Bunny from "../../../static/assets/images/bunny.jpg";
// // import Duck from "../../../static/assets/images/duck.jpg";
// // import Flowers from "../../../static/assets/images/flowers.jpg";
// // import HorseShoe from "../../../static/assets/images/horseShoe.jpg";
// // import Kfc from "../../../static/assets/images/kfc.jpg";
// // import Porcupine from "../../../static/assets/images/porcupine.jpg";
// // import Sunflower from "../../../static/assets/images/sunflower.jpg";

// // import ArtworkItem from "../artwork/artwork-items";
// // import ArtworkContainer from '../artwork/artwork-container';

// export default class Artwork extends Component(){
//     constructor(props){
//         super(props)

//         this.state={
//             current: [],
//             past: []
//         }
        
//     }

//     componentDidMount(){
//         fetch("https://joanne-hall-art-api.herokuapp.com/current", {
//             method: 'GET',
//             headers: {
//                 'accepts': 'application/json',
//                 'Content-Type': 'application/json'
//             }
//         })
//         .then(response => {return response.json();})
//         .then(data => {this.setState({current: data})})
//         .catch(err => {
//             console.log("Fetch error" + err)
//         })

        
//         fetch("https://joanne-hall-art-api.herokuapp.com/past", {
//             method: 'GET',
//             headers: {
//                 'accepts': 'application/json',
//                 'Content-Type': 'application/json'
//             }
//         })
//         .then(response => {return response.json();})
//         .then(data => {this.setState({past: data})})
//         .catch(err => {
//             console.log("Fetch error" + err)
//         })
        
//     }

  


//     render(){
//         return(
//             // TODO
//             // make the art pieces more dynamic
//             <div className="artwork-wrapper">
//                     <h1>Artwork</h1>
//                 <div className="projects">
//                     <div className="present-projects">
//                         <h2>Current Projects</h2>
//                             {/* <div className="two-column-wrapper">
//                                 <div className="art">
//                                     {/* <ArtworkContainer /> */}
//                                     {/* <img src={Flowers} />
//                                     <a href="./artworkPage">Title</a>
//                                 </div>
//                             </div>  */}
                            
//                         {this.state.current.map((post) => (
//                             <div key={post[0]}>
//                                 <Link className="title" to={`../artworkCurrent/${post[0]}`}>{post[1]}</Link>
//                                 <h3>Description: {post[2]}</h3>
//                                 <img src={post[3]}></img>
//                                 <div className="delete-update">
//                                 </div>

//                             </div>
//                         ))}
//                     </div>
//                     <div className="past-projects">
//                         <h2>Past Projects</h2>
//                             {/* <div className="two-column-wrapper">
//                             <div className="art">
//                                     {/* <ArtworkContainer /> */}

//                                 {/* <img src={Bunny} />
//                                 <a href="./artworkPage">Title</a>
//                             </div>
//                             <div className="art">
//                                 <img src={Duck} />
//                                 <a href="./artworkPage">Title</a>
//                             </div>
//                             <div className="art">
//                                 <img src={Porcupine} />
//                                 <a href="./artworkPage">Title</a>
//                             </div>
//                             <div className="art">
//                                 <img src={HorseShoe} />
//                                 <a href="./artworkPage">Title</a>
//                             </div>
//                             <div className="art">
//                                 <img src={Kfc} />
//                                 <a href="./artworkPage">Title</a>
//                             </div>
//                             <div className="art">
//                                 <img src={Sunflower} />
//                                 <a href="./artworkPage">Title</a>
//                             </div>
//                             */}

                            
//                             {this.state.past.map((post) => (
//                                 <div key={post[0]}>
//                                     <Link className="title" to={`../artworkPast/${post[0]}`} id={post[0]}>{post[1]}</Link>
//                                     <h3>Description: {post[2]}</h3>
//                                     <img src={post[3]}></img>
//                                     <div className="delete-update">
//                                     </div>

//                                 </div>
//                             ))}
//                             </div> 
//                     </div>
//                 </div>
//         )
//     }
// }