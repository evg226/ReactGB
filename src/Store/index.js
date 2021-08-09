import { combineReducers, createStore } from "redux";
import { reducerProfile } from "./reducerProfile";
import { reducerChats } from "./reducerChats";
// import {reducerMessages} from "./reducerMessages";

export const store = createStore(
    combineReducers({
        profile: reducerProfile,
        chats: reducerChats,
        // messages:reducerMessages
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

 