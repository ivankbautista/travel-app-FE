import React from 'react'
import axios from 'axios';
import Router from 'next/router';
import { useState } from 'react';
import { FormContainer } from '../../components/shared/FormContainer'
import { FormFieldLabel } from '../../components/shared/FormFieldLabel'
import { useForm } from "react-hook-form";
import { useContext } from "react";
import HeaderContext from '../../contexts/HeaderContext';
import ErrorDisplay from '../../components/shared/ErrorDisplay';

export const sign_in = () => {
    const API = "http://localhost:3001"
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [errorList, setErrorList] = useState([])
    const {
        loggedIn,
        setLoggedIn,
        setLoggedInUser,
    } = useContext(HeaderContext) // destructing to get menuItems from HeaderContext

    const onSubmit = (data) => {
        const errorList = []

        // axios
        axios({
            method: 'POST',
            url: `${API}/sessions/`,
            data: {
                email: data.email,
                password: data.password
            },
        }).then((response) => {
            console.log(response.data); //TEMP
            setLoggedIn(true)
            setLoggedInUser(response.data.user)
        }).catch((error) => {
            console.log(error)
            if (error?.response) {
                console.log(error.response.data.messages); // TEMP
                errorList.push(...error?.response?.data?.messages);
                setErrorList(errorList);
            } else {
                console.log(error)
            }
        }).then(() => {
            if (errorList.length === 0 && !loggedIn) {
                // alert('Log in successful!');
                Router.push('/')
            }
        });
    };

    return (<>
        <div className="
        flex flex-col justify-center items-center
        w-full bg-atlas-700
        py-6 px-8
        " style={{height: "calc(100vh - 3.5rem)"}}>
            <FormContainer>
                <form onSubmit = { handleSubmit(onSubmit) }>
                    <h2 className="text-2xl font-semibold mb-4">
                        Login
                    </h2>
                    {errorList.length > 0 &&
                        <div className="mt-3 -mb-4">
                            <ErrorDisplay errors={errorList}/>
                        </div>
                    }
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
                            required
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
                            required
                        ></input>
                    </div>
                    <button
                        type="submit"
                        className="
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
                    <div className="flex flex-col justify-center items-center mt-3">
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