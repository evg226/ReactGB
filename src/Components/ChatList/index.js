import "./style.scss";
import MessageInputForm from "../MessageInputForm";
import MessageList from "../MessageList";
import { addChat,deleteChat, addMessageWithSaga } from "../../Store/actions";
import { getProfiles,getChatsByUserId } from "../../Store/selectors";
import {Link} from "react-router-dom";
import React, { useState, useRef, useCallback, useMemo } from "react";
import { Paper, List, Typography, ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { AUTHORS } from "../../constants";

function ChatList({ chatId }) {
    
    const profile = useSelector(getProfiles,shallowEqual);
    const activeUser = profile.list[profile.active];
    const getChats = useMemo(() => getChatsByUserId(activeUser.id),[activeUser]);
    const chats = useSelector(getChats);
    const dispatch = useDispatch();
    AUTHORS.ME = activeUser ? activeUser.name : AUTHORS.ME;
    
    const removeChat = useCallback((id) => {
        if (+id !== 0) dispatch(deleteChat(id, activeUser.id));
    }, [dispatch,activeUser]);

    const addNewChat = useCallback((newChatName) => {
        dispatch(addChat(newChatName,activeUser.id));
    }, [dispatch,activeUser]);

    const addNewMessage = useCallback((newMessage) => {
        dispatch(addMessageWithSaga (activeUser.id,chatId,newMessage));
        // setIsInput(newMessage.author==="Robot"? true: false);
    },[dispatch,activeUser,chatId]);
    
    return (
          <div className="messenger__box">
              <Paper variant="outlined" className="messenger__chats">
                  <Typography variant="h5" className="messenger__header" gutterBottom>Чаты</Typography>
                <List>
                    {Object.keys(chats).map(id =>
                          <Link key={id} to={`/chats/${id}`}><Chat key={id} id={id} chat={chats[id]} active={id === chatId} removeChat={removeChat} /></Link>
                    )}
                    <Chat addChat={ addNewChat}/>
                    </List>
              </Paper>
              <Paper variant="outlined" className="messenger__messages">
                  <Typography className="messenger__header" variant="h5" gutterBottom>
                      {(!!chats[chatId]) ? "Активный чат: " + chats[chatId].name : "Выберите чат"}
                  </Typography>
                  {
                      !!chats[chatId] &&
                      <>
                          <MessageInputForm className="messenger__input" author={AUTHORS.ME} /*isInput={isInput}*/ addMessage={addNewMessage} />
                          <MessageList messageList={chats[chatId].messages} />
                      </>
                  }
                </Paper>
            </div>
         )
}

function Chat({ id, chat, active, removeChat, addChat }) {
    const [newChatName, setNewChatName] = useState("Новый");
    const refInput = useRef(null);
    const newChatSet = (e) => setNewChatName(e.target.value);

    const addNewChat = (e) => {
        e.preventDefault();
        if (!!newChatName) {
            addChat(newChatName);
            setNewChatName("Новый");
        }
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
                        <Typography className="chat__text" component="span" variant="body1" color="textPrimary">{chat.name}</Typography>
                        :
                        <form action="" className="chat__form" onSubmit={addNewChat}>
                            <input className="chat__input" ref={refInput} type="text" value={newChatName} onChange={newChatSet} />
                            <input type="submit" className="chat__input chat__input-button" value="ОК" />
                        </form>
                }
            />
            {!addChat &&
                <div className="chat__close" onClick={removeThisChat}>x</div>
            }
        </ListItem>
    )
}

export default ChatList;