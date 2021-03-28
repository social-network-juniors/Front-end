import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

import React from 'react'
import { Link } from 'react-router-dom';

export default function FriendItem(props) {
    let data = props.friends;

    let friends = data.map(
        (friend) =>
            <div>
                <img src={friend.avatar} />
                <div>{friend.name + ' ' + friend.lastName}</div>
                <Link to={`/profile/${friend.id}`}><Button color="secondary">Просмотреть профиль</Button></Link>
                <Link to={`/chat/${friend.id}`}><Button><ChatBubbleOutlineIcon /></Button></Link>
            </div>
    )
    let searchGlobal =
        <div>
            <div>У вас нет такого друга, глобальный поиск: </div>
            <SearchIcon />
        </div>;
    return (
        <div>
            {data.length === 0 && searchGlobal || friends}
        </div>
    )
}
