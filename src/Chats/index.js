import ChatList from "../ChatList";
import MessageInputForm from "../MessageInputForm"
import { useState } from "react";
import { useParams } from "react-router";
import { Paper, Typography } from '@material-ui/core/';

const AUTHORS={
    BOT:"Robot",
    ME:"Evgeny"
}

const initialChats = {
    id1: { name: "Main", messages: [{ text: "Welcome to chat", author: AUTHORS.BOT}] },
    id2: { name: "Private", messages: [{ text: "Welcome to chat", author: AUTHORS.BOT}] },
}

function Chats() {
    const { chatId } = useParams();
    const [chats, setChats] = useState(initialChats);
    const [isInput, setIsInput] = useState(true);
    
    const addNewMessage = (newMessage) => {
        setChats(() => {
            
        });
        setIsInput(newMessage.author==="Robot"? true: false);
    }

    // useEffect(() => {
    //     if (!messageList.length || messageList[messageList.length - 1].id===1 || messageList[messageList.length - 1].author === "Robot") return;
    //     const timeout = setTimeout(() => {
    //         addNewMessage({ id: new Date(), author: "Robot", text: "Ваше сообщение доставлено" });
    //     }, 1500);
    //     return ()=>clearTimeout(timeout);
    // }, [messageList]);

    return (
        <div className="container">
            <Paper variant="outlined" className="messenger">
                <Typography variant="h4" className="messenger__header" gutterBottom>Мессенджер</Typography>
                <div className="messenger__box">
                    <ChatList chatId={chatId} chats={chats} />
                    <Paper variant="outlined" className="messenger__messages">
                        <Typography className="messenger__header" variant="h5" gutterBottom>Активный чат: {chats[chatId]}</Typography>
                        <MessageInputForm classList="messenger__input"
                            author={AUTHORS.ME} isInput={isInput} addMessage={addNewMessage} />
                        {/* <MessageList messageList={messageList} /> */}
                    </Paper>
                </div>
            </Paper>
        </div>
    );

}

export default Chats;