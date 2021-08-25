import {ADD_USER} from "./actions";

const initialState = {
    id: 0,
    name: "Evgeny",
    surname: "Ivanov",
}


export const reducerProfile = (state=initialState, action) => {
    switch (action.type) {
        case ADD_USER: return {
            ...state,
            id:action.payload.id,
            name: action.payload.name,
            surname: action.payload.surname
        };

        default: return state;
    }
}
