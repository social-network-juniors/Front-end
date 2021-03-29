import makeRequest from "../index";
import {getAuthorizationHeader} from "../../services";

export const requestProfile = makeRequest("profile", "POST", null, null, getAuthorizationHeader());
