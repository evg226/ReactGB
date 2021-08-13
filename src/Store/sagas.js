//Не используется из-за замены на thunk

import { put, takeLatest, delay } from "redux-saga/effects";
import { AUTHORS } from "../constants";
import { addMessage,ADD_MESSAGE_WITH_SAGA } from "./actions";

function* onAddMessageWithSaga(action) {
    yield put(addMessage(action.payload.userId,action.payload.chatId,action.payload.message));
    if (action.payload.message.author !== AUTHORS.BOT) {
        yield delay(1500);
        yield put(addMessage(action.payload.userId,action.payload.chatId, { id: new Date(), author: AUTHORS.BOT, text: "Ваше сообщение доставлено" }));
    }
}

export function* mySaga() {
    yield takeLatest(ADD_MESSAGE_WITH_SAGA, onAddMessageWithSaga);
}