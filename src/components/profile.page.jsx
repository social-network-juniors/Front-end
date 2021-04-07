import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { UserActions } from "../redux/reducers/user.reducer";
import { thunksCreators } from "../redux/reducers/user.reducer";

import { getAuthorizationHeader } from '../services'

function Profile(props) {
	const user = useSelector(store => store.user.data);
	console.log(user)
	const dispatch = useDispatch();
	let tokenHeader = getAuthorizationHeader();
	const getProfile = () => {
		dispatch(thunksCreators.getProfile(tokenHeader))
	}
	useEffect(() => {
		getProfile()
	}, [])
	const handleClick = () => dispatch(UserActions.changeLogged(false));

	return (
		<div>
			<p>Профиль пользователя: {user.first_name + ' ' + user.second_name}</p>
			<button onClick={handleClick}>Выйти</button>
		</div>
	)
}

export default Profile;