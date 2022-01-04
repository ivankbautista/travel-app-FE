import React from 'react'
import axios from 'axios';
import { FormContainer } from '../shared/FormContainer'
import { FormFieldLabel } from '../shared/FormFieldLabel'
import { useForm } from "react-hook-form";

export const RollForm = (props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {}
    return (
    <div>
        <div class="
        flex flex-col justify-center items-center
        w-full bg-atlas-700
        py-6 px-8
        " style={{height: "calc(100vh - 3.5rem)"}}>
            <FormContainer>
                <form onSubmit = { handleSubmit(onSubmit) }>
                    <h2 class="text-2xl font-semibold mb-4">
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
                </form>
            </FormContainer>
        </div>
    </div>
  )
}

export default RollForm