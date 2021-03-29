import axios from "axios";

const instance = axios.create({
	baseURL: process.env.REACT_APP_API_URI
});

const makeRequest = function (url, method, data, params, headers) {
	return instance(url, {
		method, data, params, headers
	});
};

export default makeRequest;

export * from "./rest/login";