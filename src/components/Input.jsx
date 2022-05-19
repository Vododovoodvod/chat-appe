import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useState } from "react";
import "../styles/Input.css"

export function Input(props) {
    const appContext = useContext(AppContext);
    const [message, setMessage] = useState("");

    const updateMessage = (event) => {
        setMessage(event.target.value);
    }

    const submit = (event) => {
        event.preventDefault();
        const msg = {text: message, user: appContext.user, picture: appContext.picture, color: appContext.color};
        console.log()
        props.submitMessage(msg);
        setMessage("");
    }

    
    return(
        <form onSubmit={submit} className="input">
            <input type="text" className="text" autoFocus={true} placeholder="Type a message..." onChange={updateMessage} value={message}/>
            <button type="submit" className="sendButton"></button>
        </form>
    );
}