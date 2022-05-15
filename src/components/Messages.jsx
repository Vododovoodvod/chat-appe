import { useState } from "react";
import { Message } from "./Message";

export function Messages(props) {
    const [messages, setMessages] = useState([]);

    props.room.on('message', message => {
        updateMessages(message);
    });

    const updateMessages = (newMessage) => {
        setMessages([
            ...messages,
            newMessage
        ]);
    }

    return(
        <div>
            {
                messages.map((message)=>(
                    <Message key={message.id} text={message.data}/>
                ))
            }
        </div>
    );
}