import "./chat.scss";

import {Typography,ListItem,ListItemAvatar,Avatar,ListItemText} from '@material-ui/core';

function Chat(props) {
    return (
            <ListItem alignItems="center" className="chat" onClick={()=>props.selectChat(props.chat)}>
                <ListItemAvatar>
                    <Avatar alt={props.chat.caption} src="img/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary={<Typography component="span" variant="body1" color="textPrimary">{props.chat.caption}</Typography>}
                    // secondary={<Typography component="span" variant="body2" color="textPrimary">{props.chat.caption}</Typography>}
                />
            </ListItem>
    )
}

export default Chat;