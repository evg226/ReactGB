import { initChatsFromFB, LOAD_MESSAGES } from "../actions";
import { reducerChats,initialState } from "../reducerChats";

describe("Тестирование редьюсера. Проверка редьюсера чатов", () => {
    it("Проверка загрузки чатов из FB в Store после регистрации пользователя (FB - пустой)", () => {
        const expected = { "default": { name: "Главный", messages: [] } };
        const recived = reducerChats(undefined, {
            type: LOAD_MESSAGES,
            payload: null
        });
        expect(recived).toEqual(expected);
    });
    it("Проверка store после вызова функции загрузки сообщений из FB", () => {
        const store = reducerChats(initialState, initChatsFromFB());
        expect(store).toMatchSnapshot();
    });
});