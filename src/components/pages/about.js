import React, {Component} from 'react';
import FamilyPhoto from "../../../static/assets/images/familyPhoto.jpg";

export default function(){
    return(
        <div className="about-wrapper">
            <div className="about-title">
                <h2>About Me</h2>
            </div>

            <div className="about-info-wrapper">
                <img src={FamilyPhoto}/>

                <div className="about-info">
                    <h2>Joanne Hall</h2>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                </div>
            </div>
        </div>
    )
}