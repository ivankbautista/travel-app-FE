import React from 'react'

export const FormFieldLabel = ( props ) => {
    return (
        <label className="text-sm font-medium text-gray-700 tracking-wide">
            { props.children }
        </label>
    )
}