import axios from 'axios';

export default ({url, method, data, params, header}) => {
	return axios({method, url, data, header, params});
}
