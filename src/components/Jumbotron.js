import React from 'react';
import Background from '../images/tealbg.jpg';

var sectionStyle = {
    backgroundImage: `url(${Background})`
  };


export class Jumbotron extends React.Component {
    render() {
        return (
            <div style={ sectionStyle } class="jumbotron">
                <div class="container">
                    Stuff
                </div>
            </div>
        );
    }
}

