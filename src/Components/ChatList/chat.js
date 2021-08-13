import { useState, useRef } from "react";
import { Typography, ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core';

export default function Chat({ id, chat, active, removeChat, addChat }) {
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