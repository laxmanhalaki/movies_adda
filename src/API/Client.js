import {create} from 'apisauce';
export const ImgBaseUrl='http://image.tmdb.org/t/p/w400/';
export const ImgBaseUrlqty='http://image.tmdb.org/t/p/w1280/';
const api = create({
	baseURL: 'http://localhost:5000',
	accept: 'application/json',
});
export default api;
//'https://myadmin-lu8h.onrender.com'
//1280