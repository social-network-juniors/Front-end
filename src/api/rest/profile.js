import makeRequest from "../index";

export const getProfile = (header) => {
    return makeRequest("profile", "POST", null, null, header);
}

