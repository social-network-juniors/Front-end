import { Button } from '@material-ui/core';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NotificationsIcon from '@material-ui/icons/Notifications';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import AddIcon from '@material-ui/icons/Add';
import React from 'react'
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";
import { friendsThunk } from "../../redux/reducers/friends.reducer";

import { getAuthorizationHeader } from '../../services'

export default function FriendsList(props) {
    let data = props.users;
    console.log(data)

    const dispatch = useDispatch();
    const isInProcess = useSelector(store => store.friends.isInProcess);
    let tokenHeader = getAuthorizationHeader();

    const addFriend = (id) => {
        // if (isInProcess) return;
        dispatch(friendsThunk.addToFriends(tokenHeader, id))
    }
    const follow = (id) => {
        if (isInProcess) return;
        dispatch(friendsThunk.followUser(tokenHeader, id))
        dispatch(friendsThunk.getFollowed(tokenHeader))

    }
    let users = data.map(
        (user) =>
            <div>
                <img src={user.avatar} />
                <div>{user.full_name}</div>
                <Link to={`/profile/${user.id}`}><Button color="secondary">Просмотреть профиль</Button></Link>
                <Link to={`/chat/${user.id}`}><Button><ChatBubbleOutlineIcon /></Button></Link>
                {user.network_status === 'online' ? <FiberManualRecordIcon /> : null}

                <div onClick={() => addFriend(user.id)}>Добавить в друзья</div>
                <NotificationsIcon onClick={() => follow(user.id)} />
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
