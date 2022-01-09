import React from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import { useRouter, Router } from 'next/router'
import { useState } from 'react';
import Link from 'next/link';
import { useForm } from "react-hook-form";


export const RollView = ({ roll }) => {
  const [isLoading, setLoading] = useState(true);
  const [roll, setRoll] = useState();
  const router = useRouter();
  const { handleSubmit } = useForm({});
  const roll_id = router.query.roll_id
  const next_roll = roll_id - 1;
  const API = "http://localhost:3001"
    useEffect(() => {
        axios({
            method: 'GET',
            url: `${API}/api/v1/rolls/${roll_id}`,
          })
            .then(function (response) {
              console.log(response.data)
              setRoll(response.data);
              setLoading(false);
            });
      }, []);
    
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

  return (
    <div className="text-white">
      This roll is for {roll.title}!
      <br />{roll.start_date}
      <br />{roll.end_date}
      <br />{roll.image}
      <br />
      <Link href={ '/rolls/' + roll_id + '/edit' }>
      <button className="bg-atlas-600 p-2 m-2 w-40 text-sm">
            EDIT THIS ROLL
      </button>
      </Link>
      <form className="form" onSubmit={handleSubmit(deleteRoll)}>
      <button className="bg-atlas-600 p-2 m-2 w-40 text-sm" type="submit">
            DELETE THIS ROLL
      </button>
        </form>
    </div>
    );
}

export default RollView