import { useState } from "react";
import "./MessageInputForm.scss";

function MessageInputForm(props) {

  const [currentMessageText, setCurrentMessageText] = useState("");
  const newMessgeChange = e => setCurrentMessageText(e.target.value);

  const sendNewMessage = e => {
    e.preventDefault();
    if (!currentMessageText) return;
    props.addMessage({ id: props.author + new Date(), author: props.author, text: currentMessageText });
    setCurrentMessageText("");
  };

  return (
    <form name="newMessage" onSubmit={sendNewMessage}>
      <input className="text" type="text" value={currentMessageText} onChange={newMessgeChange} disabled={!props.isInput}></input>
      <input className="button" type="submit" value="Отправить" disabled={!props.isInput}></input>
    </form>
  )
}
export default MessageInputForm;