
import { AccessTimeTwoTone } from "@material-ui/icons";
import { logDOM } from "@testing-library/react";
import { ADD_CHAT, REMOVE_CHAT,ADD_MESSAGE, LOAD_MESSAGES } from "./actions";

const initialState = {
    "1": { name: "Главный", messages: [] },
}

export const reducerChats=(state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT: {
            let newId;
            for (newId = 1; !!state[newId]; newId++) { }
            return {
                ...state,
                [newId]: { name: action.payload.chatName, messages: [] }
            };
        }
        case REMOVE_CHAT: {
            let chats = { ...state };
            delete chats[action.payload.chatId];
            return chats;
        }
        case ADD_MESSAGE: {
            return {
                ...state,
                [action.payload.chatId]: {
                    ...state[action.payload.chatId],
                    messages: [
                        ...state[action.payload.chatId].messages,
                        action.payload.message
                    ]
                }
            }
        }
        case LOAD_MESSAGES:
            return action.payload;
            
        default: return state;
    }
}

