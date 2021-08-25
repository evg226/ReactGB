import { API_URL_PUBLIC, AUTHORS } from "../constants";
import firebase from "../Auth/firebase";

export const ADD_USER = "PROFILE::ADD_USER";

export const ADD_CHAT = "CHATS::ADD_CHAT";
export const REMOVE_CHAT = "CHATS::REMOVE_CHAT";
export const ADD_MESSAGE = "CHATS::ADD_MESSAGE";
export const ADD_DEFAULT_CHAT = "CHATS::ADD_DEFAULT_CHAT";
export const LOAD_MESSAGES = "CHATS::LOAD_MESSAGES";
// export const ADD_MESSAGE_WITH_SAGA = "CHATS::ADD_MESSAGE_WITH_SAGA";

export const LOADING_GISTS = "GISTS::LOADING_GISTS";
export const SET_GISTS = "GISTS::SET_GISTS";
export const SET_ERROR = "GISTS::SET_ERROR";

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


export const addMessageWithFireBase = (chatId,message) => async () => {
    firebase.database()
            .ref("chats")
            .child(chatId)
            .child("messages")
            .child(message.id)
            .set(message);
}

export const addChatWithFB = (chatName) => async (dispatch,) => {
    const newchatId=Date.now();
    
    const chat = { name: chatName, messages: [{ id: 1, author: "", text: "Welcome" }] }
    firebase.database()
        .ref("chats")
        .child(newchatId)
        .set(chat);

}

export const removeChatWithFB = (chatId) => async (dispatch) => {
    firebase.database()
        .ref("chats")
        .child(chatId)
        .remove();
}

export const initChatsFromFB = () => async (dispatch) => {
    firebase.database()
        .ref("chats")
        .on("value", (snapshot) => {
            let chats;
            snapshot.forEach(snap => {
                chats = {
                    ...chats,
                    [snap.key]: { name: snap.val().name, messages:  Object.values(snap.val().messages) }
                };
            });
            dispatch({
                type: LOAD_MESSAGES,
                payload: chats||true
            });
        })


}

let timeOut;

export const addMessageWithRobot = (userId, chatId, message) => (dispatch) => {
    dispatch(addMessage(userId, chatId, message));
    if (timeOut) clearTimeout(timeOut);
    timeOut=setTimeout(() => {
        dispatch(addMessage(userId, chatId, { id: new Date(), author: AUTHORS.BOT, text: "Ваше сообщение доставлено" }));
    },1500);
}

// export const addMessageWithSaga = (userId, chatId, message) => {
//     return {
//         type: ADD_MESSAGE_WITH_SAGA,
//         payload: {  userId, chatId, message }
//     }
// }

export const addDefaultChat = (userId) => {
    return {
        type: ADD_DEFAULT_CHAT ,
        payload: userId 
    }
}

export const loadingGists = (loadingStatus) => {
    return {
        type: LOADING_GISTS,
        payload: loadingStatus
    }
}

export const setGists = (gistList) => {
       return {
           type: SET_GISTS,
           payload: gistList
    }
}

export const setError = (err) => {
    return {
        type: SET_ERROR,
        payload:err
    }
}

export const fetchGists = () => (dispatch) => {    
    dispatch(loadingGists(true));
    dispatch(setError(null));
    fetch(API_URL_PUBLIC)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.status);
                }
                return response.json();
            })
          .then(result => {
                dispatch(setGists(result));
                dispatch(loadingGists(false));
            })
            .catch(error => {
                console.log(error);
                dispatch(loadingGists(false));
                dispatch(setError(error.message));
            });
}



