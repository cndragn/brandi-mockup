import React from 'react';
import {Divider} from './Divider';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faEnvelope from '@fortawesome/fontawesome-free-regular/faEnvelope'

var FontAwesome = require('react-fontawesome');

export class Contact extends React.Component {
    render () {
        return (
            <section id="contact">
                <div class="container">
                    <h2>Let's Discuss</h2>
                    <Divider />
                    <h3 class="text-center">Voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</h3>
                    <div class="contact-info row">
                        <div class="address col-3">
                            <p class="title">Cras at ultrices erat, sed vulputate!</p>
                            <p>2345 Setwant natrer, 1234,<br />
                            Washington, United States,<br />
                            (401) 1234 567<br />
                            hello@brandi.com<br />
                            www.brandi.com</p>
                        </div>
                        <div class="hello col">
                            <p class="title">Say hello!</p>
                            <form>
                                <div class="form-group">
                                    <div class="form-row">
                                        <div class="col-6">
                                            <input type="text" placeholder="Name" class="form-control" />
                                        </div>
                                        <div class="col-6">
                                            <input type="text" placeholder="Email" class="form-control" />  
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <input type="text" placeholder="Message" class="form-control" />
                                </div>
                                <div class="form-group text-right send">
                                <FontAwesomeIcon icon={faEnvelope} /><input type="submit" class="btn btn-text" value="Send Message" />
                                </div>
                            </form>
                        </div>
                        <div className="social col-1">
                            <a href="http://www.behance.com"><FontAwesome name='behance' /></a>
                            <a href="http://www.twitter.com"><FontAwesome name='twitter' /></a>
                            <a href="http://www.dribble.com"><FontAwesome name='dribbble' /></a>
                            <a href="http://www.facebook.com"><FontAwesome name='facebook-f' /></a>
                            <a href="http://www.google.com"><FontAwesome name='google-plus' /></a>                            
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}