import axios from 'axios';

const API_KEY = 'c1b0de4b5a61e56f5e24f6c8b96130c7';
const ROOT_URL = `https://gateway.marvel.com:443/v1/public/characters`;

export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const FETCH_COMICS = 'FETCH_COMICS';
export const REPLACE_CHARACTERS = 'REPLACE_CHARACTERS';
export const REPLACE_COMICS = 'REPLACE_COMICS';

export function fetchCharacters(letter) {
	const url = `${ROOT_URL}?nameStartsWith=${letter}&limit=100&apikey=${API_KEY}`;
	console.log('inside fetchCharacters, url: ', url);
	const request = axios.get(url);

	console.log('fetchCharacters request: ', request);
	return {
		type: FETCH_CHARACTERS,
		payload: request
	}
}

export function replaceCharacters(letter) {
	const url = `${ROOT_URL}?nameStartsWith=${letter}&limit=100&apikey=${API_KEY}`;
	const request = axios.get(url);

	console.log('replace action');
	return {
		type: REPLACE_CHARACTERS,
		payload: request
	}
}

export function fetchComics(id) {
	const url = `${ROOT_URL}/${id}/comics?&limit=100&apikey=${API_KEY}`;
	const request = axios.get(url);
	console.log('fetchComics request: ', request);

	return {
		type: FETCH_COMICS,
		payload: request
	}
}
export function replaceComics(id) {
	const url = `${ROOT_URL}/${id}/comics?&limit=100&apikey=${API_KEY}`;
	const request = axios.get(url);
	console.log('fetchComics request: ', request);

	return {
		type: REPLACE_COMICS,
		payload: request
	}
}