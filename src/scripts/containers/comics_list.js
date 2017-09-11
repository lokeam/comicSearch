import React, { Component } from 'react';
import { connect } from 'react-redux';

class ComicsList extends Component {

	renderComics() {
		console.log('characterData from renderCharacters: ');
		return this.props.comics.map( (comic ) => {

			return (
				<li
					className="comic-list__item"
					key={comic.id}
				>
					<div className="comic-card">
						<p><span className="comic-card__label">title:</span> {comic.title}</p>
						<p><span className="comic-card__label">comic id:</span>  {comic.id}</p>
						<p><span className="comic-card__label">release date:</span>  {comic.dates[0].date}</p>
						<p><span className="comic-card__label">issue number:</span>  {comic.issueNumber}</p>
					</div>
				</li>
			);
		});
	}

	render() {
		return(
			<ul className="comic-list">
				{this.renderComics()}
			</ul>
		);
	}
}

function mapStateToProps(state) {
	return { comics: state.comics }
}

export default connect(mapStateToProps)(ComicsList);