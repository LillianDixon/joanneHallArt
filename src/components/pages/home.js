import React, {Component} from 'react';
import JHLogo from "../../../static/assets/images/JHLogo.png";

export default function(){
    return(
        <div className="home">
            <img src={JHLogo}/>
            <h1>Joanne Hall Art</h1>
            {console.log(process.env)}
                                     
        </div>
             
    )
}