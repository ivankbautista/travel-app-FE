import React from 'react'

export const FormContainer = ( props ) => {
    return (
        <div className="
        flex flex-col
        px-8 pt-6 pb-6
        bg-white rounded-xl shadow-md
        text-black
        w-96
        "> 
            <h2 className="text-2xl font-semibold">{ props.title }</h2>
            { props.children }
        </div>
    )
}
