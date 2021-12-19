import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

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

    return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-gradient-to-b from-purple-300 to-purple-500 min-h-screen
        flex justify-center items-center
        ">

      {/* form proper */}
      <div className="flex justify-center self-center">
        <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
          <div className="flex flex-col items-center justify-center align-center mb-5">
            <div className="mb-1 h-14 w-14"> 
              {/* <img src={Fireside}/> */}
            </div>
            <p className="mt-1 italic text-gray-500 text-center">
              “Life is either a daring adventure or nothing at all.”
            </p>
            {/* {errors.length > 0 &&
              <div className="mt-3 -mb-4">
                <ErrorDisplay errors={errors}/>
              </div>
            } */}
          </div>
          <div className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 tracking-wide">
                Email Address
              </label>
              <input
                {...register("email")}
                className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                type="email"
                placeholder="johndoe@gmail.com"
              ></input>
            </div>
            <div className="space-y-2">
              <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                Password
              </label>
              <input
                {...register("password")}
                className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                type="password"
                placeholder="Enter your password"
              ></input>
            </div>
            <div className="space-y-2">
              <label htmlFor='password_confirmation' className="text-sm font-medium text-gray-700 tracking-wide">
                Confirm Password
              </label>
              <input
              {...register('password_confirmation')}
              className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
              type='password'
              placeholder='Please retype your password'></input>
            </div>
            </div>
            <div>
              <button
                type="submit"
                className="mt-7 -mb-7 w-full flex justify-center bg-purple-600  hover:bg-purple-800 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
              >
                Create
              </button>
            </div>
            <div className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
              <a
                href="#"
                className="mt-5 font-bold text-indigo-500 hover:text-indigo-600 no-underline hover:underline cursor-pointer transition ease-in duration-300"
                onClick={() => openPage("login")}
              >
                Already have an account?
              </a>
            </div>
            <div className="pt-5 text-center text-gray-400 text-xs">
            <span>
              Copyright © 2021-2022
              <a
                href=""
                rel=""
                target="_blank"
                title=""
                className="text-green hover:text-green-500 "
              ></a>
            </span>
            </div>
          </div>
        </div>
      </div>
  </form>
    )
}

export default sign_up