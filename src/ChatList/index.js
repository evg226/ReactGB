import "./style.scss";
import React, { useState, useRef, useCallback,useEffect } from "react";
import MessageInputForm from "../MessageInputForm";
import MessageList from "../MessageList";
import {Link} from "react-router-dom";
import { Paper, List, Typography, ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core';

function Chat({ id, chat, active, removeChat, addChat }) {
    const [newChatName, setNewChatName] = useState("Новый..");
    const refInput = useRef(null);
    const newChatSet = (e) => setNewChatName(e.target.value);

    const addNewChat = (e) => {
        e.preventDefault();
        addChat(newChatName);
        setNewChatName("Новый..");
    }
    
    const removeThisChat = (e) => {
        e.preventDefault();
        removeChat(id);
    }
    
    return (
        <ListItem alignItems="center" className={active ? "chat chat_active" : "chat"} onClick={addChat?()=>refInput.current?.focus():null} >
            <ListItemAvatar>
                <Avatar alt={chat?chat.name:""} src="img/1.jpg" />
            </ListItemAvatar>
            <ListItemText
                primary={
                    !addChat ?
                        <Typography component="span" variant="body1" color="textPrimary">{chat.name}</Typography>
                        :
                        <form action="" className="chat__form" onSubmit={addNewChat}>
                            <input className="chat__input" ref={refInput} type="text" value={newChatName} onChange={newChatSet}/>
                        </form>
                        // <Typography component="span" variant="body1" color="textPrimary">{chat.name}+11111</Typography>
                }
                // secondary={<Typography component="span" variant="body2" color="textPrimary">{props.chat.caption}</Typography>}
            />
            {!addChat &&
                <div className="chat__close" onClick={removeThisChat}>x</div>
            }
        </ListItem>
    )
}

function ChatList({ chatId, chats, AUTHORS, addMessage, removeChat, addChat  }) {
    const [isInput, setIsInput] = useState(true);
    
    const addNewMessage = useCallback((newMessage) => {
        addMessage(newMessage);
        setIsInput(newMessage.author==="Robot"? true: false);
    }, [addMessage]);
    
    useEffect(() => {
        if (!chats[chatId] || !chats[chatId].messages.length ||
            chats[chatId].messages[chats[chatId].messages.length - 1].id === 1 ||
            chats[chatId].messages[chats[chatId].messages.length - 1].author === "Robot") return;
        const timeout = setTimeout(() => {
            addNewMessage({ id: new Date(), author: "Robot", text: "Ваше сообщение доставлено" });
        }, 1500);
        return ()=>clearTimeout(timeout);
    }, [chats]);
    
    return (
          <div className="messenger__box">
              <Paper variant="outlined" className="messenger__chats">
                  <Typography variant="h5" className="messenger__header" gutterBottom>Чаты</Typography>
                <List>
                    {Object.keys(chats).map(id =>
                          <Link key={id} to={`/chats/${id}`}><Chat key={id} id={id} chat={chats[id]} active={id === chatId} removeChat={removeChat} /></Link>
                    )}
                    <Chat addChat={ addChat}/>
                    </List>
              </Paper>
              <Paper variant="outlined" className="messenger__messages">
                  <Typography className="messenger__header" variant="h5" gutterBottom>
                      {(!!chats[chatId]) ? "Активный чат: " + chats[chatId].name : "Выберите чат"}
                  </Typography>
                  {
                      !!chats[chatId] &&
                      <>
                          <MessageInputForm className="messenger__input" author={AUTHORS.ME} isInput={isInput} addMessage={addNewMessage} />
                          <MessageList messageList={chats[chatId].messages} />
                      </>
                  }
                    
                        
                        
                </Paper>
            </div>
         )
}

export default ChatList;