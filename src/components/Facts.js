import React from 'react';
import {Divider} from './Divider';

export class Facts extends React.Component {
    render () {
        return (
            <section id="facts">
                <div class="container">
                    <h2>Some Fun Facts</h2>
                    <Divider />
                    <p>Very interesting things</p>
                </div>
            </section>
        );
    }
}