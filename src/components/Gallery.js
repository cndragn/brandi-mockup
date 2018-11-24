import React from 'react';
import PICTURES from '../data/pictures';

const SinglePic = ({ category, name, url }) => (
	<div className="pic">
		<img className={`category--${category}`} src={url} alt={name} />
	</div>
);

const PictureList = ({ state: { pictures, displayCategory } }) => (
	<div id="gallery">
		{pictures
			.filter(({ category }) => displayCategory === category || displayCategory === 'All')
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

PICTURE_CATEGORIES.push('All');
PICTURE_CATEGORIES.sort();

class Gallery extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			displayCategory: 'All',
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
			<div>
				<div id="myBtnContainer">{ButtonCategories(this.state.picCategories, this.setCategory)}</div>
				<PictureList state={this.state} />
			</div>
		);
	}
}

export default Gallery;
