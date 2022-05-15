import { useState } from "react";

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
        <form onSubmit={submit}>
            <input type="text" autoFocus={true} placeholder="Type a message..." onChange={updateMessage} value={message}/>
            <button type="submit">Send</button>
        </form>
    );
}