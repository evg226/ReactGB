import {CHOOSE_USER} from "./action";

import {initialState} from "./initialState";

export const reducer = (state=initialState, action) => {
    switch (action.type) {
        case CHOOSE_USER: return { ...state, selected: !state.selected };
        
        default: return state;
    }
}
