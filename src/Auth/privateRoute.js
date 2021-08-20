import { Redirect, Route } from "react-router-dom";

export default function PrivateRoute({auth,...rest}){
    return auth ?
        (<Route {...rest} />) :
        (<Redirect to={{ pathname: "/login" }} />)
}