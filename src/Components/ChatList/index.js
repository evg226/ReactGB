import "./style.scss";
import MessageInputForm from "../MessageInputForm";
import MessageList from "../MessageList";
import Chat from "./chat";
import { addChatWithFB, addMessageWithFireBase, initChatsFromFB, removeChatWithFB } from "../../Store/actions";
import { getChats, getProfiles } from "../../Store/selectors";
import {Link} from "react-router-dom";
import  { useCallback, useEffect } from "react";
import { Paper, List, Typography } from '@material-ui/core';
import { shallowEqual, useDispatch, useSelector } from "react-redux";


function ChatList({ chatId }) {
    
    const activeUser = useSelector(getProfiles, shallowEqual);
    const chats = useSelector(getChats,shallowEqual);
    const dispatch = useDispatch();
    
    const removeChat = useCallback((id) => {
        if (+id !== 0) dispatch(removeChatWithFB (id));
    }, [dispatch]);

    const addNewChat = useCallback((newChatName) => {
        dispatch(addChatWithFB(newChatName));
    }, [dispatch]);

    const addNewMessage = useCallback((newMessage) => {
        // dispatch(addMessageWithRobot(activeUser.id, chatId, newMessage));
        dispatch(addMessageWithFireBase(chatId, newMessage))
    },[dispatch,chatId]);
    
    
    useEffect(() => {
        dispatch(initChatsFromFB());
    }, []);

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
                          <MessageInputForm className="messenger__input" author={activeUser.name} /*isInput={isInput}*/ addMessage={addNewMessage} />
                          <MessageList messageList={chats[chatId].messages} />
                      </>
                  }
                </Paper>
            </div>
         )
}

export default ChatList;