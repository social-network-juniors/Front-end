import React, { useState, useEffect } from 'react';

import InputAdornment from '@material-ui/core/InputAdornment';
import { Tab, Tabs, TextField, Menu, MenuItem, Button } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import SearchIcon from '@material-ui/icons/Search';
import SortIcon from '@material-ui/icons/Sort';
import FriendItem from './FriendItem';
import Invitations from './Invitations';

import { getFriends } from '../../api/rest/friends';
import axios from 'axios'

export default function Friends() {
    let data = [{ id: 10, name: 'Mark', lastName: 'Ben' }, { id: 2, name: 'Ivan', lastName: 'Lee' }];
    let inviteData = [{ id: 10, name: 'Vachier', lastName: 'Blanc' }, { id: 2, name: 'Sasha', lastName: 'Lee' }];
    const [search, setSearch] = useState('');
    const [friends, setFriends] = useState(data);
    const [tab, setTab] = useState(0);
    const [filterAnchor, setFilterAnchor] = useState(null);


    useEffect(() => {
        if (search != '') {
            setFriends([...data.filter((e) => e.name.toUpperCase().indexOf(search.toUpperCase(), 0) === 0 ||
                e.lastName.toUpperCase().indexOf(search.toUpperCase(), 0) === 0
            )])
        } else { setFriends(data) }
    }, [search])

    useEffect(() => {
        axios.get('/api/friend/get')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    const handleTabsMenu = (e, newValue) => {
        setTab(newValue);
        console.log(newValue);
    }
    const closeFilterMenu = (type) => {
        setFilterAnchor(null);
        if (type === 'alphabet') {
            let newSort = friends.sort(
                (a, b) => {
                    if (a.name > b.name) return 1;
                    if (a.name == b.name) return 0;
                    if (a.name < b.name) return -1;
                }
            );
            setFriends(newSort);
        }
        if (type === 'default') {
            setFriends(data);
        }
    }
    const handleFilter = (event) => {
        setFilterAnchor(event.currentTarget);
    }
    return (
        <div>
            <TextField label='Найти друга...' value={search} onFocus={() => setTab(0)} onChange={(e) => setSearch(e.target.value)} variant="outlined"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <SearchIcon onClick={() => console.log('')} />
                        </InputAdornment>
                    ),
                }}
            />
            <Tabs value={tab} onChange={handleTabsMenu}>
                <Tab icon={<PeopleIcon />} label="Друзья" />
                <Tab icon={<PersonAddIcon />} label="Заявки" />
            </Tabs>
            { tab === 0 && <div>
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleFilter}><SortIcon /></Button>
                <Menu
                    keepMounted
                    anchorEl={filterAnchor}
                    open={Boolean(filterAnchor)}
                    onClose={closeFilterMenu}
                >
                    <MenuItem onClick={() => closeFilterMenu('alphabet')}>По алфавиту</MenuItem>
                    <MenuItem onClick={() => closeFilterMenu('default')}>По умолчанию</MenuItem>
                </Menu>
            </div>}
            { tab === 0 ? <FriendItem friends={friends} /> : <Invitations invites={inviteData} />}

        </div >
    )
}
