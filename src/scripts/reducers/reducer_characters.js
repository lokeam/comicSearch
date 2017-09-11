import { FETCH_CHARACTERS } from '../actions/index';
import { REPLACE_CHARACTERS } from '../actions/index';

export default function(state = [], action) {
	console.log('action received, ', action);
	switch (action.type) {
		case FETCH_CHARACTERS:
			return state.concat(action.payload.data.data.results);

		case REPLACE_CHARACTERS:
			return state.splice().concat(action.payload.data.data.results);
	}
	return state;
}