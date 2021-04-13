const initState = {
    isLoading: 0,
    isInProcess: false,
    groups: [{
        id: 2,
        name: 'Bookie',
        img: 'url',
        isFavourite: false,
    }],
    userGroups: [],
};

export default (state = initState, action) => {
    switch (action.type) {

        /* DEFAULT */
        default:
            return state;

    }
};


