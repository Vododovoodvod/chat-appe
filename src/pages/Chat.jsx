import { useNavigate } from "react-router-dom";
import { Messages } from "../components/Messages";
import { Input } from "../components/Input";
import "../styles/Chat.css"

export function Chat() {
    const navigate = useNavigate();
    const drone = new Scaledrone('DGStLvJcNoOT9USp');
    const room = drone.subscribe('ChatAppeRoom');

    room.on('open', error => {
        if (error) {
        return console.error(error);
        }
        // Connected to room
    });

    const submitMessage = (text) => {
        drone.publish({
        room: 'ChatAppeRoom',
        message: text
        }); 
    }
    
    return (
        <div className="chatContainer">
            <Messages room={room}/>
            <Input submitMessage={submitMessage}/>
        </div>
    );
}