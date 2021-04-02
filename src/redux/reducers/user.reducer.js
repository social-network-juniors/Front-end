import { login } from "../../api";

/* Types */

export const UserActionTypes = {
	LOGIN: "USER_LOGIN",
	CHANGE_LOGGED: "CHANGE_LOGGED",
};

/* Reducer */

const initState = {
	data: false,
	logged: false
};

export default (state = initState, action) => {
	switch (action.type) {

		/* LOGIN */
		case UserActionTypes.LOGIN:
			return {
				...state,
				data: action.payload
			};

		case UserActionTypes.CHANGE_LOGGED:
			return {
				...state,
				logged: action.payload
			}
		/* DEFAULT */
		default:
			return state;

	}
};

/* Action creator */

export const UserActions = {
	login: (login, password) =>
		async () => {
			try {
				const resp = await login(login, password);
				console.log(resp.data);
			} catch (err) {
				console.error("Ошибка атворизации.", err.message);
			}
		},
	changeLogged: (value) => {
		return {
			type: UserActionTypes.CHANGE_LOGGED,
			payload: value
		}
	}
};