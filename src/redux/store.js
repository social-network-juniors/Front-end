import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

/* Reducers */

import userReducer from "./reducers/user.reducer.js";
import friendsReducer from "./reducers/friends.reducer.js";
import chatReducer from "./reducers/chat.reducer.js";
import appReducer from "./reducers/app.reducer.js";
import groupsReducer from "./reducers/groups.reducer.js";



const rootReducer = combineReducers({

	app: appReducer,
	user: userReducer,
	friends: friendsReducer,
	chat: chatReducer,
	groups: groupsReducer,



});

/* Store */

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;