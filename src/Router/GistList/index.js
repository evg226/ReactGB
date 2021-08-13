import { List, Typography, Paper, ListItem,ListItemText,ListItemAvatar, Avatar,CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import { API_URL_PUBLIC } from "../../constants";

// const gistList = [];

function GistList() {

    const [gistList, setGistList] = useState([]);
    const [err, setErr] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading (true);
        fetch(API_URL_PUBLIC)
            .then(responce => {
                if (!responce.ok) {
                    setErr(responce.status);
                    setLoading (false);
                    throw new Error("Ошибка запроса: " + responce.status);
                }
                return responce.json();
            })
            .then(result => {
                setGistList(result);
                setLoading (false);
            })
            .catch(error => {
                console.log(error);
                setLoading (false);
            });
    },[])

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