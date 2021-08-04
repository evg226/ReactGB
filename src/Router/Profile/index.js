import "./style.scss";

import { useCallback } from 'react';
import { Typography, Paper, List, ListItem, Avatar, ListItemAvatar, ListItemText } from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';
// import { store } from "../../Store";
import {CHOOSE_USER} from "../../Store/action";

function Profile() {
    // const state = store.getState();
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    // const [dummy, setDummy] = useState();

    const setShowName = useCallback(() => {
        dispatch({ type:CHOOSE_USER});
        // setDummy({});
    }, [dispatch]);

    return (
        <div className="container">
            <Typography variant="h4" className="page-header"
                gutterBottom>Профиль пользователя</Typography>
            
            <Paper variant="outlined">
                <List className="user-list">
                    
                    <ListItem alignItems="flex-start" className={state.selected ? "user-item user-item_selected" : "user-item"} onClick={setShowName}>
                        <input className="user-check" type="checkbox" checked={state.selected} value={state.selected}  />
                        <ListItemAvatar>
                            <Avatar alt={state.username} src="img/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary={<Typography component="div" variant="body1" color="textPrimary">{state.username}</Typography>}
                            secondary={<Typography component="div" variant="body2" color="textPrimary">
                                <div>{state.name +" " + state.surname}</div>
                                <div>&nbsp;</div>
                                <div><b>Описание</b></div>
                                <div>dfdfd dfdsasd klklkl aasdlfkldsk a sdlkdlk a sdkfldskl a asdklksl</div>
                                
                            </Typography>}
                        />
                    </ListItem>
                </List>
            </Paper>

            
            
        </div>
    )
}

export default Profile;