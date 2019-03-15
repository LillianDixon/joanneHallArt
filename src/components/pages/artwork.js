import React, {Component} from 'react';
import Bunny from "../../../static/assets/images/bunny.jpg";
import ChinaWorker from "../../../static/assets/images/chinaWorker.jpg";
import Duck from "../../../static/assets/images/duck.jpg";
import Flowers from "../../../static/assets/images/flowers.jpg";
import HorseShoe from "../../../static/assets/images/horseShoe.jpg";
import Kfc from "../../../static/assets/images/kfc.jpg";
import Porcupine from "../../../static/assets/images/porcupine.jpg";
import Sunflower from "../../../static/assets/images/sunflower.jpg";

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
                                <img src={Flowers} />
                                <p>Title</p>
                            </div>
                            <div className="art">
                                <img src={ChinaWorker} />
                                <p>Title</p>
                            </div>
                        </div>
                </div>
                <div className="past-projects">
                    <h2>Past Projects</h2>
                        <div className="two-column-wrapper">
                        <div className="art">
                            <img src={Bunny} />
                            <p>Title</p>
                        </div>
                        <div className="art">
                            <img src={Duck} />
                            <p>Title</p>
                        </div>
                        <div className="art">
                            <img src={Porcupine} />
                            <p>Title</p>
                        </div>
                        <div className="art">
                            <img src={HorseShoe} />
                            <p>Title</p>
                        </div>
                        <div className="art">
                            <img src={Kfc} />
                            <p>Title</p>
                        </div>
                        <div className="art">
                            <img src={Sunflower} />
                            <p>Title</p>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    )
}