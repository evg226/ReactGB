//не используется, логика перенесена в redux-thunk

import { ADD_MESSAGE, addMessage } from "./actions";
import { AUTHORS } from "../constants";

export const middleware = store => next => action => {
    if (action.type === ADD_MESSAGE && action.payload.message.author!==AUTHORS.BOT) {
        const timeout = setTimeout(() => {
            store.dispatch(addMessage(action.payload.userId,action.payload.chatId,{ id: new Date(), author: AUTHORS.BOT, text: "Ваше сообщение доставлено" }));
        }, 1500);
    }
    return next(action);    
}

