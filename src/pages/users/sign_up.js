import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { FormContainer } from '../../components/shared/FormContainer';
import { FormField } from '../../components/shared/FormField';
import { FormFieldLabel } from '../../components/shared/FormFieldLabel';

export const sign_up = () => {
  // constants
  // TODO: MOVE TO AN IMPORT
  const BASE_URL = "http://localhost:1234"

  // states
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    let errorList = [];

    // create user obj
    let createdUser = { user: {
        email: data.email,
        password: data.password,
      }
    };
  
    // handle errors
    // errorList = handleErrors(createdUser, errorList);

    // POST to server
    axios({
      method: 'POST',
      url: `${BASE_URL}/users/`,
      data: createdUser,
      headers: {
        "Content-Type": "application/json",
      }
    }).then((response) => {
      // set API bearer token (user's token)
      console.log(createdUser)
      console.log("success")
      console.log(response.headers)
      // console.log(response.headers['Authorization'])
    }).catch((error) => {
      console.log(createdUser)
      console.log("fail")
      console.log(error.response)
      // console.log(error?.response?.data?.errors?.full_messages) // ! TEMP
      // errorList.push(...error?.response?.data?.errors?.full_messages);
      // setErrors(errorList);
    })
    // .then(() => {
    //     if (errorList.length === 0) {
    //         // show relevant pages
    //         openPage("dashboard");

    //         // ! TEMP: alert (turn into nicer alerts)
    //         alert('User successfully created! You are logged in!');
    //     }
    // });
  };

  return (<>
    <div class="
    flex flex-col justify-start items-center
    w-full bg-atlas-700
    py-6 px-8
    overflow-auto
    " style={{height: "calc(100vh - 3.5rem)"}}>
      <FormContainer>
        <h2 class="text-2xl font-semibold mb-4">
          Sign Up
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
              Username
          </FormFieldLabel>
          <FormField
              type="text"
              placeholder="johndoe"
          />
        </div>
        <div className="space-y-2 mb-4">
          <FormFieldLabel>
              First Name
          </FormFieldLabel>
          <FormField
              type="text"
              placeholder="Jon"
          />
        </div>
        <div className="space-y-2 mb-4">
          <FormFieldLabel>
              Last Name
          </FormFieldLabel>
          <FormField
              type="text"
              placeholder="Doe"
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
        <div className="space-y-2 mb-4">
          <FormFieldLabel>
              Confirm Password
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
          Sign Up
        </button>
        <div class="flex flex-col justify-center items-center mt-3">
          <a href="/users/sign_in"className="
          text-atlas-400 hover:text-atlas-500
          text-sm font-semibold
          ">
            Already have an account?
          </a>
        </div>
      </FormContainer>
    </div>
  </>)
}

export default sign_up

// t.string "bio"
// t.string "profile_picture"