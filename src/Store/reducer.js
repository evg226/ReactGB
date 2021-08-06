import {CHOOSE_USER,ADD_USER} from "./action";

import {initialState} from "./initialState";

export const reducer = (state=initialState, action) => {
    switch (action.type) {
        case CHOOSE_USER: return state.map(item => { if (item.id === action.id) { item.selected = true } else { item.selected = false };return item  });
        case ADD_USER: return [ ...state, action.newUser ];

        default: return state;
    }
}
