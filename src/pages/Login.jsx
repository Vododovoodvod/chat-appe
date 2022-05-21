import "../styles/Login.css"
import { NameInput } from "../components/NameInput";
import { SelectPicture } from "../components/SelectPicture";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Header } from "../components/Header";

export function Login() {
    const appContext = useContext(AppContext);
    
    return(
        <div>
            <Header/>
            {appContext.hasUserName() ? null : <NameInput/>}
            {appContext.hasUserName() ? <SelectPicture/> : null}
        </div>
    );
}