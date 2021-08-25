import "./style.scss";

import { Paper, List, Typography, ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core';

function MessageList({messageList}) {
    return (
        <Paper variant="outlined">
            <List className="message-list">{messageList.map(message => < Message key={message.id} mes={message} />)} </List>
        </Paper>
    )
}

export const Message=(props) =>{
    return (
            <ListItem alignItems="flex-start" className={props.mes.author==="Robot"?"message-item message-item_right":"message-item"}>
                <ListItemAvatar>
                    <Avatar alt={props.mes.author} src="img/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary={<Typography component="div" variant="body1" color="textPrimary">{props.mes.author}</Typography>}
                    secondary={<Typography component="div" variant="body2" color="textPrimary">{props.mes.text}</Typography>}
                />
            </ListItem>
    )
}

export default MessageList;