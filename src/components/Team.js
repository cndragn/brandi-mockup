import React from 'react';
import Divider from './Divider';
import Woman from '../images/graffiti-girl-2468336.jpg';
import Man01 from '../images/male-model-2911329.jpg';
import Man02 from '../images/laughing-man-1690965.jpg';
import Man03 from '../images/smiling-man-888532.jpg';

var FontAwesome = require('react-fontawesome');

class Team extends React.Component {
	render() {
		return (
			<section id="team">
				<div className="container">
					<h2>Meet Our Team</h2>
					<Divider />
					<h3 className="text-center">
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
						laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
					</h3>

					<div className="container-fluid row text-center">
						<div className="col-md-3">
							<div className="info">
								<div className="bio">
									<img src={Man01} alt="" />
									<div className="bio-text">
										Loren gypsum dolor sit mate, time am tied. Ea alien um accustoms quo.
									</div>
									<div className="bio-fa">
										<FontAwesome name="twitter" />
										<FontAwesome name="facebook" />
										<FontAwesome name="google-plus" />
									</div>
								</div>
								<p>John Filmr Doe</p>
							</div>
							<p>Managing Director</p>
						</div>
						<div className="col-md-3">
							<div className="info">
								<div className="bio">
									<img src={Woman} alt="" />
									<div className="bio-text">
										Loren gypsum dolor sit mate, time am tied. Ea alien um accustoms quo.
									</div>
									<div className="bio-fa">
										<FontAwesome name="twitter" />
										<FontAwesome name="facebook" />
										<FontAwesome name="google-plus" />
									</div>
								</div>
								<p>Chrystine Hineu</p>
							</div>
							<p>Lead Designer</p>
						</div>
						<div className="col-md-3">
							<div className="info">
								<div className="bio">
									<img src={Man02} alt="" />
									<div className="bio-text">
										Loren gypsum dolor sit mate, time am tied. Ea alien um accustoms quo.
									</div>
									<div className="bio-fa">
										<FontAwesome name="twitter" />
										<FontAwesome name="facebook" />
										<FontAwesome name="google-plus" />
									</div>
								</div>
								<p>Martin Matrone</p>
							</div>
							<p>Lead Developer</p>
						</div>
						<div className="col-md-3">
							<div className="info">
								<div className="bio">
									<img src={Man03} alt="" />
									<div className="bio-text">
										Loren gypsum dolor sit mate, time am tied. Ea alien um accustoms quo.
									</div>
									<div className="bio-fa">
										<FontAwesome name="twitter" />
										<FontAwesome name="facebook" />
										<FontAwesome name="google-plus" />
									</div>
								</div>
								<p>Steve Flaulkin</p>
							</div>
							<p>Sr. UI Designer</p>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Team;
