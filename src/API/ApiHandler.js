import api from './Client';

const getMovies = (page, language) => {
	return api.get(
		`/movies/${page}/${language}`
	);
};

const getMovie = (id, language) => {
	return api.get(
		`/movie/${id}/${language}`
	);
};
const searchMovie = (query,page=1) => {
	return api.get(
		`/search/${query}/${page}`
	);
};

export {
	getMovies,
	getMovie,
	searchMovie,
};

//https://www.youtube.com/watch?v=
