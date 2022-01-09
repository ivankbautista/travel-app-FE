import React from 'react';
import axios from 'axios';
import Router from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormContainer } from '../../../components/shared/FormContainer';
import { FormFieldLabel } from '../../../components/shared/FormFieldLabel';
import { useContext } from "react";
import HeaderContext from '../../../contexts/HeaderContext';
import ErrorDisplay from '../../../components/shared/ErrorDisplay';

export const edit = () => {
  const API = "http://localhost:3001/"
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [errorList, setErrorList] = useState([])
  const {
    loggedInUser,
    setLoggedInUser
  } = useContext(HeaderContext) // destructing to get menuItems from HeaderContext

  const onSubmit = (data) => {
    const errorList = []
    console.log(data)
    console.log(loggedInUser.id)

    // axios
    axios({
      method: 'PATCH',
      url: `${API}/users/${loggedInUser.id}`,
      data: {
        api_key: loggedInUser.api_key,
        email: data.email,
        username: data.username,
        first_name: data.first_name,
        last_name: data.last_name,
        password: data.password,
        password_confirmation: data.password_confirmation,
        bio: data.bio
      },
    }).then((response) => {
      console.log(response.data); //TEMP
      setLoggedInUser(response.data.user)
    }).catch((error) => {
      console.log(error.response); // TEMP
      console.log(error.response.data.messages); // TEMP
      errorList.push(...error?.response?.data?.messages);
      setErrorList(errorList);
    }).then(() => {
      if (errorList.length === 0) {
        // alert('User successfully created! You are logged in!');
        Router.reload(window.location.pathname)
      }
    });
  };

  return (<>
    <div class="
    flex flex-col justify-start items-center
    w-full bg-atlas-700
    py-6 px-8
    overflow-auto
    " style={{height: "calc(100vh - 3.5rem)"}}>
      <FormContainer>
        <form onSubmit = { handleSubmit(onSubmit) }>
          <h2 class="text-2xl font-semibold mb-4">
            Edit Profile
          </h2>
          {errorList.length > 0 &&
            <div className="mt-3 -mb-4">
              <ErrorDisplay errors={errorList}/>
            </div>
          }
          <div className="space-y-2 mb-4">
            <FormFieldLabel>
              Bio
            </FormFieldLabel>
            <textarea
              {...register("bio")}
              defaultValue={ loggedInUser.bio }
              placeholder={ "I love to travel! " }
              className="
              w-full text-base px-4 py-2 border
              border-gray-300 rounded-lg
              focus:outline-none focus:border-atlas-400
              "
            ></textarea>
          </div>

          <div className="space-y-2 mb-4">
            <FormFieldLabel>
              Email Address
            </FormFieldLabel>
            <input
              type="email"
              {...register("email")}
              value={ loggedInUser.email }
              placeholder={ "johndoe@gmail.com" }
              className="
              w-full text-base px-4 py-2 border
              border-gray-300 rounded-lg bg-gray-200
              focus:outline-none
              cursor-default select-none
              "
              required
            ></input>
          </div>
          <div className="space-y-2 mb-4">
            <FormFieldLabel>
              Username
            </FormFieldLabel>
            <input
              type="text"
              {...register("username")}
              value={ loggedInUser.username }
              placeholder={ "johndoe" }
              className="
              w-full text-base px-4 py-2 border
              border-gray-300 rounded-lg bg-gray-200
              focus:outline-none
              cursor-default select-none
              "
              required
            ></input>
          </div>
          <div className="space-y-2 mb-4">
            <FormFieldLabel>
              First Name
            </FormFieldLabel>
            <input
              type="text"
              {...register("first_name")}
              defaultValue={ loggedInUser.first_name }
              placeholder={ "Jonathan" }
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
                Last Name
            </FormFieldLabel>
            <input
              type="text"
              {...register("last_name")}
              defaultValue={ loggedInUser.last_name }
              placeholder={ "Donatello" }
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
          <div className="space-y-2 mb-4">
            <FormFieldLabel>
                Confirm Password
            </FormFieldLabel>
            <input
              type="password"
              {...register("password_confirmation")}
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
            class="
            flex justify-center
            mt-8 p-3 w-full 
            bg-atlas-400 hover:bg-atlas-500 
            text-gray-100 font-semibold
            rounded-lg shadow-lg
            cursor-pointer transition ease-in duration-100
            "
          >
            Update
          </button>
          <div class="flex flex-col justify-center items-center mt-3">
            <a href="/users/sign_in"className="
            text-atlas-400 hover:text-atlas-500
            text-sm font-semibold
            ">
              Already have an account?
            </a>
          </div>
        </form>
      </FormContainer>
    </div>
  </>)
}

export default edit

// t.string "bio"
// t.string "profile_picture"