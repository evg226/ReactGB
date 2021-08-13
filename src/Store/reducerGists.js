import { LOADING_GISTS, SET_ERROR, SET_GISTS } from "./actions"

const initilaState = {
    gistList: [],
    loading: false,
    error:""
}

export const reducerGists = (state=initilaState,action) => {
    switch (action.type) {
        case LOADING_GISTS: return {
            ...state,
            loading:action.payload
        }
        case SET_GISTS: return {
            ...state,
            gistList:action.payload
        }
        case SET_ERROR: return {
            ...state,
            error:action.payload
        }
        default:return state
    }
}