import makeRequest from "../index";

export const login = (login, password) => makeRequest("auth/login", "POST", { login, password }, null);
