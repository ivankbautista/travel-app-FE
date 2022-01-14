import React from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import { useRouter, Router } from 'next/router'
import { useState } from 'react';
import Modal from '../shared/Modal';
import { FormContainer } from '../shared/FormContainer'
import { FormFieldLabel } from '../shared/FormFieldLabel'
import { useForm } from "react-hook-form";
import { useContext } from "react";
import HeaderContext from '../../contexts/HeaderContext';

export const EntryView = (props) => {
    const [isLoading, setLoading] = useState(true);
    const [editEntryModalIsOpen, setEditModalIsOpen] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [entry, setEntry] = useState();

    const router = useRouter();
    const roll_id = router.query.roll_id
    const API = "http://localhost:3001"
    // const { loggedInUser } = useContext(HeaderContext)
    useEffect(() => {
        if (!router.isReady) return
        axios({
            method: 'GET',
            url: `${API}/api/v1/rolls/${roll_id}/entries/${entry_id}`,
        })
            .then(function (response) {
                console.log(response.data)
                setEntry(response.data);
                setLoading(false);
            });
    }, [router.isReady]);

    if (isLoading) {
        return <div className="App">Loading...</div>;
    }


    const deleteEntry = (data) => {
        axios({
            method: 'DELETE',
            url: `${API}/api/v1/rolls/${roll_id}/entries/${entry_id}`,
        })
            .then(function (response) {
                console.log(response.data)
                router.push(`/entries/new`)
            });
    }

    const editEntry = () => {
        setEditModalIsOpen(true)
    }

    const onEditEntrySubmit = (data) => {
        axios({
            method: 'PATCH',
            url: `${API}/api/v1/rolls/${roll_id}/entries/${entry_id}`,
            data: {
                title: data.title,
                image: data.image,
                end_date: data.date,
                country: data.country,
                city: data.city,
                category: data.category,
                description: data.description,
            }
        }).then((response) => {
            console.log(response.data)
            var new_entry = response.data.entry
            entry.title = new_entry.title
            entry.image = new_entry.image
            entry.end_date = new_entry.date
            entry.country = new_entry.country
            entry.city = new_entry.city
            entry.category = new_entry.category
            entry.description = new_entry.description
        }).catch((error) => {
            console.log(error.response); // TEMP
        });
    }

    return (
        <>

            {/* Insert Card Design here */}


            {/* Create edit button  */}
            {/* Create delete button */}

            {/* Edit Modal within Card */}
            {editEntryModalIsOpen && <Modal setEditModalIsOpen={setEditModalIsOpen}>
                <div className="
                    flex flex-col justify-center items-center
                    w-full bg-atlas-700
                    py-6 px-8
                    " style={{ height: "calc(100vh - 3.5rem)" }}>
                    <FormContainer>
                        <form onSubmit={handleSubmit(onEditEntrySubmit)}>
                            <h2 class="text-2xl font-semibold mb-4">
                                Edit Entry
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
                                {...register("end_date")}
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
                                placeholder={"false"}
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
            </Modal>}
        </>
    )
}