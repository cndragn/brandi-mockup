import React from 'react';
import {Divider} from './Divider';

export class Works extends React.Component {
    render () {
        return (
            <section id="works">
                <div className="container">
                    <div>
                        <h2>Works</h2>
                        <Divider />
                        <h3 className="text-center">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</h3>
                    </div>
                </div>
                <div>
                    Portfolio and stuff
                </div>
            </section>
        );
    }
}