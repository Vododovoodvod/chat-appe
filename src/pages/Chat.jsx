import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { Messages } from "../components/Messages";
import { Input } from "../components/Input";
import "../styles/Chat.css"
import { Header } from "../components/Header";

export function Chat() {
    const navigate = useNavigate();
    const appContext = useContext(AppContext);
    
    useEffect(()=>{
        if (!appContext.hasUserPicture()) {
            navigate("/");
        }
    },[navigate, appContext, appContext.hasUserPicture]);

    const drone = new Scaledrone('DGStLvJcNoOT9USp');
    const room = drone.subscribe('ChatAppeRoom');

    room.on('open', error => {
        if (error) {
        return console.error(error);
        }
        appContext.myId = room.scaledrone.clientId;
    });

    const submitMessage = (msg) => {
        drone.publish({
        room: 'ChatAppeRoom',
        message: msg
        });
    }
    
    return (
        <div>
            <Header/>
            <div className="chat">
                <div className="chatContainer">
                    <Messages room={room}/>
                    <Input submitMessage={submitMessage}/>
                </div>
            </div>
        </div>
        
    );
}