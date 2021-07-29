import './App.scss';
import { useCallback, useEffect, useState } from 'react';
import { Paper, List, Typography } from '@material-ui/core/'

import MessageInputForm from "./MessageInputForm"
import Message from "./Message"
import Chat from "./Chat"

const currentAuthor = "Evgeny";
const chats = [
    { id: 1, caption: "Общий" },
    { id: 2, caption: "Приват" },
];

function App() {
    const [messageList, setMessageList] = useState([]);
    const [chatList, setChatList] = useState(chats);
    const [activeChat, setActiveChat] = useState(chats[0]);
    const [isInput, setIsInput] = useState(true);
    
    const addNewMessage = useCallback((newMessage) => {
        setIsInput(() => false);
        setMessageList(prevMessageList => [...prevMessageList, newMessage]);
    }, []);

    useEffect(() => {
        let robotProcessedTimeout;    
        if (messageList.length > 0 && messageList[messageList.length - 1].author === currentAuthor) {
            addNewMessage({ id: new Date(), author: "Robot", text: "Ваше сообщение: отправлено" });
            robotProcessedTimeout = setTimeout(() => {
                setMessageList(prevMessageList => {
                    prevMessageList[prevMessageList.length - 1].text += " и доставлено";
                    return prevMessageList;
                });
                setIsInput(() => true);
            }, 1500);
        }
        return () => clearTimeout(robotProcessedTimeout);
    }, [messageList]);

     const selectChat = useCallback((chat) => {
        setIsInput(() => true);        
        setActiveChat(() => chat);
        setMessageList(() => []);
    }, []);

    return (
        <div className="container">
            <Paper variant="outlined" className="messenger">
                <Typography variant="h4" gutterBottom>Мессенджер</Typography>
                <div className="messenger__box">
                    <Paper variant="outlined" className="messenger__chats">
                        <Typography variant="h5" gutterBottom>Чаты</Typography>
                        <List>{chatList.map(chat => <Chat key={chat.id} chat={chat} selectChat={selectChat} />)}</List>
                    </Paper>
                    <Paper variant="outlined" className="messenger__messages">
                        <Typography variant="h5" gutterBottom>Активный чат: {activeChat.caption}</Typography>
                            <MessageInputForm classList = "messenger__input"
                                author={currentAuthor} isInput={isInput} addMessage={addNewMessage} />
                            <Paper>
                                <List>{messageList.map(message => < Message key={message.id} mes={message}/>)}</List>
                            </Paper>
                    </Paper>
                </div>
            </Paper>
        </div>
    );
}

export default App;