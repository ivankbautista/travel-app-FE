import React from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import { useRouter, Router } from 'next/router'
import { useState } from 'react';
import Modal from '../shared/Modal';
import { FormContainer } from '../shared/FormContainer'
import { FormFieldLabel } from '../shared/FormFieldLabel'
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import HeaderContext from '../../contexts/HeaderContext';
import { useRef } from 'react';

export const RollView = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [entryModalIsOpen, setEntryModalIsOpen] = useState(false);
  const [editEntryModalIsOpen, setEditEntryModalIsOpen] = useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [roll, setRoll] = useState();
  const [entries, setEntries] = useState();
  const [specificID, setSpecificID] = useState(false);

  const router = useRouter();
  const roll_id = router.query.roll_id
  const entry_id = router.query.entry_id
  const API = "http://localhost:3001"
  const { loggedInUser } = useContext(HeaderContext)

  useEffect(() => {
    if (!router.isReady) return
    axios({
      method: 'GET',
      url: `${API}/api/v1/rolls/${roll_id}`,
    })
      .then(function (response) {
        console.log(response.data)
        setRoll(response.data);
        if (!router.isReady) return
        axios({
          method: 'GET',
          url: `${API}/api/v1/entries/roll/${roll_id}`,
        })
          .then(function (response) {
            console.log(response.data)
            setEntries(response.data);
            setLoading(false);
          });
      });
  }, [router.isReady]);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  const deleteRoll = (data) => {
    axios({
      method: 'DELETE',
      data: {
        api_key: loggedInUser.api_key,
      },
      url: `${API}/api/v1/rolls/${roll_id}`,
    }).then(function (response) {
      console.log(response.data)
      router.push(`/rolls/new`)
    }).catch((error) => {
      console.log(error.response); // TEMP
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
        api_key: loggedInUser.api_key,
        user_id: loggedInUser.id,
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
        date: data.date,
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
      router.reload(window.location.pathname)
    }).catch((error) => {
      console.log(error.response); // TEMP
    });
  }

  const deleteEntry = (specific_id) => {
    axios({
      method: 'DELETE',
      url: `${API}/api/v1/entries/${specific_id}`,
    })
      .then(function (response) {
        console.log(response.data)
        router.reload(window.location.pathname)
      });
  }

  const editEntry = (specific_id) => {
    setEditEntryModalIsOpen(true)
    setSpecificID(specific_id)
  }

  const onEditEntrySubmit = (data) => {
    axios({
      method: 'PATCH',
      url: `${API}/api/v1/entries/${specificID}`,
      data: {
        title: data.title,
        image: data.image,
        date: data.date,
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
      entry.date = new_entry.date
      entry.country = new_entry.country
      entry.city = new_entry.city
      entry.category = new_entry.category
      entry.description = new_entry.description

      Router.reload(window.location.pathname)
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
            {loggedInUser?.id === roll?.user_id &&
              <>
                <button onClick={editRoll}><a className="p-3 text-white bg-blue-500 rounded">Edit</a></button>
                <button onClick={deleteRoll}><a className="p-3 text-white bg-blue-500 rounded">Delete</a></button>
              </>
            }
          </div >
        </div >
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

        {
          entryModalIsOpen && <Modal setShowModal={setEntryModalIsOpen}>
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
                    {...register("category")}
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
          </Modal>
        }


        {/* Sidebar & Main content */}
        <div className="flex items-center h-full">
          <div className="h-screen bg-gray-600 w-3/12 text-white mt-3 flex flex-col justify-center items-center justify-self-start self-start">bio/user stats</div>

          <div className="h-full flex-grow w-9/12">
            <button onClick={makeNewEntry} className="ml-10 bg-atlas-400 font-bold text-white px-8 py-3 mt-3 ml-3">Create Entry</button>
            <div>
              {entries.map((entry) =>
                <div key={entry.id} className="m-auto">
                  <main className="flex w-full p-10 flex">
                    <img src={`${entry.image}`} className="h-32 b rounded-2xl w-32 object-cover"></img>

                    <div className="ml-3 flex-col text-white">
                      <div className="pt-1">
                        <div className="flex mb-2">
                          <p>📌</p>
                          <span className="italic font-bold">{entry.city}</span>
                        </div>
                        <h2>{entry.category}</h2>
                        <h2 className="font-semibold mt-1">{entry.date}</h2>
                        <p className="mt-2 text-justify">{entry.description}</p>
                      </div>
                    </div>

                    <div className="w-1/3 flex-grow flex justify-end">
                      <div onClick={() => editEntry(entry.id)} className="cursor-pointer h-full mr-4 text-xl text-blue-400 hover:text-blue-500">
                        ✏️
                      </div>

                      <div onClick={() => deleteEntry(entry.id)} className="cursor-pointer h-full text-xl text-red-400 hover:text-red-500">
                        🗑️
                      </div>
                    </div>
                    {/* Edit Modal */}
                    {editEntryModalIsOpen && <Modal setShowModal={setEditEntryModalIsOpen}>
                      <div className="
                    flex flex-col justify-center items-center
                    w-full bg-atlas-700
                    py-6 px-8
                    " style={{ height: "calc(100vh - 3.5rem)" }}>
                        <FormContainer>
                          <form onSubmit={() => handleSubmit(onEditEntrySubmit)}>
                            <h2 class="text-2xl font-semibold mb-4">
                              Edit Entry
                            </h2>
                            <FormFieldLabel>
                              Title
                            </FormFieldLabel>
                            <input
                              type="text"
                              {...register("title")}
                              placeholder={entry.title}
                              defaultValue={entry.title}
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
                              defaultValue={entry.image}
                              className="
                        w-full text-base px-4 py-2 border
                        border-gray-300 rounded-lg
                        focus:outline-none focus:border-atlas-400
                        "
                            >
                            </input>
                            <FormFieldLabel>
                              Date
                            </FormFieldLabel>
                            <input
                              placeholder={entry.date}
                              defaultValue={entry.date}
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
                              placeholder={entry.city}
                              defaultValue={entry.city}
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
                              placeholder={entry.category}
                              defaultValue={entry.category}
                              {...register("category")}
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
                              placeholder={entry.description}
                              defaultValue={entry.description}
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
                              Edit
                            </button>
                          </form>
                        </FormContainer>
                      </div>
                    </Modal>}
                  </main>
                  <div className="border-b-2 m-auto border-white w-11/12"></div>
                </div>

              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RollView