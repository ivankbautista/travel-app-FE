import HeaderContext from "../contexts/HeaderContext";
import { useState } from "react";
import React from 'react'

const ContextWrapper = ({ children  }) => {
    // e.g. const [menuItems] = useState(navigation)
    // e.g. const [color, toggleColor] = useState(true)


    return (
        <HeaderContext.Provider value={{
            // EXAMPLE
            // menuItems,
            // color,
            // toggleColor,
        }}>
            {children}
        </HeaderContext.Provider>
    )
}

export default ContextWrapper

// !TEMP - example of how to use Context API
// TUTORIAL: https://www.youtube.com/watch?v=CCqUpQYKfqM
// import { useContext } from "react"; // import Context hook
// import HeaderContext from "../contexts/HeaderContext"; // import the context you want to draw the variable from
// const { menuItems } = useContext(HeaderContext) // destructing to get menuItems from HeaderContext