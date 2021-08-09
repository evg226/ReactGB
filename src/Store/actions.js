const CHOOSE_USER = "PROFILE::CHOOSE_USER";
const ADD_USER = "PROFILE::ADD_USER";

const ADD_CHAT = "CHATS::ADD_CHAT";
const REMOVE_CHAT = "CHATS::REMOVE_CHAT";
const ADD_MESSAGE = "CHATS::ADD_MESSAGE";
const ADD_DEFAULT_CHAT = "CHATS::ADD_DEFAULT_CHAT";

const changeUser = (userId) => {
    return {
        type: CHOOSE_USER,
        payload: userId
    }
}

const addUser = (newUser) => {
    return {
        type: ADD_USER,
        payload: newUser
    }
}

const addChat = (chatName, userId) => {
    return {
        type: ADD_CHAT,
        payload: { chatName, userId }
    }
}

const deleteChat = (chatId,userId) => {
    return {
        type: REMOVE_CHAT,
        payload: { chatId, userId }
    }
}

const addMessage = (userId, chatId, message) => {
    return {
        type: ADD_MESSAGE,
        payload: {  userId, chatId, message }
    }
}

const addDefaultChat = (userId) => {
    return {
        type: ADD_DEFAULT_CHAT ,
        payload: userId 
    }
}


module.exports = {CHOOSE_USER, changeUser, ADD_USER, addUser,addChat,ADD_CHAT,deleteChat, REMOVE_CHAT,addMessage,ADD_MESSAGE,addDefaultChat, ADD_DEFAULT_CHAT };


