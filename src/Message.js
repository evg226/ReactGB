import "./message.scss";

function Message(props) {
    return (
        <div className="message">
            <div className="message__author">{props.mes.author}</div>:
            <div className="message__text">{props.mes.text}</div>
        </div>
    )
}

export default Message;