import { AUTHORS } from "../constants";

export const CHOOSE_USER = "PROFILE::CHOOSE_USER";
export const ADD_USER = "PROFILE::ADD_USER";

export const ADD_CHAT = "CHATS::ADD_CHAT";
export const REMOVE_CHAT = "CHATS::REMOVE_CHAT";
export const ADD_MESSAGE = "CHATS::ADD_MESSAGE";
export const ADD_DEFAULT_CHAT = "CHATS::ADD_DEFAULT_CHAT";

export const changeUser = (userId) => {
    return {
        type: CHOOSE_USER,
        payload: userId
    }
}

export const addUser = (newUser) => {
    return {
        type: ADD_USER,
        payload: newUser
    }
}

export const addChat = (chatName, userId) => {
    return {
        type: ADD_CHAT,
        payload: { chatName, userId }
    }
}

export const deleteChat = (chatId,userId) => {
    return {
        type: REMOVE_CHAT,
        payload: { chatId, userId }
    }
}

export const addMessage = (userId, chatId, message) => {
    return {
        type: ADD_MESSAGE,
        payload: {  userId, chatId, message }
    }
}

let timeOut;

export const addMessageWithRobot = (userId, chatId, message) => (dispatch) => {
    dispatch(addMessage(userId, chatId, message));
    if (timeOut) clearTimeout(timeOut);
    timeOut=setTimeout(() => {
        dispatch(addMessage(userId, chatId, { id: new Date(), author: AUTHORS.BOT, text: "Ваше сообщение доставлено" }));
    },1500);
}

export const addDefaultChat = (userId) => {
    return {
        type: ADD_DEFAULT_CHAT ,
        payload: userId 
    }
}


// module.exports = {CHOOSE_USER, changeUser, ADD_USER, addUser,addChat,ADD_CHAT,deleteChat, REMOVE_CHAT,addMessage,ADD_MESSAGE,addDefaultChat, ADD_DEFAULT_CHAT };


