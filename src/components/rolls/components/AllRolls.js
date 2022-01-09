import React from 'react';
import axios from 'axios';
import Router from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormContainer } from '../../shared/FormContainer';
import { FormFieldLabel } from '../../shared/FormFieldLabel';
import { useContext } from "react";
import HeaderContext from '../../../contexts/HeaderContext';
import ErrorDisplay from '../../shared/ErrorDisplay';

export const AllRolls = (props) => {
    const API = "http://localhost:3001"
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [errorList, setErrorList] = useState([])
    const {
      setLoggedIn,
      setLoggedInUser,
    } = useContext(HeaderContext) // destructing to get menuItems from HeaderContext
  
    const onSubmit = (data) => {
      const errorList = []
  
      // axios

    };  
    return (
    <>
        <h1>To do: List of fruits</h1>
    </>
  )
}

export default AllRolls