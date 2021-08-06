import "./style.scss";

import { useCallback } from 'react';
import { Typography, Paper, List, ListItem, Avatar, ListItemAvatar, ListItemText,Button } from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';
// import { store } from "../../Store";
import {CHOOSE_USER,ADD_USER} from "../../Store/action";

function Profile() {
    // const state = store.getState();
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    // const [dummy, setDummy] = useState();

    const setShowName = useCallback((id) => {
        dispatch({ type:CHOOSE_USER,id});
        // setDummy({});
    }, [dispatch]);

    const addNewUser = useCallback(() => {
        const newUser = {
            id:state.length,
            selected: false,
            name: "New User Name",
            surname: "New User Surname",
            username: "userlogin"
        }
        dispatch({ type:ADD_USER,newUser});
        // setDummy({});
    }, [dispatch,state.length]);

    return (
        <div className="container">
            <Typography variant="h4" className="page-header"
                gutterBottom>Профиль пользователя</Typography>
            
            <Paper variant="outlined">
                <List className="user-list">
                    { state.map (item=>
                        <ListItem alignItems="flex-start" key={ item.id} className={item.selected ? "user-item user-item_selected" : "user-item"} onClick={()=>setShowName(item.id)}>
                            <input className="user-check" type="checkbox" checked={item.selected} value={item.selected} readOnly />
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