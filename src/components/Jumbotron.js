import React from 'react';
import Background from '../images/tealbg.jpg';

var FontAwesome = require('react-fontawesome');

var sectionStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${Background})`
  };


export class Jumbotron extends React.Component {
    render() {
        return (
            <div style={ sectionStyle } className="jumbotron">
                <div class="container text">
                    <div>
                    <h1>Meet <span>Brandi</span>!</h1> 
                    <h2><span>/creative</span> one page template</h2> 
                    <h3 className="lined"><span>We are a team of professionals</span></h3>
                    </div>
                </div>
                <div className="container social">
                <a href="#"><FontAwesome name='twitter' /></a>
                <a href="#"><FontAwesome name='facebook-f' /></a>
                <a href="#"><FontAwesome name='google-plus' /></a>
                <a href="#"><FontAwesome name='dribbble' /></a>
                </div>
            </div>
        );
    }
}

