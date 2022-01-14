import { Intro } from './rolls/wrap/Intro';
import { Companions } from './rolls/wrap/Companions';
import { Food } from './rolls/wrap/Food';
import { Attractions } from './rolls/wrap/Attractions';
import { Fashion } from './rolls/wrap/Fashion';
import { Summary } from './rolls/wrap/Summary';
import React from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import { useRouter, Router } from 'next/router'
import { useState } from 'react';
import { useContext } from "react";
import HeaderContext from '../contexts/HeaderContext';

export const WrappedRoll = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [roll, setRoll] = useState();

  const [rollFood, setRollFood] = useState();
  const [rollAttraction, setRollAttraction] = useState();
  const [rollPerson, setRollPerson] = useState();
  const [rollFashion, setRollFashion] = useState();
  const [rollAccommodation, setRollAccommodation] = useState();
  const [rollTransportation, setRollTransportation] = useState();
  const [rollOther, setRollOther] = useState();

  const router = useRouter();
  const roll_id = router.query.roll_id
  const API = "http://localhost:3001"
  const { loggedInUser } = useContext(HeaderContext)
  const ApiCall = () => {
    axios({
        method: 'GET',
        url: `${API}/api/v1/entries/roll/${roll_id}/food`,
      })
        .then(function (response) {
          setRollFood(response.data);
          console.log(response.data)
        });
    axios({
        method: 'GET',
        url: `${API}/api/v1/entries/roll/${roll_id}/attraction`,
      })
        .then(function (response) {
          setRollAttraction(response.data);
        });
    axios({
        method: 'GET',
        url: `${API}/api/v1/entries/roll/${roll_id}/person`,
      })
        .then(function (response) {
          setRollPerson(response.data);
        });
    axios({
        method: 'GET',
        url: `${API}/api/v1/entries/roll/${roll_id}/fashion`,
      })
        .then(function (response) {
          setRollFashion(response.data);
        });
    axios({
        method: 'GET',
        url: `${API}/api/v1/entries/roll/${roll_id}/accommodation`,
      })
        .then(function (response) {
          setRollAccommodation(response.data);
        });
    axios({
        method: 'GET',
        url: `${API}/api/v1/entries/roll/${roll_id}/transportation`,
      })
        .then(function (response) {
          setRollTransportation(response.data);
        });
    axios({
        method: 'GET',
        url: `${API}/api/v1/entries/roll/${roll_id}/other`,
      })
        .then(function (response) {
          setRollOther(response.data);
      });
  }

  useEffect(() => {
    if (!router.isReady) return
    ApiCall();
    axios({
      method: 'GET',
      url: `${API}/api/v1/rolls/${roll_id}`,
    })
      .then(function (response) {
        console.log(response.data)
        setRoll(response.data);
        setLoading(false);
      })
  }, [router.isReady]);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div className="h-[92vh] bg-black flex flex-wrap overflow-hidden text-white">
            <div className="h-full w-full scroll-smooth overflow-y-scroll snap-mandatory snap-y">
                <Intro title={roll.title} image={roll.image} start_date={roll.start_date} end_date={roll.start_date} />
                <Food foods={rollFood} />
                <Attractions attractions={rollAttraction} />
                <Companions companions={rollPerson} />
                <Fashion fashions={rollFashion} />
                <Summary />
            </div>
    </div>
  );
}
export default WrappedRoll
