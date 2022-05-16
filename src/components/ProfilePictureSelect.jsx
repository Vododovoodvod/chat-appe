import "../styles/Login.css"

export function ProfilePictureSelect(props) {

    const setProfilePicture = () => {
        console.log(props.value);
    }

    return(
        <button type="button" onClick={setProfilePicture} className={`pp${props.value} profilePicture`}/>
    );
}