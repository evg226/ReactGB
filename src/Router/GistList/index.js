import { List, Typography, Paper, ListItem,ListItemText,ListItemAvatar, Avatar,CircularProgress } from "@material-ui/core";
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

    return (
        <div className="container">
            <Typography variant="h4" className="page-header"
                gutterBottom>Работа со сторонними API </Typography>
            <Paper variant="outlined">
                {   loading? <CircularProgress />:
                    err ? <Typography variant="h6">Ошибка запроса: {err}</Typography> :
                    <List>
                        {gistList.map((item) =>
                            <a href={item.html_url} key={item.id}>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar alt={item.url} src={`img/${item.id}.jpg`} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={<Typography component="div" variant="body1" color="textPrimary">{item.url}</Typography>}
                                        secondary={<Typography component="div" variant="body2" color="textPrimary">
                                            {item.updated_at}
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