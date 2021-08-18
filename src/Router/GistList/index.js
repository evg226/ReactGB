import "./style.scss";
import { List, Typography, Paper, ListItem, ListItemText, ListItemAvatar, Avatar, CircularProgress, Button } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGists } from "../../Store/actions";
import { takeError, takeGistList, takeGistLoading } from "../../Store/selectors";

function GistList() {

    const dispatch = useDispatch();
    const gistList = useSelector(takeGistList);
    const loading = useSelector(takeGistLoading);
    const err = useSelector(takeError);
    
    useEffect(() => {
        dispatch(fetchGists());
    }, [dispatch]);

    const handleNew = () => {
        dispatch(fetchGists());
    }

    return (
        <div className="container">
            <Typography variant="h4" className="page-header"
                gutterBottom>Работа со сторонними API </Typography>
            <Paper variant="outlined">
                {   loading? <CircularProgress />:
                    err ?
                        <div className="error">
                            <Typography style={{color:"red"}} variant="h6">Ошибка запроса: {err}</Typography>
                            <Button variant="contained" color="secondary" onClick={handleNew} >Попробовать заново</Button>
                        </div>
                        :
                    <List>
                        {gistList.data.map((item) =>
                            <a href={item.api_link} key={item.id}>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar alt={item.url} src={`img/${item.id}.jpg`} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={<Typography component="div" variant="body1" color="textPrimary">{item.title}</Typography>}
                                        secondary={<Typography component="div" variant="body2" color="textPrimary">
                                            {item.artist_display}
                                        </Typography>}
                                    />
                                </ListItem>
                            </a>
                        )}
                    </List>
                }
            </Paper>
            </div>
    )
}

export default GistList;