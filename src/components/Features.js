import React from 'react';
import {Divider} from './Divider';

export class Features extends React.Component {
    render () {
        return (
            <section class="features">
                <h2>Features</h2>
                <Divider />
                <h3>Another Header</h3>
                <p>These are features</p>
            </section>
        );
    }
}