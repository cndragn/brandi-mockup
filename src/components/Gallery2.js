import React from 'react';
import PICTURES from '../data/pictures';

const SinglePic = ({ category, name, url }) => (
	<div className="column col-md-3 branding">
		<div className={`category--${category} content circle`} />
		<img src={url} alt={name} />
	</div>
);

const PictureList = ({ state: { pictures, displayCategory } }) => (
	<div>
		{pictures
			.filter(({ category }) => displayCategory === category || displayCategory === 'all')
			.map(({ category, name, url }) => (
				<SinglePic key={`PictureList-${name}`} category={category} name={name} url={url} />
			))}
	</div>
);

const ButtonCategories = (picCategories, setCategory) =>
	picCategories.map((category) => (
		<button key={category} className={`btn-${category} btn`} onClick={() => setCategory(category)}>
			{category}
		</button>
	));

// data

// get unique category items
const eachPic = (x, i, array) => array.indexOf(x) === i;
const PICTURE_CATEGORIES = PICTURES.map((pic) => pic.category).filter(eachPic);

PICTURE_CATEGORIES.push('all');
PICTURE_CATEGORIES.sort();

class Gallery extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			displayCategory: 'all',
			pictures: PICTURES,
			picCategories: PICTURE_CATEGORIES
		};
		this.setCategory = this.setCategory.bind(this);
	}
	setCategory(category) {
		this.setState({
			displayCategory: category
		});
	}
	render() {
		return (
			<div id="gallery">
				<div id="myBtnContainer" className="box flex-col">
					{ButtonCategories(this.state.picCategories, this.setCategory)}
				</div>
				<div className="box flex-col">
					<PictureList state={this.state} />
				</div>
			</div>
		);
	}
}

export default Gallery;
