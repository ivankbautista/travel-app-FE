import React from 'react'
import axios from 'axios';
import Router from 'next/router';
import { useState } from 'react';
import { FormContainer } from '../shared/FormContainer'
import { FormFieldLabel } from '../shared/FormFieldLabel'
import { useForm } from "react-hook-form";
import { useContext } from "react";
import HeaderContext from '../../contexts/HeaderContext';
import ErrorDisplay from '../../components/shared/ErrorDisplay';

export const RollForm = (props) => {
    const API = "http://localhost:3001"
    const {loggedIn, loggedInUser, setLoggedIn, setLoggedInUser} = useContext(HeaderContext)
    console.log("DATA HEREEE")
    console.log(loggedInUser)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [errorList, setErrorList] = useState([])
      const onSubmit = (data) => {
        axios({
            method: 'POST',
            url: `${API}/api/v1/rolls/`,
            data: {
              title: data.title,
              start_date: data.start_date,
              end_date: data.end_date,
              image: data.image,
              user_id: 1,
            },
          }).then((response) => {
            console.log("Something's right!")
            console.log(response.data); //TEMP
          }).catch((error) => {
            console.log("Something's wrong!")
            console.log(error.response); // TEMP
          }).then(() => {
            if (errorList.length === 0) {
              alert('Roll created!');
              Router.push('/');
            }
          });
    }
    return (
    <>
        <div className="
        flex flex-col justify-center items-center
        w-full bg-atlas-700
        py-6 px-8
        " style={{height: "calc(100vh - 3.5rem)"}}>
            <FormContainer>
                <form onSubmit = { handleSubmit(onSubmit) }>
                    <h2 className="text-2xl font-semibold mb-4">
                        New Roll
                    </h2>
                    <FormFieldLabel>
                        Title
                    </FormFieldLabel>
                    <input
                        type="string"
                        {...register("title")}
                        placeholder={ "Japan 2022" }
                        className="
                        w-full text-base px-4 py-2 border
                        border-gray-300 rounded-lg
                        focus:outline-none focus:border-atlas-400
                        "
                        required
                    >
                    </input>
                    <FormFieldLabel>
                        Start Date
                    </FormFieldLabel>
                    <input
                        type="date"
                        {...register("start_date")}
                        className="
                        w-full text-base px-4 py-2 border
                        border-gray-300 rounded-lg
                        focus:outline-none focus:border-atlas-400
                        "
                        required
                    >
                    </input>
                    <FormFieldLabel>
                        End Date
                    </FormFieldLabel>
                    <input
                        type="date"
                        {...register("end_date")}
                        className="
                        w-full text-base px-4 py-2 border
                        border-gray-300 rounded-lg
                        focus:outline-none focus:border-atlas-400
                        "
                        required
                    >
                    </input>
                    <FormFieldLabel>
                        Banner Image (Optional)
                    </FormFieldLabel>
                    <input
                        type="string"
                        {...register("image")}
                        placeholder={ "Put a link to a banner image here!" }
                        className="
                        w-full text-base px-4 py-2 border
                        border-gray-300 rounded-lg
                        focus:outline-none focus:border-atlas-400
                        "
                        required
                    >
                    </input>
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
                        Create
                    </button>
                </form>
            </FormContainer>
        </div>
    </>
  )
}

export default RollForm