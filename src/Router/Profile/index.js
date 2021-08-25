import "./style.scss";

import {getProfiles } from "../../Store/selectors";
import { Typography, Paper, List, ListItem, Avatar, ListItemAvatar, ListItemText,Button } from '@material-ui/core/';
import { shallowEqual,  useSelector } from 'react-redux';

function Profile({logOut}) {
    const profile = useSelector(getProfiles, shallowEqual);
    
    return (
        <div className="container">
            <Typography variant="h4" className="page-header"
                gutterBottom>Профиль пользователя</Typography>
            <Paper variant="outlined">
                <List className="user-list">
                    <ListItem alignItems="flex-start" className="user-item">
                        <ListItemAvatar>
                            <Avatar alt={profile.username} src="img/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary={<Typography component="div" variant="body1" color="textPrimary">{profile.username}</Typography>}
                            secondary={<Typography component="div" variant="body2" color="textPrimary">
                                <div>{profile.name + " " + profile.surname}</div>
                                <div>&nbsp;</div>
                                <div><b>Описание</b></div>
                                <div>dfdfd dfdsasd klklkl aasdlfkldsk a sdlkdlk a sdkfldskl a asdklksl</div>
                            </Typography>}
                        />
                        </ListItem>
                </List>
            </Paper>
            <div className="user-button"><Button onClick={()=>logOut()} >Выйти</Button></div>
        </div>
    )
}

export default Profile;