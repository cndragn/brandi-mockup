import React from 'react';
import {Divider} from './Divider';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faFeather from '@fortawesome/fontawesome-free-solid/faFeather'
import faPencil from '@fortawesome/fontawesome-free-solid/faPencilAlt'
import faBullhorn from '@fortawesome/fontawesome-free-solid/faBullhorn'

export class Features extends React.Component {
    render () {
        return (
            <div class="features">
                <section class="container">
                    <h2>Features</h2>
                    <Divider />
                    <div class="container-fluid row">
                        <div class="col-md-4">
                            <div>
                                <FontAwesomeIcon icon={faFeather} />
                            </div>
                            <div>
                                <h3>Branding</h3>                                
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</p>
                            </div>
                        </div>
                        
                        <div class="col-md-4">
                            <div>
                                <FontAwesomeIcon icon={faPencil} />
                            </div>
                            <div>
                                <h3>Development</h3>                                
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</p>
                            </div>
                        </div>
                        
                        <div class="col-md-4">
                            <div>
                                <FontAwesomeIcon icon={faBullhorn} />
                            </div>
                            <div>
                                <h3>Consulting</h3>                                
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}