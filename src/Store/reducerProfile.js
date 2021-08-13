import {CHOOSE_USER,ADD_USER} from "./actions";

const initialState = {
    active: 0,
    list: [{
        id: 0,
        name: "Evgeny",
        surname: "Ivanov",
        username: "evg226"
    
    }, {
        id: 1,
        name: "Evgeny2",
        surname: "Ivanov2",
        username: "evg227"
    
    }]
}


export const reducerProfile = (state=initialState, action) => {
    switch (action.type) {
        case CHOOSE_USER: return { ...state, active: action.payload } ;
        case ADD_USER: return { active:state.active,list:[...state.list,action.payload] };

        default: return state;
    }
}
