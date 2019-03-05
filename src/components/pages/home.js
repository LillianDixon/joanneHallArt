import React, {Component} from 'react';
import FouxLogo from "../../../static/assets/images/foux-logo.jpg";

export default function(){
    return(
        <div 
        className="home" 
        style={{
            backgroundImage: `url(${FouxLogo})`
        }}
        />
             
    )
}

