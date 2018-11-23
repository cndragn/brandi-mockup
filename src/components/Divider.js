import React from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faHeart from '@fortawesome/fontawesome-free-regular/faHeart';

class Divider extends React.Component {
	render() {
		return (
			<div>
				<p className="lined">
					<em>
						<FontAwesomeIcon icon={faHeart} />
					</em>
				</p>
			</div>
		);
	}
}

export default Divider;
