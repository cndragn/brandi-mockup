import React from 'react';
import Background from '../images/tealbg.jpg';

var FontAwesome = require('react-fontawesome');

var sectionStyle = {
	backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${Background})`
};

class Jumbotron extends React.Component {
	render() {
		return (
			<div id="home" style={sectionStyle} className="jumbotron">
				<div className="container text">
					<div>
						<h1>
							Meet <span>Brandi</span>!
						</h1>
						<h2>
							<span>/creative</span> one page template
						</h2>
						<h3 className="lined">
							<em>We are a team of professionals</em>
						</h3>
					</div>
				</div>
				<div className="container social">
					<a href="http://www.twitter.com">
						<FontAwesome name="twitter" />
					</a>
					<a href="http://www.facebook.com">
						<FontAwesome name="facebook-f" />
					</a>
					<a href="http://www.google.com">
						<FontAwesome name="google-plus" />
					</a>
					<a href="http://www.google.com">
						<FontAwesome name="dribbble" />
					</a>
				</div>
			</div>
		);
	}
}

export default Jumbotron;
