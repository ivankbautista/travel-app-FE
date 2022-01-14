import { Intro } from './rolls/wrap/Intro';
import { Companions } from './rolls/wrap/Companions';
import { Food } from './rolls/wrap/Food';
import { Accommodation } from './rolls/wrap/Accommodation';
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

  const [rollCategory, setRollCategory] = useState();

  const router = useRouter();
  const roll_id = router.query.roll_id
  const API = "http://localhost:3001"
  const { loggedInUser } = useContext(HeaderContext)

  useEffect(() => {
    if (!router.isReady) return
    axios({
      method: 'GET',
      url: `${API}/api/v1/entries/roll/${roll_id}`,
    })
      .then(function (response) {
        setRollCategory(response.data);
        console.log(response.data)
      })
      .then(()=> {
        axios({
          method: 'GET',
          url: `${API}/api/v1/rolls/${roll_id}`,
        })
          .then(function (response) {
            console.log(response.data);
            setRoll(response.data);
            console.log("this first")  
          })
          .then(()=> {
            console.log("this second")
            setLoading(false);
          });
          });
      }, [router.isReady]);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div className="h-[92vh] flex flex-wrap w-[100vw] overflow-hidden text-white">
            <div className="h-full w-full scroll-smooth overflow-y-scroll snap-mandatory snap-y">
                <Intro title={roll.title} image={roll.image} start_date={roll.start_date} end_date={roll.start_date} />
                <Food foods={rollCategory} />
                <Companions companions={rollCategory} />
                <Attractions attractions={rollCategory} />
                <Fashion fashions={rollCategory} />
                <Accommodation accommodations={rollCategory} />
                <Summary />
            </div>
    </div>
  );
}
export default WrappedRoll
