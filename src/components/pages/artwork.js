import React, {Component} from 'react';
import Bunny from "../../../static/assets/images/bunny.jpg";
import Duck from "../../../static/assets/images/duck.jpg";
import Flowers from "../../../static/assets/images/flowers.jpg";
import HorseShoe from "../../../static/assets/images/horseShoe.jpg";
import Kfc from "../../../static/assets/images/kfc.jpg";
import Porcupine from "../../../static/assets/images/porcupine.jpg";
import Sunflower from "../../../static/assets/images/sunflower.jpg";

import ArtworkItem from "../artwork/artwork-items";
import ArtworkContainer from '../artwork/artwork-container';

export default function(){

    return(
        // TODO
        // make the art pieces more dynamic
        <div className="artwork-wrapper">
                <h1>Artwork</h1>
            <div className="projects">
                <div className="present-projects">
                    <h2>Present Projects</h2>
                        <div className="two-column-wrapper">
                            <div className="art">
                                {/* <ArtworkContainer /> */}
                                <img src={Flowers} />
                                <a href="./artworkPage">Title</a>
                            </div>
                        </div>
                </div>
                <div className="past-projects">
                    <h2>Past Projects</h2>
                        <div className="two-column-wrapper">
                        <div className="art">
                                {/* <ArtworkContainer /> */}

                            <img src={Bunny} />
                            <a href="./artworkPage">Title</a>
                        </div>
                        <div className="art">
                            <img src={Duck} />
                            <a href="./artworkPage">Title</a>
                        </div>
                        <div className="art">
                            <img src={Porcupine} />
                            <a href="./artworkPage">Title</a>
                        </div>
                        <div className="art">
                            <img src={HorseShoe} />
                            <a href="./artworkPage">Title</a>
                        </div>
                        <div className="art">
                            <img src={Kfc} />
                            <a href="./artworkPage">Title</a>
                        </div>
                        <div className="art">
                            <img src={Sunflower} />
                            <a href="./artworkPage">Title</a>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    )
}