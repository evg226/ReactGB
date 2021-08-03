import "./style.scss";
import Home from "../Home";
import Profile from "../Profile";
import Chats from "../Chats";

import { BrowserRouter, Switch, Link, Route } from "react-router-dom";

function Router() {
    return (
        <BrowserRouter>
            <div className="container">
                <ul className="nav">
                    <li><Link to="/">Главная</Link></li>
                    <li><Link to="/profile">Профиль</Link></li>
                    <li><Link to="/chats">Чаты</Link></li>
                </ul>
            </div>
            <Switch>
                <Route path="/profile"><Profile /></Route>
                <Route path="/chats/:chatId?" exact><Chats /></Route>
                <Route path="/" exact><Home /></Route>
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