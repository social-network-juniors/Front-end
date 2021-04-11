import React, { useState } from 'react'
import { Tab, Tabs, TextField, Button } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
// import { groupsThunk } from "../../redux/reducers/groups.reducer";
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import GroupsList from './GroupsList';

export default function Groups() {
    const [tab, setTab] = useState(0);
    const handleTabsMenu = (e, newValue) => {
        setTab(newValue);
    }
    const [search, setSearch] = useState('')
    const myGroups = useSelector(store => store.groups.userGroups);
    const allGroups = useSelector(store => store.groups.groups);



    return (
        <div>
            <Tabs value={tab} onChange={handleTabsMenu}>
                <Tab label={'Сообщества (' + allGroups.length + ')'} />
                <Tab label={'Управление (' + myGroups.length + ')'} />
            </Tabs>
            <Button>Создать сообщество</Button>

            <TextField label='Поиск...' value={search} onFocus={() => setTab(0)} onChange={(e) => setSearch(e.target.value)} variant="outlined"
                InputProps={{
                    endAdornment: (
                        <InputAdornment onClick={() => { alert('search') }} position="end">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
            {tab === 0 && <GroupsList groups={allGroups} />}

        </div>
    )
}
