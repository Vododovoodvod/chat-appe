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
        if (message!=="") {
            const msg = {text: message, user: appContext.user, picture: appContext.picture, color: appContext.color};
            props.submitMessage(msg);
            setMessage("");
        }
    }

    const banana = (event) => {
        event.preventDefault();
        const msg = {text: "b4n4n4-2022__jakoStrogoKodiranaPoruka_!=)/&", user: appContext.user, picture: appContext.picture, color: appContext.color};
        props.submitMessage(msg);
    }

    
    return(
        <form onSubmit={submit} className="input">
            <input type="text" className="textInput" autoFocus={true} placeholder="Type a message..." onChange={updateMessage} value={message}/>
            <button type="button" className="bananaButton" onClick={banana}>
                <img src={require("../media/img/banana.png")} className="sendButtonIcon"/>
            </button>
            <button type="submit" className="sendButton">
                <img src={require("../media/img/send.png")} className="sendButtonIcon"/>
            </button>
        </form>
    );
}