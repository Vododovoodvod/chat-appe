import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import "../styles/Login.css"

export function NameInput() {
    const appContext = useContext(AppContext);

    const setName = (event) => {
        event.preventDefault();
        if (event.target[0].value !== "") {
            appContext.setUserName( "Ape " + event.target[0].value); 
        }
        
        if (event.target[0].value.toLowerCase() == "suzzane") {
            appContext.setUserPicture(99);
        }
    }

    return(
        <div className="loginBcg">
            <form onSubmit={setName} className="nameInput">
                <input type="text" placeholder="Your name" className="nameInputText"></input>
                <button type="submit" className="nameInputButton">Next</button>
            </form>
        </div>
    );
}