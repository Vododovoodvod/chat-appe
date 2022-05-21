import { useNavigate } from "react-router-dom";
import { ProfilePictureSelect } from "./ProfilePictureSelect";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import randomColor from "randomcolor";

export function SelectPicture() {
    const appContext = useContext(AppContext);
    const navigate = useNavigate();
    let color = randomColor();
    appContext.color=color;

    const logIn = () => {
        navigate("/chat");
        appContext.toogleLoggedIn();
    }

    return(
        <div className="loginBcg">
            <div className="pictureInput">
                {appContext.hasUserPicture() ? <img src={require(`../media/img/${appContext.picture}.jpg`)} className="mainPicture"/> : <img src={require("../media/img/noImg.jpg")} className="mainPicture"/> }
                <div className="pictureLabel">Select your avatar</div>
                <div className="picturesContainer">
                    <ProfilePictureSelect value={0}/>
                    <ProfilePictureSelect value={1}/>
                    <ProfilePictureSelect value={2}/>
                    <ProfilePictureSelect value={3}/>
                    <ProfilePictureSelect value={4}/>
                    <ProfilePictureSelect value={5}/>
                    <ProfilePictureSelect value={6}/>
                    <ProfilePictureSelect value={7}/>
                    <ProfilePictureSelect value={8}/>
                    <ProfilePictureSelect value={9}/>
                </div>
                <button onClick={logIn} className="nameInputButton">Enter the jungle</button>
            </div>
        </div>
    );
}