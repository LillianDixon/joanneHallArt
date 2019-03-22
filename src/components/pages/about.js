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
                        <p>I love art…creating art, teaching art, studying art and hanging out with artists. To me there is no better therapy than total immersion in the creative process. <br></br><br></br>However, I have not been a consistent dedicated creator. More than once I have put away my art for months (sometimes maybe even a year or two) while other “life happenings” commanded front stage.<br></br><br></br>This is my renewed commitment to growth, realization, dedication and experimentation. It’s my journeys in art.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}