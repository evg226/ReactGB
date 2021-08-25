import { render } from "@testing-library/react";
import MessageList, {Message}  from "../MessageList";


describe("Тестирование компонента-контейнера MessageList и презентационного - message", () => {
    it("MessageList c параметрами", () => {
        const component = render(<MessageList messageList={[{ id: 1, Author: "Me", text: "Hello" }]} />);
        const message = component.getByText("Hello");
        expect(message).toBeInTheDocument(); //проверяет присутствие сообщения в дочернем элементе
    });
    it("MessageList c пустыми параметрами", () => {
        const component = render(<MessageList messageList={[]} />);
        expect(component).toMatchSnapshot(); 
    });
    it("Message c параметрами", () => {
        const component = render(<Message mes={{ id: 1, author: "Me", text: "Hello" }}/>);
        expect(component).toMatchSnapshot();
    });
})