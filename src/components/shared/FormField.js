import React from 'react'

export const FormField = ({ type, placeholder }) => {
    return (
        <input
            className="
            w-full text-base px-4 py-2 border
            border-gray-300 rounded-lg
            focus:outline-none focus:border-atlas-400
            "
            type={ type }
            placeholder={ placeholder }
        ></input>
    )
}