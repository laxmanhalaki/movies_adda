import api from './Client';

const getMovies = (page, language) => {
	return api.get(
		`/movies/${page}/${language}`,{},
		{headers:{'Authorization':localStorage.getItem('token')}}
	);
};

const getMovie = (id, language) => {
	return api.get(
		`/movie/${id}/${language}`,
		{},
		{ headers: { Authorization: localStorage.getItem('token') } }
	);
};
const searchMovie = (query,page=1) => {
	return api.get(
		`/search/${query}/${page}`,
		{},
		{ headers: { Authorization: localStorage.getItem('token') } }
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
