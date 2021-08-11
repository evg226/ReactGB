
import { ADD_CHAT, REMOVE_CHAT,ADD_MESSAGE, ADD_DEFAULT_CHAT } from "./actions";

const defaultChats = {
    "1": { name: "Главный", messages: [] },
    "2": { name: "Приватный", messages: [] },
}

const initialState =
{
    0: defaultChats,
    1: {}
}

export const reducerChats=(state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT: {
            const newChat = { name: action.payload.chatName, messages: [] };
            let newId;
            for (newId = 1; !!state[action.payload.userId][newId]; newId++){ }     
            return {
                ...state,
                [action.payload.userId]:
                {
                    ...state[action.payload.userId],
                    [newId]: newChat
                }
            };
        }
        case REMOVE_CHAT: {
            let chats = { ...state[action.payload.userId] };
            delete chats[action.payload.chatId];
                 return {
                ...state,
                [action.payload.userId]: chats 
            }
        }
        case ADD_MESSAGE: {
            return {
                ...state,
                [action.payload.userId]: {
                    ...state[action.payload.userId],
                    [action.payload.chatId]: {
                        ...state[action.payload.userId][action.payload.chatId],
                        messages: [
                            ...state[action.payload.userId][action.payload.chatId].messages,
                            action.payload.message
                        ]
                    }
                }
            }
        }
        case ADD_DEFAULT_CHAT: {
            return {
                ...state,
                [action.payload]:defaultChats
            }
        }
            
        default: return state;
    }
}

