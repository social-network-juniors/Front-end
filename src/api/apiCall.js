import axios from 'axios';

export default ({ url, method, data, headers, params }) => {
	return axios({ method, url, data, headers, params });
}
