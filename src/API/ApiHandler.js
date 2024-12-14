import api from './Client';

const MyHeader = {
	headers: {
		Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
	},
};

const getMovies = (page=1, language='hi') => {
	return api.get(
		`/discover/movie?&page=${page}&with_origin_country=IN&with_original_language=${language}`,{},MyHeader
	);
};

const getMovie = (id, language='hi') => {
	return api.get(
		`/movie/${id}?append_to_response=videos&with_origin_country=IN&with_original_language=${language}`,
		{},
		MyHeader
	);
};
const searchMovie = (query,page=1) => {
	return api.get(
		`/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`,
		{},
		MyHeader
	);
};
const userLogin = (data) => {
	return api.post(`/login`, data, {
		headers: { Authorization: localStorage.getItem('token') },
	});
};
const userSignUP = (data) => {
	return api.post(`/user`, data);
};

export { getMovies, getMovie, searchMovie, userLogin, userSignUP };

//https://www.youtube.com/watch?v=
