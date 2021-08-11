import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { reducerProfile } from "./reducerProfile";
import { reducerChats } from "./reducerChats";
// import { middleware } from "./middleware";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage"
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: "messenger",
    storage
}

const mainReducers = combineReducers({
    profile: reducerProfile,
    chats: reducerChats,
});

const persistedReducer = persistReducer(persistConfig, mainReducers);

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(
        // middleware,
        thunk
    ))
);

export const persistor = persistStore(store);

 