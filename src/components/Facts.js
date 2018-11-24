import React from 'react';
import Divider from './Divider';
import Background from '../images/buildings-1837028.jpg';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faClock from '@fortawesome/fontawesome-free-solid/faClock';
import faUser from '@fortawesome/fontawesome-free-solid/faUser';
import faRocket from '@fortawesome/fontawesome-free-solid/faRocket';
import faTrophy from '@fortawesome/fontawesome-free-solid/faTrophy';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

var sectionStyle = {
	backgroundImage: `linear-gradient(rgba(36,55,68,0.7), rgba(36,55,68,0.7)), url(${Background})`
};

class Facts extends React.Component {
	constructor(props) {
		super(props);
		this.onVisibilityChange = this.onVisibilityChange.bind(this); // Bind for appropriate 'this' context
	}

	onVisibilityChange(isVisible) {
		if (isVisible) {
			console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
		}
	}

	// 	<VisibilitySensor
	// 	onChange={this.onVisibilityChange}
	// 	delayedCall // Prevents react apps triggering elements as visible before styles are loaded
	// >

	render() {
		return (
			<section id="facts" style={sectionStyle} resizemode="contain">
				<div className="container">
					<h2>Some Fun Facts</h2>
					<Divider />

					<div className="container-fluid row text-center">
						<div className="col-md-3">
							<div className="circle">
								<FontAwesomeIcon icon={faClock} />
							</div>
							<p className="num">
								<CountUp end={3200} />
							</p>
							<p>Hours of Work</p>
						</div>
						<div className="col-md-3">
							<div>
								<FontAwesomeIcon icon={faUser} />
							</div>
							<p className="num">
								<CountUp end={120} />
							</p>
							<p>Satisfied Clients</p>
						</div>
						<div className="col-md-3">
							<div>
								<FontAwesomeIcon icon={faRocket} />
							</div>
							<p className="num">
								<CountUp end={360} />
							</p>
							<p>Projects Delivered</p>
						</div>
						<div className="col-md-3">
							<div>
								<FontAwesomeIcon icon={faTrophy} />
							</div>
							<p className="num">
								<CountUp end={42} />
							</p>
							<p>Awards Won</p>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Facts;
