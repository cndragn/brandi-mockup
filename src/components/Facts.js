import React from 'react';
import {Divider} from './Divider';

export class Facts extends React.Component {
    render () {
        return (
            <section>
                <h1>Some Fun Facts</h1>
                <Divider />
                <p>Very interesting things</p>
            </section>
        );
    }
}