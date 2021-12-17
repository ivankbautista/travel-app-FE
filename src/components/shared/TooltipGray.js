import React from 'react'

export const TooltipGray = ({ children }) => {
    return (
        <span class="
        tooltip
        px-2 py-1
        bg-gray-700
        text-white text-sm
        rounded shadow-xl
        ">
            { children }
        </span>
    )
}

{/*
    // HOW TO USE TOOL TIPS
    <div class=".... has-tooltip">
        ..usual content..
        <TooltipGray>
            ..message here..
        </TooltipGray>
    </div>
*/}