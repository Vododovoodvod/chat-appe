import "../styles/Message.css"

export function Message(props) {
    return(
        <div className="message">
            <div>{props.text}</div>
        </div>
    );
}