import { useState } from "react";
import { Message } from "./Message";
import "../styles/Chat.css"

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
                    <Message 
                        key={message.id} 
                        text={message.data.text} 
                        user={message.data.user} 
                        picture={message.data.picture} 
                        clientId={message.clientId}
                        color={message.data.color}
                    />
                ))
            }
        </div>
    );
}