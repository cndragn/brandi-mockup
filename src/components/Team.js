import React from 'react';
import {Divider} from './Divider';
import Woman from '../images/graffiti-girl-2468336.jpg';
import Man01 from '../images/male-model-2911329.jpg';
import Man02 from '../images/laughing-man-1690965.jpg';
import Man03 from '../images/smiling-man-888532.jpg';

export class Team extends React.Component {
    render () {
        return (
            <section id="team">
                <div class="container">
                    <h2>Meet Our Team</h2>
                    <Divider />
                    <h3 class="text-center">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</h3>
                    
                    <div class="container-fluid row text-center">
                        <div class="col-md-3">
                            <div class="info">
                                <img src={Man01} />
                                <p>John Filmr Doe</p>
                            </div>
                            <p>Managing Director</p>
                        </div>
                        <div class="col-md-3">
                        <div class="info">
                                <img src={Woman} />
                                <p>Chrystine Hineu</p>                                
                            </div>
                            <p>Lead Designer</p>
                        </div>
                        <div class="col-md-3">
                        <div class="info">
                                <img src={Man02} />
                                <p>Martin Matrone</p>                                
                            </div>
                            <p>Lead Developer</p>
                        </div>
                        <div class="col-md-3">
                        <div class="info">
                                <img src={Man03} />
                                <p>Steve Flaulkin</p>                                
                            </div>
                            <p>Sr. UI Designer</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}