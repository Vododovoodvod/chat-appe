import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ProfilePictureSelect } from "../components/ProfilePictureSelect";
import "../styles/Login.css"

export function Login() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [userPicture, setUserPicture] = useState(null);
    
    const setName = (event) => {
        const name = event.target.value;
        setUserName(name);
    }

    const Login = (event) => {
        event.preventDefault();
        console.log(userName + ", " + userPicture);
    }

    return(
        <div>
            <form onSubmit={Login}>
                <input type="text" placeholder="Your name" onChange={setName}/>
                <span>Select picture</span>
                <div>
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
                <button type="submit">Log in</button>
            </form>
        </div>
    );
}