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
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
  const [roll, setRoll] = useState();
  const [entries, setEntries] = useState();
  const [specificID, setSpecificID] = useState(false);

  const router = useRouter();
  const roll_id = router.query.roll_id
  const entry_id = router.query.entry_id
  const API = "http://localhost:3001"
  const { loggedInUser } = useContext(HeaderContext)

  useEffect(() => {
    reset()
  }, [editEntryModalIsOpen])

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
        }).then(function (response) {
          console.log(response.data)
          setEntries(response.data);
          setLoading(false);
        })
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

    }).catch((error) => {
      console.log(error.response); // TEMP
    });
  }

  const makeNewEntry = () => {
    setEntryModalIsOpen(true)
  }

  const rollUp = () => {
    router.push(`/rolls/${roll_id}/wrap`)
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
        public: data.public,
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
    // console.log(specificID)
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
        public: data.public,
      }
    }).then((response) => {
      console.log(response.data)

      setEditEntryModalIsOpen(false)
      router.reload(window.location.pathname)
    })
    // .catch((error) => {
    //   console.log(error.response); // TEMP
    // });
  }


  return (
    <>
      {/* Profile header  */}
        <div style={{ backgroundImage: `url(${roll.image})` }} className="h-72 bg-cover flex flex-col justify-center items-center">
          {/* <p className="rounded-full w-32 h-32 bg-red-400 mt-3"></p> */}
          <h1 className="text-white text-7xl font-display">{roll.title}</h1>
          <h1 className="text-white text-2xl font-display">{roll.start_date} to {roll.end_date}</h1>
          <div className="flex justify-between w-56 h-1/4">
            {loggedInUser.id === roll.user_id &&
              <>
                <button onClick={editRoll}><a className="p-3 text-white bg-atlas-400 hover:bg-atlas-500 font-display rounded">Edit</a></button>
                <button onClick={deleteRoll}><a className="p-3 text-white bg-atlas-400 hover:bg-atlas-500 font-display rounded">Delete</a></button>
                <button onClick={rollUp}><a className="p-3 text-white bg-atlas-400 hover:bg-atlas-500 font-display rounded">Roll It</a></button>
              </>
            }
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
                    {...register("category")}
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
          </Modal>
        }
        <div style={{ height: 'calc(100vh - 70rem)' }} className="flex items-center bg-white">
          <div className="h-full flex-grow w-9/12">
            <button onClick={makeNewEntry} className="ml-10 bg-atlas-400 font-bold text-white px-8 py-3 mt-3 ml-3">Create Entry</button>
            <div className="h-[30vh] bg-atlas-600 mt-4 overflow-scroll p-4 m-5">
              {entries.map((entry) =>
                <div key={entry.id} className="m-auto">
                  <main className="flex w-full p-10 flex">
                    <img src={`${entry.image}`} className="h-32 b rounded-2xl w-32 object-cover"></img>

                    <div className="ml-3 flex-col text-white font-body">
                      <div className="pt-1">
                        <div className="flex mb-2 text-lg">
                          <p><span className="italic font-bold">{entry.title}</span> | ???? <span className="italic font-bold">{entry.city}</span> </p>
                        </div>
                        <h2>{entry.category}</h2>
                        <h2 className="font-semibold mt-1">{entry.date}</h2>
                        <p className="mt-2 text-justify">{entry.description}</p>
                      </div>
                    </div>

                    <div className="w-1/3 flex-grow flex justify-end">
                      <div onClick={() => editEntry(entry.id)} className="cursor-pointer h-full mr-4 text-xl text-blue-400 hover:text-blue-500">
                        ??????
                      </div>

                      <div onClick={() => deleteEntry(entry.id)} className="cursor-pointer h-full text-xl text-red-400 hover:text-red-500">
                        ???????
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
                          <form onSubmit={handleSubmit(onEditEntrySubmit)}>
                            <h2 class="text-2xl font-semibold mb-4">
                              Edit Entry!
                            </h2>
                            <FormFieldLabel>
                              Title
                            </FormFieldLabel>
                            <input
                              type="text"
                              {...register("title")}
                              placeholder={"My Adventure"}
                              defaultValue={entries.filter((entry) => entry.id === specificID)[0].title}
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
                              defaultValue={entries.filter((entry) => entry.id === specificID)[0].image}
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
                              placeholder={"Date here"}
                              defaultValue={entries.filter((entry) => entry.id === specificID)[0].date}
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
                              defaultValue={entries.filter((entry) => entry.id === specificID)[0].country}
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
                              placeholder={"City here"}
                              defaultValue={entries.filter((entry) => entry.id === specificID)[0].city}
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
                              placeholder={"Category here"}
                              defaultValue={entries.filter((entry) => entry.id === specificID)[0].category}
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
                              defaultValue={entries.filter((entry) => entry.id === specificID)[0].description}
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
                              defaultValue={entries.filter((entry) => entry.id === specificID)[0].public}
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
    </>
  );
}

export default RollView