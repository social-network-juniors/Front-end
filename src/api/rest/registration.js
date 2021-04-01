// import apiCall from '../apiCall'
// import makeRequest from "../index";



// export const registration = (
//     email,
//     password,
//     password_confirmation,
//     first_name,
//     last_name,
//     bday,
//     bmonth,
//     byear

// ) => {
//     return apiCall({
//         url: 'https://electroquest.ru/api/auth/register',
//         method: 'post',
//         data: {
//             "login": email,
//             "password": password,
//             "password_confirmation": password_confirmation,
//             "first_name": first_name,
//             "last_name": last_name,
//             "bday": bday,
//             "bmonth": bmonth,
//             "byear": byear
//         }
//     }).catch((error) => {
//         console.log(error.response.data);
//     });
// }
import makeRequest from "../index";

export const registration = (login, password, password_confirmation, name, lastName, bday, bmonth, byear) => makeRequest("auth/register", "POST", { login, password, password_confirmation, name, lastName, bday, bmonth, byear }, null);
