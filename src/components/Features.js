import React from 'react';
import {Divider} from './Divider';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faFeather from '@fortawesome/fontawesome-free-solid/faFeather'
import faPencil from '@fortawesome/fontawesome-free-solid/faPencilAlt'
import faBullhorn from '@fortawesome/fontawesome-free-solid/faBullhorn'

export class Features extends React.Component {
    render () {
        return (
            <section id="features">
                <div className="container">
                    <h2>Features</h2>
                    <Divider />
                    <div className="container-fluid row">
                        <div className="col-md-4">
                            <div>
                                <FontAwesomeIcon icon={faFeather} />
                            </div>
                            <div>
                                <h4>Branding</h4>                                
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</p>
                            </div>
                        </div>
                        
                        <div className="col-md-4">
                            <div>
                                <FontAwesomeIcon icon={faPencil} />
                            </div>
                            <div>
                                <h4>Development</h4>                                
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</p>
                            </div>
                        </div>
                        
                        <div className="col-md-4">
                            <div>
                                <FontAwesomeIcon icon={faBullhorn} />
                            </div>
                            <div>
                                <h4>Consulting</h4>                                
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}