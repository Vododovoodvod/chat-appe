import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "../styles/Login.css"

export function ProfilePictureSelect(props) {
    const appContext = useContext(AppContext);

    const setProfilePicture = () => {
        appContext.setUserPicture(props.value);
    }

    return(
        <button type="button" onClick={setProfilePicture} className={`pp${props.value} profilePicture`}/>
    );
}