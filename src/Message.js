import "./message.scss";

import {Typography,ListItem,ListItemAvatar,Avatar,ListItemText} from '@material-ui/core';

function Message(props) {
    return (
            <ListItem alignItems="flex-start">
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

export default Message;