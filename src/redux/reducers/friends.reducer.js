import { getFriends, getFollowers, getFollowed } from '../../api/rest/friends'

export const UserActionTypes = {
    LOADING_STARTED: "LOADING_STARTED",
    LOADING_FINISHED: "LOADING_FINISHED",
    SET_FRIENDS: "SET_FRIENDS",
    // ADD_TO_FRIENDS: "ADD_TO_FRIENDS",
    // ACCEPT_FRIEND: "ACCEPT_FRIEND",
    // REMOVE_FROM_FRIENDS: "REMOVE_FROM_FRIENDS",
    // REJECT_INVITE: "REJECT_INVITE",
    SET_FOLLOWERS: "GET_FOLLOWERS",
    SET_FOLLOWED: "GET_FOLLOWED",
};

/* Reducer */

const initState = {
    friends: [],
    followers: [],
    followed: [],
    isLoading: false,
};

export default (state = initState, action) => {
    switch (action.type) {

        case UserActionTypes.LOADING_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case UserActionTypes.LOADING_FINISHED:
            return {
                ...state,
                isLoading: false
            }
        case UserActionTypes.SET_FRIENDS:
            return {
                ...state,
                friends: action.payload
            }
        case UserActionTypes.SET_FOLLOWERS:
            return {
                ...state,
                followers: action.payload
            }
        case UserActionTypes.SET_FOLLOWED:
            return {
                ...state,
                followed: action.payload
            }
        /* DEFAULT */
        default:
            return state;

    }
};

/* Action creator */

export const UserActions = {
    loadOn: () => {
        return {
            type: UserActionTypes.LOADING_STARTED,
        }
    },
    loadOff: () => {
        return {
            type: UserActionTypes.LOADING_FINISHED,
        }
    },
    setFriends: (friends) => {
        return {
            type: UserActionTypes.SET_FRIENDS,
        }
    },
    setFriends: (followers) => {
        return {
            type: UserActionTypes.SET_FOLLOWERS,
        }
    },
    setFriends: (follows) => {
        return {
            type: UserActionTypes.SET_FOLLOWED,
        }
    },

};

//thunks
export const thunksCreators = {

    getFriends: (user_token) => {
        return (dispatch) => {
            dispatch(UserActions.loadOn())
            getFriends(user_token).then(
                (res) => {
                    dispatch(UserActions.loadOff())
                    dispatch(UserActions.setFriends(res.result))
                }
            )

        }
    },
    getFollowers: (user_token) => {
        return (dispatch) => {
            dispatch(UserActions.loadOn())
            getFollowers(user_token).then(
                (res) => {
                    dispatch(UserActions.loadOff())
                    dispatch(UserActions.setFollowers(res.result))
                }
            )

        }
    },
    getFollowed: (user_token) => {
        return (dispatch) => {
            dispatch(UserActions.loadOn())
            getFollowed(user_token).then(
                (res) => {
                    dispatch(UserActions.loadOff())
                    dispatch(UserActions.setFollowed(res.result))
                }
            )

        }
    },
    // removeFromFriends:
    //     addToFriends:
    //     acceptFriend
    // rejectInvite:

}
