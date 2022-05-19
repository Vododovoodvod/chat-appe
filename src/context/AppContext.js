import { createContext, useCallback, useState } from "react";

export const AppContext = createContext();
export const AppConsumer = AppContext.Consumer;

export function AppProvider(props) {
    const [user, setUser] = useState(null);
    const [picture, setPicture] = useState(null);
    let myId = "";
    let color = "";
    
    const setUserName = (name) => {
        setUser(name);
    }
    const hasUserName = useCallback(() => user !== null, [user]);

    const setUserPicture = (index) => {
        setPicture(index);
    }
    const hasUserPicture = useCallback(() => picture !== null, [picture]);

    const value = {
        user,
        setUserName,
        hasUserName,
        picture,
        setUserPicture,
        hasUserPicture,
        myId,
        color
    };

    return (
        <AppContext.Provider value={value}>
          {props.children}
        </AppContext.Provider>
    );
}