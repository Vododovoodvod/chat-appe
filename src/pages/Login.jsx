import "../styles/Login.css"
import { NameInput } from "../components/NameInput";
import { SelectPicture } from "../components/SelectPicture";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export function Login() {
    const appContext = useContext(AppContext);
    
    return(
        <div>
            {appContext.hasUserName() ? null : <NameInput/>}
            {appContext.hasUserName() ? <SelectPicture/> : null}
        </div>
    );
}