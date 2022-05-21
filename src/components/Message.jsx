import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "../styles/Message.css"

export function Message(props) {
    const appContext = useContext(AppContext);
    let align=" left";
    if (props.clientId === appContext.myId) {
        align=" right";
    }

    return(
        <div className={"message" + align} >
            <img src={require(`../media/img/${props.picture}.jpg`)} className="picture"/>
            {props.text === "b4n4n4-2022__jakoStrogoKodiranaPoruka_!=)/&" ? <img src={require("../media/img/banana.png")}/> : <div className="text" style={{backgroundColor: props.color}}>{props.text}</div>}
        </div>
    );
}