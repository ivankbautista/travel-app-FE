import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { FormContainer } from '../../components/shared/FormContainer';
import { FormFieldLabel } from '../../components/shared/FormFieldLabel';

export const sign_up = () => {
  const API = "http://localhost:3001"
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    // created user object
    let createdUser = {
      "user": {
        email: data.email,
        password: data.password,
        username: data.username,
        first_name: data.first_name,
        last_name: data.last_name,
        // bio: "Programming super-genius.",
        // profile_picture: "https://avatars.githubusercontent.com/u/1279497?v=4"
      }
    }

    // axios
    axios({
      method: 'POST',
      url: `${API}/users/`,
      data: createdUser,
    }).then((response) => {
      console.log(response);
      console.log(response.data.resource);
      console.log(response.headers);
      // // set headers
      // setLoginUser(response.data.resource)
      // setLoginHeaders(response.headers);
    }).catch((error) => {
      // errorList.push(...error?.response?.data?.errors?.full_messages);
      // setErrors(errorList);
    }).then(() => {
      // if (errorList.length === 0) {
      //   // redirect to homepage
      //   // openPage("dashboard");

      //   // alert('User successfully created! You are logged in!');
      // }
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
            Sign Up
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
              placeholder={ "johndoe" }
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
              First Name
            </FormFieldLabel>
            <input
              type="text"
              {...register("first_name")}
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
              {...register("confirm_password")}
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
        </form>
      </FormContainer>
    </div>
  </>)
}

export default sign_up

// t.string "bio"
// t.string "profile_picture"