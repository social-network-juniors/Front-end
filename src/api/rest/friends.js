import apiCall from '../apiCall'

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
        url: 'https://electroquest.ru/api/friend/get',
        method: 'get',
        data: null,
        headers: header
    })
}


export const getFollowed = (header) => {

    return apiCall({
        url: 'https://electroquest.ru/api/friend/get',
        method: 'get',
        data: null,
        headers: header
    })
}