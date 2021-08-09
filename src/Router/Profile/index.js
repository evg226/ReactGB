import "./style.scss";

import {getProfiles } from "../../Store/selectors";
import { useCallback } from 'react';
import { Typography, Paper, List, ListItem, Avatar, ListItemAvatar, ListItemText,Button } from '@material-ui/core/';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { changeUser, addUser } from "../../Store/actions";
import { addDefaultChat } from "../../Store/actions";

function Profile() {
    const dispatch = useDispatch();
    const state = useSelector(getProfiles, shallowEqual);
    
    const setUser = useCallback((id) => {
        dispatch(changeUser(id));
    }, [dispatch]);

    const addNewUser = useCallback(() => {
        const newUser = {
            id:state.list.length,
            name: "User Name",
            surname: "Surname",
            username: "userlogin"
        }
        dispatch(addUser(newUser));
        dispatch(addDefaultChat(newUser.id));
    }, [dispatch,state]);

    return (
        <div className="container">
            <Typography variant="h4" className="page-header"
                gutterBottom>Профиль пользователя</Typography>
            <Paper variant="outlined">
                <List className="user-list">
                    { state.list.map (item =>
                        <ListItem alignItems="flex-start" key={ item.id} className={item.id===state.active ? "user-item user-item_selected" : "user-item"} onClick={()=>setUser(item.id)}>
                            <input className="user-check" type="checkbox" checked={item.id===state.active} value={item.id===state.active} readOnly />
                        <ListItemAvatar>
                            <Avatar alt={item.username} src="img/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary={<Typography component="div" variant="body1" color="textPrimary">{item.username}</Typography>}
                            secondary={<Typography component="div" variant="body2" color="textPrimary">
                                <div>{item.name + " " + item.surname}</div>
                                <div>&nbsp;</div>
                                <div><b>Описание</b></div>
                                <div>dfdfd dfdsasd klklkl aasdlfkldsk a sdlkdlk a sdkfldskl a asdklksl</div>
                            </Typography>}
                        />
                        </ListItem>
                         )}
                </List>
            </Paper>
            <div className="user-button"><Button onClick={addNewUser} >Добавить пользователя</Button></div>
        </div>
    )
}

export default Profile;