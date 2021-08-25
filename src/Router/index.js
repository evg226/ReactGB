import "./style.scss";
import Home from "./Home";
import Profile from "./Profile";
import Chats from "./Chats";
import GistList from "./GistList";

import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import Login from "../Components/Login";
import { useEffect, useState } from "react";
import PrivateRoute from "../Auth/privateRoute";
import PublicRoute from "../Auth/publicRoute";
import firebase from "../Auth/firebase";

function Router() {

    const [auth, setAuth] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user => {
            if (user) {
                setAuth(true);
            } else {
                setAuth(false);
            }
        }));
    }, []);

    const logOut = async () => {
        try {
            await firebase.auth().signOut();
        } catch (e) {
            console.log(e);
        }
    }


    return (
        <BrowserRouter>
            <div className="container">
                <ul className="nav">
                    <li><Link to="/">Главная</Link></li>
                    <li><Link to="/chats">Чаты</Link></li>
                    {!auth ? <li><Link to="/login">Войти</Link></li>:<li><Link to="/profile">Профиль</Link></li>}
                    <li><Link to="/api">API</Link></li>
                </ul>
            </div>
            <Switch>
                <PrivateRoute auth={auth} path="/profile"><Profile logOut={ logOut } /></PrivateRoute>
                <PrivateRoute auth={auth} path="/chats/:chatId?" exact><Chats /></PrivateRoute>
                <Route auth={auth} path="/api"><GistList /></Route>
                <PublicRoute auth={auth} path="/login/:signUp?" exact><Login /></PublicRoute>
                {/* <Route path="/signup"><SignUp /></Route> */}
                <Route auth={auth} path="/" exact><Home /></Route>
                {/* <Route path="/path1" render={() => <Component />} />
                <Route path="/path2" component={Component} /> */}
                <Route>
                    <h3>Page not found</h3>
                </Route>
            </Switch>
        
        </BrowserRouter>
    )
}

export default Router;