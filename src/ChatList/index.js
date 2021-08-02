import "./style.scss";
import { Paper, List } from '@material-ui/core/';
// import React from "react";

import { Typography, ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core';

function Chat({ chat }) {
    console.log(chat);
    return (
        <ListItem alignItems="center" className="chat">
            <ListItemAvatar>
                <Avatar alt={chat.name} src="img/1.jpg" />
            </ListItemAvatar>
            <ListItemText
                primary={<Typography component="span" variant="body1" color="textPrimary">{chat.name}</Typography>}
                // secondary={<Typography component="span" variant="body2" color="textPrimary">{props.chat.caption}</Typography>}
            />
        </ListItem>
    )
}

function ChatList({ chatId, chats }) {
    return (
        <Paper variant="outlined" className="messenger__chats">
            <Typography variant="h5" className="messenger__header" gutterBottom>Чаты</Typography>
            <List>
                {Object.keys(chats).map(id => <Chat key={id} chat={chats[id]} />)}
            </List>
        </Paper>
    )
}

export default ChatList;