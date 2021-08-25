import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { reducerProfile } from "./reducerProfile";
import { reducerChats } from "./reducerChats";
import { reducerGists } from "./reducerGists";
import persistReducer from "redux-persist/es/persistReducer";
// import { middleware } from "./middleware";
import thunk from "redux-thunk";
// import createSagaMiddleware from "redux-saga";
// import {mySaga} from "./sagas"
import storage from "redux-persist/lib/storage";

import persistStore from "redux-persist/es/persistStore";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: "messenger",
    storage
}

const mainReducers = combineReducers({
    profile: reducerProfile,
    chats: reducerChats,
    gists:reducerGists
});

const persistedReducer = persistReducer(persistConfig, mainReducers);

// const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(
        // middleware,
        thunk
        // sagaMiddleware
    ))
);

// sagaMiddleware.run(mySaga);

export const persistor = persistStore(store);

 