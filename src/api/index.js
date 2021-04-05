import axios from "axios";

const instance = axios.create({
	baseURL: 'https://electroquest.ru/api/'
});


const makeRequest = function (url, method, data, params) {

	return instance(url, {
		method, data, params, headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	});
};
export default makeRequest;

export * from "./rest/login";
export * from "./rest/registration";
