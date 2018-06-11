import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faHeart from '@fortawesome/fontawesome-free-regular/faHeart'
import faArrow from '@fortawesome/fontawesome-free-solid/faArrowRight'


export class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div class = "container">
                    <div class="row">
                        <div class = "about col-md-3">
                            <h2>Brandi</h2>
                            <p>eusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div class = "newletter col-md-3">
                            <h3>Subscribe</h3>
                            <form>
                                <div class="form-group">
                                    <input type="text" class="form-control"/><button type="submit"><FontAwesomeIcon icon={faArrow} /></button>
                                </div>
                            </form>
                            <p>eusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div class = "links col-md-3">
                            <h3>Explore</h3>
                            <div class="row">
                                <ul class="col-md-6">
                                    <li>Entavo</li>
                                    <li>Themecurve</li>
                                    <li>Kreativeshowcase</li>
                                    <li>Freebiescurve</li>
                                </ul>
                                <ul class="col-md-6">
                                    <li>Themeforest</li>
                                    <li>Microsoft</li>
                                    <li>Google</li>
                                    <li>Yahoo</li>
                                </ul>
                            </div>
                        </div>
                        <div class = "copyright col-md-3">
                            <p>
                                Created with <FontAwesomeIcon icon={faHeart} /> by themecurve, exclusive for Kreativeshowcase<br />
                                Developed by <a href="http://www.candicedavidson.com">Candice Davidson</a>
                            </p>
                            <p>2014 Brandi. All Rights Reserved.</p>
                        </div>
                    </div>                                        
                </div>
            </footer>
        );
    }
}
