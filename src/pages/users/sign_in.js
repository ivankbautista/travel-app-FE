import React from 'react'
import { FormContainer } from '../../components/shared/FormContainer'
import { FormFieldLabel } from '../../components/shared/FormFieldLabel'
import { useForm } from "react-hook-form";

export const sign_in = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (<>
        <div class="
        flex flex-col justify-center items-center
        w-full bg-atlas-700
        py-6 px-8
        " style={{height: "calc(100vh - 3.5rem)"}}>
            <FormContainer>
                <form onSubmit = { handleSubmit(onSubmit) }>
                    <h2 class="text-2xl font-semibold mb-4">
                        Login
                    </h2>
                    <div className="space-y-2 mb-4">
                        <FormFieldLabel>
                            Email Address
                        </FormFieldLabel>
                        <input
                            type="email"
                            {...register("email")}
                            placeholder={ "johndoe@gmail.com" }
                            className="
                            w-full text-base px-4 py-2 border
                            border-gray-300 rounded-lg
                            focus:outline-none focus:border-atlas-400
                            "
                        ></input>
                    </div>
                    <div className="space-y-2 mb-4">
                        <FormFieldLabel>
                            Password
                        </FormFieldLabel>
                        <input
                            type="password"
                            {...register("password")}
                            placeholder={ "***********" }
                            className="
                            w-full text-base px-4 py-2 border
                            border-gray-300 rounded-lg
                            focus:outline-none focus:border-atlas-400
                            "
                        ></input>
                    </div>
                    <button
                        type="submit"
                        class="
                        flex justify-center
                        mt-8 p-3 w-full 
                        bg-atlas-400 hover:bg-atlas-500 
                        text-gray-100 font-semibold
                        rounded-lg shadow-lg
                        cursor-pointer transition ease-in duration-100
                        "
                    >
                        Log In
                    </button>
                    <div class="flex flex-col justify-center items-center mt-3">
                        <a href="/users/sign_up"className="
                        text-atlas-400 hover:text-atlas-500
                        text-sm font-semibold
                        ">
                            Don't have an account?
                        </a>
                    </div>
                </form>
            </FormContainer>
        </div>
    </>)
}

export default sign_in