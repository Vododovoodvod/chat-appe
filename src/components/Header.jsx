import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "../styles/Header.css"

export function Header() {
    const appContext = useContext(AppContext);
    const LogOut = () => {
        appContext.setUserName(null);
        appContext.setUserPicture(null);
        appContext.toogleLoggedIn();
    }

    return (
        <div>
            <div className="header">
                <img src={require("../media/img/header.jpg")} className="logo"/>
            </div>
            {appContext.loggedIn ? <button type="button" className="button" onClick={LogOut}>Log out</button> : null}
        </div>
    );
}