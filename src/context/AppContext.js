import { createContext, useCallback, useState } from "react";
//import randomColor from "randomcolor";

export const AppContext = createContext();
export const AppConsumer = AppContext.Consumer;

export function AppProvider(props) {
    const [user, setUser] = useState(null);
    const [picture, setPicture] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);
    let myId = "";

    const generateHsvColor = () => {
        const hue = Math.floor(Math.random() * 361);
        return `hsl(${hue}, 50%, 80%)`;
    }

    const color = generateHsvColor();
    
    const toogleLoggedIn = () => {
        setLoggedIn(!loggedIn);
    }

    const setUserName = (name) => {
        setUser(name);
    }
    const hasUserName = useCallback(() => user !== null, [user]);

    const setUserPicture = (index) => {
        setPicture(index);
    }
    const hasUserPicture = useCallback(() => picture !== null, [picture]);

    const setUserColor = (clr) => {
        setColor(clr);
    }

    const value = {
        user,
        setUserName,
        hasUserName,
        picture,
        setUserPicture,
        hasUserPicture,
        myId,
        setUserColor,
        color,
        toogleLoggedIn,
        loggedIn
    };

    return (
        <AppContext.Provider value={value}>
          {props.children}
        </AppContext.Provider>
    );
}