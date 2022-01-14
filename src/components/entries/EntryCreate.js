import React from 'react'
import axios from 'axios';
import { FormContainer } from '../shared/FormContainer'
import { FormFieldLabel } from '../shared/FormFieldLabel'
import { useForm } from "react-hook-form";

export const EntryForm = (props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => { }
    return (
        <>
            <div class="
        flex flex-col justify-center items-center
        w-full bg-atlas-700
        py-6 px-8
        " style={{ height: "calc(100vh - 3.5rem)" }}>
                <FormContainer>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2 class="text-2xl font-semibold mb-4">
                            New Entry
                        </h2>
                        <FormFieldLabel>
                            Title
                        </FormFieldLabel>
                        <input
                            type="text"
                            {...register("title")}
                            placeholder={"Shrine Visit"}
                            className="
                        w-full text-base px-4 py-2 border
                        border-gray-300 rounded-lg
                        focus:outline-none focus:border-atlas-400
                        "
                            required
                        >
                        </input>
                        <FormFieldLabel>
                            Image
                        </FormFieldLabel>
                        <input
                            type="url"
                            {...register("image")}
                            placeholder={"Place a link to an image here."}
                            className="
                        w-full text-base px-4 py-2 border
                        border-gray-300 rounded-lg
                        focus:outline-none focus:border-atlas-400
                        "
                            required
                        >
                        </input>
                        <FormFieldLabel>
                            Date
                        </FormFieldLabel>
                        <input
                            type="date"
                            {...register("date")}
                            className="
                        w-full text-base px-4 py-2 border
                        border-gray-300 rounded-lg
                        focus:outline-none focus:border-atlas-400
                        "
                            required
                        >
                        </input>
                        {/* Country should be a hidden field na probably? */}
                        <FormFieldLabel>
                            City
                        </FormFieldLabel>
                        <input
                            type="text"
                            {...register("city")}
                            placeholder={"Tokyo"}
                            className="
                        w-full text-base px-4 py-2 border
                        border-gray-300 rounded-lg
                        focus:outline-none focus:border-atlas-400
                        "
                            required
                        >
                        </input>
                        <FormFieldLabel>
                            Category
                        </FormFieldLabel>
                        <select
                            {...register("category")}
                            className="
                    w-full text-base px-4 py-2 border
                    border-gray-300 rounded-lg
                    focus:outline-none focus:border-atlas-400
                    "
                        >
                            <option selected value="food">Food</option>
                            <option value="attraction">Attraction</option>
                            <option value="person">Person</option>
                            <option value="fashion">Fashion</option>
                            <option value="accommodation">Accommodation</option>
                            <option value="transportation">Transportation</option>
                            <option value="other">Other</option>
                        </select>
                        <FormFieldLabel>
                            Description
                        </FormFieldLabel>
                        <textarea
                            name="description"
                            {...register("description")}
                            placeholder={"Tell us about what happened!"}
                            className="
                        w-full min-h-24 max-h-24 text-base px-4 py-2 border
                        border-gray-300 rounded-lg
                        focus:outline-none focus:border-atlas-400
                        "
                            required
                        >
                        </textarea>
                        <FormFieldLabel>
                            Do you want this to be public?
                        </FormFieldLabel>
                        <input
                            type="checkbox"
                            {...register("public")}
                            placeholder={"true"}
                            className="
                        ml-2 mt-2 text-base px-4 py-2 border
                        border-gray-300 rounded-lg
                        focus:outline-none focus:border-atlas-400
                        "
                        >
                        </input><br />
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
                            Create
                        </button>
                    </form>
                </FormContainer>
            </div>
        </>
    )
}

export default EntryForm