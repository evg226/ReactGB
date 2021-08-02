import "./style.scss"
import Chats from "../Chats"
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";

function Router() {
    return (
        <BrowserRouter>
            <div className="container">
                <ul className="nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/chats">Chats</Link></li>
                </ul>
            </div>
            <Switch>
                <Route path="/profile">Профиль</Route>
                <Route path="/chats/:chatId?" exact><Chats /></Route>
                <Route path="/" exact>Домашняя страница</Route>
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