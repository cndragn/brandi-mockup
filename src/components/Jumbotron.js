import React from 'react';
import Background from '../images/tealbg.jpg';

var sectionStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${Background})`
  };


export class Jumbotron extends React.Component {
    render() {
        return (
            <div style={ sectionStyle } class="jumbotron">
                <div class="container text">
                    <div>
                    <h1>Meet <span>Brandi</span>!</h1> 
                    <h2><span>/creative</span> one page template</h2> 
                    <h3 class="lined"><span>We are a team of professionals</span></h3>
                    </div>
                </div>
                <div class="container social">
                    Twitter | Facebook | Google+ | Dribbl
                </div>
            </div>
        );
    }
}

