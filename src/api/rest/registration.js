import apiCall from '../apiCall'
export const registration = (
    email,
    password,
    password_confirmation,
    first_name,
    last_name,
    bday,
    bmonth,
    byear

) => {
    return apiCall({
        url: 'https://electroquest.ru/api/auth/register',
        method: 'post',
        data: {
            "login": email,
            "password": password,
            "password_confirmation": password_confirmation,
            "first_name": first_name,
            "last_name": last_name,
            "bday": bday,
            "bmonth": bmonth,
            "byear": byear
        }
    }).catch((error) => {
        // if (error.message) {
        //     console.log(error.message);
        // } else { alert('super') }
        console.log(error.response.data);
    });
}