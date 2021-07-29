import "./MessageInputForm.css";

import { useState } from "react";
import { TextField, Button, Box } from "@material-ui/core"
import SendIcon from '@material-ui/icons/Send';

function MessageInputForm(props) {
  // const inputRef = useRef(null); //TextField работает без useRef - см. стр.27
  const [currentMessageText, setCurrentMessageText] = useState("");
  const newMessgeChange = e => setCurrentMessageText(e.target.value);

  const sendNewMessage = e => {
    e.preventDefault();
    props.addMessage({ id: props.author + new Date(), author: props.author, text: currentMessageText });
    setCurrentMessageText("");
  };

  return (
    <form noValidate autoComplete="off" onSubmit={sendNewMessage}>
      <Box className="box">
      <TextField id="outlined-basic" label="Текст сообщения" variant="outlined" inputRef={input => input && input.focus()}
          value={currentMessageText} onChange={newMessgeChange} />
      </Box>
      <Button variant="outlined" endIcon={<SendIcon>send</SendIcon>} type="submit" value="Отправить"
        disabled={(!currentMessageText || !props.isInput)}>
          Send
      </Button>
    </form>
  )
}
export default MessageInputForm;