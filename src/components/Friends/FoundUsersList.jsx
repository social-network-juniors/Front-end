import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import AddIcon from '@material-ui/icons/Add';
import React from 'react'
import { Link } from 'react-router-dom';

import { useDispatch } from "react-redux";
import { thunksCreators } from "../../redux/reducers/friends.reducer";

import { getAuthorizationHeader } from '../../services'

export default function FriendsList(props) {
    let data = props.users;
    console.log(data)

    const dispatch = useDispatch();

    let tokenHeader = getAuthorizationHeader();

    const addFriend = (id) => {
        console.log(tokenHeader, id)
        dispatch(thunksCreators.addToFriends(tokenHeader, id))

    }
    let users = data.map(
        (user) =>
            <div>
                <img src={user.avatar} />
                <div>{user.first_name + ' ' + user.last_name}</div>
                <Link to={`/profile/${user.id}`}><Button color="secondary">Просмотреть профиль</Button></Link>
                <Link to={`/chat/${user.id}`}><Button><ChatBubbleOutlineIcon /></Button></Link>
                <AddIcon onClick={() => addFriend(user.id)} />
            </div>
    )
    let searchGlobal =
        <div>
            <div>Другие пользователи не найдены</div>
        </div>;

    return (
        <div>
            {data.length === 0 && searchGlobal || users}
        </div>
    )
}
