import "./style.scss";
import { Box, Button, CircularProgress, TextField, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import SendIcon from '@material-ui/icons/Send';
import { Link, useParams } from "react-router-dom";
import firebase from "../../Auth/firebase";
// import firebase from "firebase";

export default function Login() {

    const { signUp } = useParams();
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setError("");
    }, [signUp]);
    
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            if (signUp === "signup") {
                await firebase.auth().createUserWithEmailAndPassword(email, password);
            }
            await firebase.auth().signInWithEmailAndPassword(email, password);
        } catch (error) {
            setError(error.message);
        };
        setLoading(false);
    }

    return (
        <div className="signup container">
            {signUp === "signup" ? <h1>Регистрация</h1> : <h1>Вход</h1>}
            <form noValidate autoComplete="off" onSubmit={handleOnSubmit}>
                <Box className="signup__box">
                    <TextField className="signup__input-form" id="outlined-basic" label="your email" variant="outlined"
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                    <TextField className="signup__input-form" id="outlined-basic" label="your password" variant="outlined"
                           type="password" //ref={x => this.password = x}
                        value={password} onChange={(e) => setPassword(e.target.value)} />
                </Box>
                <Button className="signup__input-form" variant="outlined" disabled={loading} endIcon={<SendIcon>send</SendIcon>} type="submit" value="Отправить">Send</Button>
            </form>
            {loading ? <CircularProgress />:""}
            {error && <Typography variant="h5" className="signup__error" gutterBottom>{error}</Typography>}
            {signUp === "signup" ?
                <Typography variant="h5" className="signup__login" gutterBottom>Есть логин?&nbsp;&nbsp;
                    <Link to="/login">Войти</Link>
                </Typography>
                :
                <Typography variant="h5" className="signup__login" gutterBottom>Нет логина?&nbsp;&nbsp;
                    <Link to="/login/signup">Завести</Link>
                </Typography>
            }
        </div>
    )
}