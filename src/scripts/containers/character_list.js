import React, { Component } from 'react';
import ComicsList from '../containers/comics_list';
import CharacterListItem from '../components/character_list_item';
import { fetchComics } from '../actions/index';
import { replaceComics } from '../actions/index';
import { bindActionCreators} from 'redux';

import { connect } from 'react-redux';


class CharacterList extends Component {
	constructor() {
		super()

		this.state = {
			selected: ''
		}
		this.renderCharacters = this.renderCharacters.bind(this);
	}

	renderCharacters() {
		console.log('characterData from renderCharacters: ');
		let { handleClick } = this.props;

		return this.props.characters.map( (character ) => {
			return (
				<CharacterListItem key={character.name} name={character.name} id={character.id}/>
			);
		});
	}

	render() {

		return (
			<div className="character-wrapper">
				<div className="character-wrapper__tab-corner"></div>
				<ul className="character-list">
						{this.renderCharacters()}
				</ul>
				<div className="character-wrapper__tab-lower"></div>
			</div>
		);
	}
}

function mapStateToProps( {characters} ) {
	return { characters };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchComics, replaceComics}, dispatch);
}

export default connect(mapStateToProps)(CharacterList);