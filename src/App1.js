import './App.scss';
import { useCallback, useEffect, useState } from 'react';
import { Paper, List, Typography } from '@material-ui/core/'

import MessageInputForm from "./MessageInputForm"
import MessageList from "./Message"
import Chat from "./Chat"

const currentAuthor = "Evgeny";
const chats = [
    { id: 1, caption: "Общий" },
    { id: 2, caption: "Приват" },
];

function App() {
    const [chatList] = useState(chats);
    const [activeChat, setActiveChat] = useState(chats[0]);
    const [messageList, setMessageList] = useState([{id:1,author:currentAuthor,text:"Вошел в чат: "+activeChat.caption}]);
    const [isInput, setIsInput] = useState(true);
    
    const addNewMessage = useCallback((newMessage) => {
        setMessageList(prevMessageList => [...prevMessageList, newMessage]);
        setIsInput(newMessage.author==="Robot"? true: false);
    }, []);

    useEffect(() => {
        if (!messageList.length || messageList[messageList.length - 1].id===1 || messageList[messageList.length - 1].author === "Robot") return;
        const timeout = setTimeout(() => {
            addNewMessage({ id: new Date(), author: "Robot", text: "Ваше сообщение доставлено" });
        }, 1500);
        return ()=>clearTimeout(timeout);
    }, [messageList]);

    const selectChat = useCallback((chat) => {
        setIsInput(() => true);        
        setActiveChat(() => chat);
        setMessageList(() => [{id:1,author:currentAuthor,text:"Вошел в чат: " + chat.caption}]);
    }, []);

    return (
        <div className="container">
            <Paper variant="outlined" className="messenger">
                <Typography variant="h4" className="messenger__header" gutterBottom>Мессенджер</Typography>
                <div className="messenger__box">
                    <Paper variant="outlined" className="messenger__chats">
                        <Typography variant="h5" className="messenger__header" gutterBottom>Чаты</Typography>
                        <List>{chatList.map(chat => <Chat key={chat.id} chat={chat} selectChat={selectChat} />)}</List>
                    </Paper>
                    <Paper variant="outlined" className="messenger__messages">
                        <Typography className="messenger__header" variant="h5" gutterBottom>Активный чат: {activeChat.caption}</Typography>
                        <MessageInputForm classList="messenger__input"
                            author={currentAuthor} isInput={isInput} addMessage={addNewMessage} />
                        <MessageList messageList={messageList} />
                    </Paper>
                </div>
            </Paper>
        </div>
    );
}

export default App;