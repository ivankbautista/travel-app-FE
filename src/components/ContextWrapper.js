import HeaderContext from "../contexts/HeaderContext";
import { useState, useEffect } from "react";
import React from 'react'

const ContextWrapper = ({ children }) => {
    // define states

    // states using localStorage
    // useEffect to ensure page loads before localStorage is called
    if(typeof window !== "undefined") {
        const [loggedInUser, setLoggedInUser] = useState(() => {
            const savedValue = JSON.parse(localStorage.getItem("loggedInUser"));
            const initialValue = null;
            return savedValue || initialValue;
        });

        const [loggedIn, setLoggedIn] = useState(() => {
            const savedValue = JSON.parse(localStorage.getItem("loggedIn"));
            const initialValue = false;
            return savedValue || initialValue;
        });
    }

    // keep localStorage updated
    useEffect(() => {
        localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
    }, [JSON.stringify(loggedInUser)]);

    useEffect(() => {
        localStorage.setItem('loggedIn', JSON.stringify(loggedIn));
    }, [JSON.stringify(loggedIn)]);

    return (<>
        <HeaderContext.Provider value={{
            loggedIn, setLoggedIn,
            loggedInUser, setLoggedInUser,
        }}>
            {children}
        </HeaderContext.Provider>
    </>)
}

export default ContextWrapper

// !TEMP - example of how to use Context API
// TUTORIAL: https://www.youtube.com/watch?v=CCqUpQYKfqM
// import { useContext } from "react"; // import Context hook
// import HeaderContext from "../contexts/HeaderContext"; // import the context you want to draw the variable from
// const { menuItems } = useContext(HeaderContext) // destructing to get menuItems from HeaderContext