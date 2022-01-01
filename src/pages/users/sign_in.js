import React from 'react'
import { FormContainer } from '../../components/shared/FormContainer'
import { FormFieldLabel } from '../../components/shared/FormFieldLabel'
import { FormField } from '../../components/shared/FormField'

export const sign_in = () => {
    return (<>
        <div class="
        flex flex-col justify-center items-center
        w-full bg-atlas-700
        py-6 px-8
        " style={{height: "calc(100vh - 3.5rem)"}}>
            <FormContainer>
                <h2 class="text-2xl font-semibold mb-4">
                    Login
                </h2>
                <div className="space-y-2 mb-4">
                    <FormFieldLabel>
                        Email Address
                    </FormFieldLabel>
                    <FormField
                        type="email"
                        placeholder="johndoe@gmail.com"
                    />
                </div>
                <div className="space-y-2 mb-4">
                    <FormFieldLabel>
                        Password
                    </FormFieldLabel>
                    <FormField
                        type="password"
                        placeholder="***********"
                    />
                </div>
                <button
                    type="submit"
                    class="
                    flex justify-center
                    mt-4 p-3 w-full 
                    bg-atlas-400 hover:bg-atlas-500 
                    text-gray-100 font-semibold
                    rounded-lg shadow-lg
                    cursor-pointer transition ease-in duration-100
                    "
                >
                    Create
                </button>
                <div class="flex flex-col justify-center items-center mt-3">
                    <a href="/users/sign_up"className="
                    text-atlas-400 hover:text-atlas-500
                    text-sm font-semibold
                    ">
                        Don't have an account?
                    </a>
                </div>
            </FormContainer>
        </div>
    </>)
}

export default sign_in