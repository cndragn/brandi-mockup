import React from 'react';
import Divider from './Divider';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faEnvelope from '@fortawesome/fontawesome-free-regular/faEnvelope';

var FontAwesome = require('react-fontawesome');

class Contact extends React.Component {
	render() {
		return (
			<section id="contact">
				<div className="container">
					<h2>Let's Discuss</h2>
					<Divider />
					<h3 className="text-center">
						Voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
						inventore
					</h3>
					<div className="contact-info row">
						<div className="address col-md-3">
							<p className="title">Cras at ultrices erat, sed vulputate!</p>
							<p>
								2345 Setwant natrer, 1234,<br />
								Washington, United States,<br />
								(401) 1234 567<br />
								hello@brandi.com<br />
								www.brandi.com
							</p>
						</div>
						<div className="hello col">
							<p className="title">Say hello!</p>
							<form>
								<div className="form-group">
									<div className="form-row">
										<div className="col-6">
											<input type="text" placeholder="Name" className="form-control" />
										</div>
										<div className="col-6">
											<input type="text" placeholder="Email" className="form-control" />
										</div>
									</div>
								</div>
								<div className="form-group">
									<input type="text" placeholder="Message" className="form-control" />
								</div>
								<div className="form-group text-right send">
									<FontAwesomeIcon icon={faEnvelope} />
									<input type="submit" className="btn btn-text" value="Send Message" />
								</div>
							</form>
						</div>
						<div className="social col-md-1">
							<a href="http://www.behance.com">
								<FontAwesome name="behance" />
							</a>
							<a href="http://www.twitter.com">
								<FontAwesome name="twitter" />
							</a>
							<a href="http://www.dribble.com">
								<FontAwesome name="dribbble" />
							</a>
							<a href="http://www.facebook.com">
								<FontAwesome name="facebook-f" />
							</a>
							<a href="http://www.google.com">
								<FontAwesome name="google-plus" />
							</a>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Contact;
