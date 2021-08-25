import "./app.css";
import Router from "./Router";
import { Provider } from "react-redux";
import { persistor, store } from "./Store";
import { PersistGate } from "redux-persist/integration/react";
import { CircularProgress } from "@material-ui/core";
import "./Auth/firebase";

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={<CircularProgress />}>
                <Router />
            </PersistGate>                
        </Provider>
    )
}

export default App;