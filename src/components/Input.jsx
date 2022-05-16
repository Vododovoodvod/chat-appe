import { useState } from "react";
import "../styles/Input.css"

export function Input(props) {
    const [message, setMessage] = useState("");

    const updateMessage = (event) => {
        setMessage(event.target.value);
    }

    const submit = (event) => {
        event.preventDefault();
        props.submitMessage(message);
        setMessage("");
    }

    
    return(
        <form onSubmit={submit} className="input">
            <input type="text" className="text" autoFocus={true} placeholder="Type a message..." onChange={updateMessage} value={message}/>
            <button type="submit" className="sendButton"></button>
        </form>
    );
}