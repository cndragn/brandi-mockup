import React from 'react';
import {Divider} from './Divider';
import Background from '../images/buildings-1837028.jpg';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faClock from '@fortawesome/fontawesome-free-solid/faClock';
import faUser from '@fortawesome/fontawesome-free-solid/faUser';
import faRocket from '@fortawesome/fontawesome-free-solid/faRocket';
import faTrophy from '@fortawesome/fontawesome-free-solid/faTrophy';

var sectionStyle = {
    backgroundImage: `linear-gradient(rgba(36,55,68,0.7), rgba(36,55,68,0.7)), url(${Background})`
    
  };

export class Facts extends React.Component {
    render () {
        return (
            <section id="facts" style={ sectionStyle } resizeMode='contain' >
                <div class="container">
                    <h2>Some Fun Facts</h2>
                    <Divider />
                    <div class="container-fluid row text-center">
                        <div class="col-md-3">
                            <div class="circle"><FontAwesomeIcon icon={faClock} /></div>
                            <p class="num">3200</p>
                            <p>Hours of Work</p>
                        </div>
                        <div class="col-md-3">
                            <div><FontAwesomeIcon icon={faUser} /></div>
                            <p class="num">120</p>
                            <p>Satisfied Clients</p>
                        </div>
                        <div class="col-md-3">
                            <div><FontAwesomeIcon icon={faRocket} /></div>
                            <p class="num">360</p>
                            <p>Projects Delivered</p>
                        </div>
                        <div class="col-md-3">
                            <div><FontAwesomeIcon icon={faTrophy} /></div>
                            <p class="num">42</p>
                            <p>Awards Won</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}