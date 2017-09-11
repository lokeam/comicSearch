import React, { Component } from 'react';
import ComicsList from '../containers/comics_list';
import { connect } from 'react-redux';

class CharacterListItem extends Component {
	constructor(props) {
		super(props);

		this.state = {selected: ''}
	}

	render() {
		return (
			<li className="character-list__item"
				key={this.props.name}
				id={this.props.id}

			>
				<div className="profile">
					<div className="profile__body">
						<div className="profile__header">
							<div className="profile__name">{this.props.name}</div>
							<div className="profile__id">id: {this.props.id}</div>
						</div>
						<div className="profile__comics">
						</div>
					</div>

				</div>

			</li>
		)
	}
}

function mapStateToProps(state) {
	return {
		comics: state.comics
	};
}

export default connect(mapStateToProps)(CharacterListItem);
