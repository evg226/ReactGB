import "./message.scss";

function Message(props) {
    return (
        <div className="message">Компонента Message сообщает:
            <span className={`${props.mes.style}`}>{props.mes.body}</span>
        </div>
    )
}

export default Message;