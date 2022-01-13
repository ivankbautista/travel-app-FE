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

export const RollView = () => {
  const [isLoading, setLoading] = useState(true);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [ roll, setRoll ] = useState();
  const router = useRouter();
  const roll_id = router.query.roll_id
  const API = "http://localhost:3001"
  const {
    loggedInUser,
  } = useContext(HeaderContext) 

  useEffect(() => {
    if(!router.isReady) return
    axios({
      method: 'GET',
      url: `${API}/api/v1/rolls/${roll_id}`,
    }).then(function (response) {
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

  return (
    <>
     {/* Profile header  */}
      <div className="h-screen">
        <div style={{backgroundImage: `url(${roll.image})` }} className="h-72 flex flex-col justify-center items-center">
          {/* <p className="rounded-full w-32 h-32 bg-red-400 mt-3"></p> */}
          <h1 className="text-white text-7xl">{roll.title}</h1>
          <h1 className="text-white text-2xl">{roll.start_date} to {roll.end_date}</h1>
          <div className="flex justify-between w-56 h-1/4">
          { loggedInUser?.id !== roll?.user_id &&
            <>
              <button onClick={editRoll}><a className="p-3 text-white bg-blue-500 rounded">Edit</a></button>
              <button onClick={deleteRoll}><a className="p-3 text-white bg-blue-500 rounded">Delete</a></button>
            </>
          }
          </div>
        </div>
        {editModalIsOpen && <Modal setShowModal={setEditModalIsOpen}>
        <div className="
        flex flex-col justify-center items-center" style={{height: "calc(100vh - 3.5rem)"}}>
            <FormContainer>
                <form onSubmit = { handleSubmit(onEditSubmit) }>
                    <h2 className="text-2xl font-semibold mb-4">
                        Edit Roll
                    </h2>
                    <FormFieldLabel>
                        Title
                    </FormFieldLabel>
                    <input
                        type="string"
                        {...register("title")}
                        placeholder={ roll.title }
                        defaultValue = { roll.title }
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
                        placeholder={ roll.start_date }
                        defaultValue = { roll.start_date }
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
                        placeholder={ roll.end_date }
                        defaultValue = { roll.end_date }
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
                        placeholder={ roll.image }
                        defaultValue = { roll.image }
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
        </Modal> }
        {/* Sidebar & Main content */}
        <div className="flex items-center h-full">
          <p className="h-screen bg-gray-600 w-3/12 text-white mt-3 flex flex-col justify-center items-center justify-self-start self-start">bio/user stats</p>
        </div>
    </div>
    </>
    );
}

export default RollView