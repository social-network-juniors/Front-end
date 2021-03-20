import apiCall from '../apiCall'

export const registration = ({
    login,
    password,
    password_confirmation,
    first_name,
    last_name,
    bday,
    bmonth,
    byear,
}) => {
    return apiCall({
        url: 'https://electroquest.ru/api/auth/register',
        method: 'post',
        data: {
            "login": "testruser@mail.com",
            "password": "123456",
            "password_confirmation": "123456",
            "first_name": "Сергей",
            "last_name": "Сергеев",
            "bday": 1,
            "bmonth": 1,
            "byear": 2020
        }
    }).catch((error) => {
        console.log(error.message)
    })
}