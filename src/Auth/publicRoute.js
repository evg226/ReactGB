import { Redirect, Route } from "react-router-dom";

export default function PublicRoute({ auth, ...rest }) {
    return !auth ?
        <Route {...rest} /> :
        <Redirect to="/chats" />;
}