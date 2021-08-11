import ChatList from "../../Components/ChatList";
import { useParams } from "react-router";
import { Typography } from '@material-ui/core/';

function Chats() {
    const {chatId} = useParams();
    
    return (
        <div className="container">
            <Typography variant="h4" className="page-header" gutterBottom>Страница чатов</Typography>
            <ChatList chatId={chatId} />
        </div>
    );

}

export default Chats;