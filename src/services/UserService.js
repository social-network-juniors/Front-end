import {useState} from "react";
import {useSelector} from "react-redux";
import store from "../redux/store";
import {getCookie} from "../utils";

/* Regular */

export const isLogged = () => Boolean(store.getState().user.logged);

export const getAuthorizationToken = () => getCookie("AuthToken");
export const getAuthorizationHeader = () => ({Authorization: `Bearer ${getAuthorizationToken()}`});

/* Hooks */

export const useLogged = () => {
	const storeLogged = useSelector(store => store.user.logged);
	const [logged, setLogged] = useState(storeLogged);

	if (logged !== storeLogged)
		setLogged(storeLogged);

	return logged;
};