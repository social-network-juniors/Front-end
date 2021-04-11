import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Menu, MenuItem, Button } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
export default function GroupsList(props) {
    let data = props.groups;

    const [filterAnchor, setFilterAnchor] = useState(null);
    const closeFilterMenu = (type) => {
        setFilterAnchor(null);
        // if (type === 'default') {
        //     setFriends(friendsList);
        // }
    }
    const handleFilter = (event) => {
        setFilterAnchor(event.currentTarget);
    }
    let groups = data.map(
        (group) =>
            <div>
                <Link to={`/groups/${group.id}`}>
                    <img src={group.img} />
                    <div>{group.name}</div>
                </Link>
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleFilter}><MoreHorizIcon /></Button>
                <Menu
                    keepMounted
                    anchorEl={filterAnchor}
                    open={Boolean(filterAnchor)}
                    onClose={closeFilterMenu}
                >
                    <MenuItem onClick={() => closeFilterMenu('leave')}>Покинуть группу</MenuItem>
                    <MenuItem onClick={() => closeFilterMenu('unsubscibe')}>Отписаться от новостей</MenuItem>
                    <MenuItem onClick={() => closeFilterMenu('markFavourite')}>Отметить в избранное</MenuItem>
                </Menu>
            </div>
    )
    let searchGlobal =
        <div>
            <div>Похоже, что у вас нет групп</div>
        </div>;

    return (
        <div>
            {groups.length === 0 && searchGlobal || groups}
        </div>
    )
}