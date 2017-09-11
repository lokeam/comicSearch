import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCharacters } from '../actions/index';
import { replaceCharacters } from '../actions/index';
import { bindActionCreators } from 'redux';

class LetterList extends Component {

	handleClick(letter) {
		let charactersState = this.props.characters;
		if ( charactersState.length < 1 ) {
			this.props.fetchCharacters(letter);
		} else {
			this.props.replaceCharacters(letter);
		}
	}

	renderList() {
		return this.props.alphabet.map( (letter) => {
			return (
				<li className="alphabet__ltr"
				key={letter}
				onClick={ this.handleClick.bind(this, letter) }
				><span className>{letter}</span></li>
			);
		});
	}

	render(){
		return(
			<div>
					<ul className="alphabet">
						{this.renderList()}
					</ul>
			</div>

		);
	}
}

function mapStateToProps(state) {
	return {
		alphabet: state.alphabet,
		characters: state.characters
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchCharacters, replaceCharacters}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps )(LetterList);