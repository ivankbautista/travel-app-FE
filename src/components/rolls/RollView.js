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

export const RollView = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [entryModalIsOpen, setEntryModalIsOpen] = useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [roll, setRoll] = useState();

  const router = useRouter();
  const roll_id = router.query.roll_id
  const API = "http://localhost:3001"
  const { loggedInUser } = useContext(HeaderContext)
  console.log(roll_id)
  useEffect(() => {
    if (!router.isReady) return
    axios({
      method: 'GET',
      url: `${API}/api/v1/rolls/${roll_id}`,
    })
      .then(function (response) {
        console.log(response.data)
        setRoll(response.data);
        setLoading(false);
      });
  }, [router.isReady]);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  const deleteRoll = (data) => {
    axios({
      method: 'DELETE',
      url: `${API}/api/v1/rolls/${roll_id}`,
    })
      .then(function (response) {
        console.log(response.data)
        router.push(`/rolls/new`)
      });
  }

  const editRoll = () => {
    setEditModalIsOpen(true)
  }

  const onEditSubmit = (data) => {
    axios({
      method: 'PATCH',
      url: `${API}/api/v1/rolls/${roll_id}`,
      data: {
        title: data.title,
        start_date: data.start_date,
        end_date: data.end_date,
        image: data.image,
      },
    }).then((response) => {
      console.log(response.data)
      var new_roll = response.data.roll
      roll.image = new_roll.image
      roll.title = new_roll.title
      roll.start_date = new_roll.start_date
      roll.end_date = new_roll.end_date

        ;
    }).catch((error) => {
      console.log(error.response); // TEMP
    });
  }

  const makeNewEntry = () => {
    setEntryModalIsOpen(true)
  }

  const EntryCreate = (data) => {
    axios({
      method: 'POST',
      url: `${API}/api/v1/entries/`,
      data: {
        title: data.title,
        image: data.image,
        end_date: data.date,
        country: data.country,
        city: data.city,
        category: data.category,
        description: data.description,
        user_id: loggedInUser.id, // IMPORTANT
        roll_id: roll_id // IMPORTANT
      },
    }).then((response) => {
      console.log(response.data); //TEMP
      let entry_id = response.data.entry.id
    }).catch((error) => {
      console.log(error.response); // TEMP
    });
  }

  return (
    <>
      {/* Profile header  */}
      <div className="h-screen">
        <div style={{ backgroundImage: `url(${roll.image})` }} className="h-72 flex flex-col justify-center items-center">
          {/* <p className="rounded-full w-32 h-32 bg-red-400 mt-3"></p> */}
          <h1 className="text-white text-7xl">{roll.title}</h1>
          <h1 className="text-white text-2xl">{roll.start_date} to {roll.end_date}</h1>
          <div className="flex justify-between w-56 h-1/4">
            <button onClick={editRoll}><a className="p-3 text-white bg-blue-500 rounded">Edit</a></button>
            <button onClick={deleteRoll}><a className="p-3 text-white bg-blue-500 rounded">Delete</a></button>
          </div>
        </div>
        {editModalIsOpen && <Modal setShowModal={setEditModalIsOpen}>
          <div className="
        flex flex-col justify-center items-center" style={{ height: "calc(100vh - 3.5rem)" }}>
            <FormContainer>
              <form onSubmit={handleSubmit(onEditSubmit)}>
                <h2 className="text-2xl font-semibold mb-4">
                  Edit Roll
                </h2>
                <FormFieldLabel>
                  Title
                </FormFieldLabel>
                <input
                  type="string"
                  {...register("title")}
                  placeholder={roll.title}
                  defaultValue={roll.title}
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
                  placeholder={roll.start_date}
                  defaultValue={roll.start_date}
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
                  placeholder={roll.end_date}
                  defaultValue={roll.end_date}
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
                  placeholder={roll.image}
                  defaultValue={roll.image}
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
                  Update
                </button>
              </form>
            </FormContainer>
          </div>
        </Modal>}

        {/* Create Entry Modal */}

        {entryModalIsOpen && <Modal setShowModal={setEntryModalIsOpen}>
          <div class="
        flex flex-col justify-center items-center" style={{ height: "calc(100vh - 3.5rem)" }}>
            <FormContainer>
              <form onSubmit={handleSubmit(EntryCreate)}>
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
                  Country
                </FormFieldLabel>
                <input
                  type="text"
                  {...register("country")}
                  placeholder={"Japan"}
                  className="
                        w-full text-base px-4 py-2 border
                        border-gray-300 rounded-lg
                        focus:outline-none focus:border-atlas-400
                        "
                  required
                >
                </input>                <FormFieldLabel>
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
                  <option value="food">Food</option>
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
                  required
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


        {/* Sidebar & Main content */}
        <div className="flex items-center h-full">
          <div className="h-screen bg-gray-600 w-3/12 text-white mt-3 flex flex-col justify-center items-center justify-self-start self-start">bio/user stats</div>

          <div className="h-full flex-grow w-9/12">
            <button onClick={makeNewEntry} className="bg-atlas-400 font-bold text-white px-8 py-3 mt-3 ml-3">Create Entry</button>
          </div>
        </div>
      </div>

    </>
  );
}

export default RollView