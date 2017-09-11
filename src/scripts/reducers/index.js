import { combineReducers } from 'redux';
import AlphabetReducer from './reducer_alphabet';
import CharactersReducer from './reducer_characters';
import ComicsReducer from './reducer_comics';

const rootReducer = combineReducers({
	alphabet: AlphabetReducer,
	characters: CharactersReducer,
	comics: ComicsReducer
});

export default rootReducer;
