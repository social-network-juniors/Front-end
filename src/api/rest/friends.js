import apiCall from '../apiCall'
import makeRequest from "../index";

export const getFriends = (header) => {

    return apiCall({
        url: 'https://electroquest.ru/api/friend/get',
        method: 'post',
        data: null,
        headers: header
    })
}


export const getFollowers = (header) => {

    return apiCall({
        url: 'https://electroquest.ru/api/followers',
        method: 'get',
        data: null,
        headers: header
    })
}


export const getFollowed = (header) => {

    return apiCall({
        url: 'https://electroquest.ru/api/followers/followed',
        method: 'get',
        data: null,
        headers: header
    })
}

export const findUsers = (header, name) => {

    return apiCall({
        url: 'https://electroquest.ru/api/profile/find-by-name',
        method: 'post',
        data: { 'name': name },
        headers: header
    })
}
export const addToFriends = (header, user_id) => {

    return apiCall({
        url: 'https://electroquest.ru/api/friend/add',
        method: 'post',
        data: { 'user_id': user_id },
        headers: header
    })
}
export const followUser = (header, user_id) => {

    return apiCall({
        url: 'https://electroquest.ru/api/followers/follow',
        method: 'post',
        data: { 'user_id': user_id },
        headers: header
    })
}

export const unfollowUser = (header, user_id) => {

    return apiCall({
        url: 'https://electroquest.ru/api/followers/unfollow',
        method: 'post',
        data: { 'user_id': user_id },
        headers: header
    })
}

