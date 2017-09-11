import { FETCH_COMICS } from '../actions/index';
import { REPLACE_COMICS } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_COMICS:
		console.log('fetch comics action received: ', action);
			return state.concat(action.payload.data.data.results);

		case REPLACE_COMICS:
			console.log('replace comics reducer switch case logged');
	}
	return state;
}