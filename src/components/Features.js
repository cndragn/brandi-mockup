import React from 'react';
import {Divider} from './Divider';

export class Features extends React.Component {
    render () {
        return (
            <div class="features">
                <section class="container">
                    <h2>Features</h2>
                    <Divider />
                    <div class="container-fluid row">
                        <div class="col">
                        <h3>Branding</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</p>
                        </div>
                        <div class="col">
                        <h3>Development</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</p>
                        </div>
                        <div class="col">
                        <h3>Consulting</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}