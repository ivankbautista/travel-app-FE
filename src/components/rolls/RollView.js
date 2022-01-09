import React from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import { useRouter, Router } from 'next/router'
import { useState } from 'react';
import { FormContainer } from '../shared/FormContainer'
import { FormFieldLabel } from '../shared/FormFieldLabel'
import { useForm } from "react-hook-form";
import { useContext } from "react";
import HeaderContext from '../../contexts/HeaderContext';
import ErrorDisplay from '../shared/ErrorDisplay';

export const RollView = ({ roll }) => {
    const [isLoading, setLoading] = useState(true);
    const [roll, setRoll] = useState();
    const router = useRouter()
    let roll_id = router.query.roll_id
    const API = "http://localhost:3001"
    useEffect(() => {
        axios({
            method: 'GET',
            url: `${API}/api/v1/rolls/${roll_id}`,
          })
            .then(function (response) {
              console.log("this should happen again")
              console.log(response.data)
              setRoll(response.data);
              setLoading(false);
            });
      }, []);
    
      if (isLoading) {
        return <div className="App">Loading...</div>;
      }
    
      return (
        <div className="text-white">
          This roll is for {roll.title}!
          <br />{roll.start_date}
          <br />{roll.end_date}
          <br />{roll.image}
    </div>
    );
}

export default RollView