import ChatList from "../ChatList";
import { useState,useCallback } from "react";
import { useParams } from "react-router";
import { Typography } from '@material-ui/core/';

const AUTHORS={
    BOT:"Robot",
    ME:"Evgeny"
}

const initialChats = {
    "0": { name: "Главный", messages: [{id:1, text: "Welcome to chat", author: AUTHORS.BOT}] },
    "1": { name: "Приватный", messages: [{id:1, text: "Welcome to chat", author: AUTHORS.BOT}] },
}

function Chats() {
    const { chatId } = useParams();
    const [chats, setChats] = useState(initialChats);
    
    const addMessage = useCallback(
        (newMessage) => {
            setChats(
                {
                    ...chats,
                    [chatId]: {
                        ...chats[chatId],
                        messages: [...chats[chatId].messages, newMessage]
                    }
                }
            )
        }, [chats, chatId]);
    
    const removeChat = (id) => {
        if (id == 0) return;
        let state = { ...chats };
        delete state[id];
        setChats(state);
    }

    const addChat = (newChatName) => {
         const newChat = { name: newChatName, messages: [{ id: 1, text: "Welcome to chat", author: AUTHORS.BOT }] };
         let newId;
         for (newId = 1; chats[newId]; newId++){ }
         setChats({ ...chats, [newId]: newChat });
    }

    return (
        <div className="container">
            <Typography variant="h4" className="page-header" gutterBottom>Страница чатов</Typography>
            <ChatList chatId={chatId} chats={chats} AUTHORS={AUTHORS} addMessage={addMessage} removeChat={removeChat} addChat={addChat}/>
        </div>
        
    );

}

export default Chats;