// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.scss';
import MessageInputForm from "./MessageInputForm"
import Message from "./Message"

function App() {
  let currentAuthor = "Evgeny";
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    if (messageList.length > 0 && messageList[messageList.length - 1].author == currentAuthor) {
      const robotSay = (robotText) => {
        addNewMessage({ id: new Date(), author: "Robot", text: robotText });
      }
      robotSay(`${currentAuthor}, от Вас получено сообщение "${messageList[messageList.length - 1].text}"`);
      setTimeout(() => {
        robotSay(`${currentAuthor}, обработано Ваше сообщение "${messageList[messageList.length - 1].text}"`);
      }, 1500);
    }
  }, [messageList]);

  const addNewMessage = (newMessage) => {
    setMessageList(prevMessageList => [...prevMessageList, newMessage]);
  }

  return (
    <div className="container">
      <div className="messenger" >
        <div className="messenger__container">
          <h1 className="messenger__header">Мессенджер</h1>
          <MessageInputForm classList="messenger__input" author={currentAuthor} addMessage={addNewMessage} />
          <div className="messenger__items">
            <h2 className="messenger__items-header">Сообщения</h2>
            {messageList.map(message => <Message key={message.id} mes={message} />)}
          </div>
        </div>
      </div >
    </div >
  );
}

export default App;
