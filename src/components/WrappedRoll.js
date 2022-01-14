import { Intro } from './rolls/wrap/Intro';
import { Duration } from './rolls/wrap/Duration';
import { Companions } from './rolls/wrap/Companions';
import { Language } from './rolls/wrap/Language';
import { Food } from './rolls/wrap/Food';
import { Attractions } from './rolls/wrap/Attractions';
import { Summary } from './rolls/wrap/Summary';
import React from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import { useRouter, Router } from 'next/router'
import { useState } from 'react';
import { useContext } from "react";
import HeaderContext from '../contexts/HeaderContext';

export const WrappedRoll = () => {
    const [isLoading, setLoading] = useState(true);
    const [roll, setRoll] = useState();
    const router = useRouter();
    const roll_id = router.query.roll_id
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
          setLoading(false);
        });
      axios({
        method: 'GET',
        url: `${API}/api/v1/entries/roll/${roll_id}/food`,
      })
        .then(function (response) {
          console.log(response.data)
        }); 
    }, [router.isReady]);
  
    if (isLoading) {
      return <div className="App">Loading...</div>;
    }
    
      return (
        <div className="h-[92vh] bg-black flex flex-wrap overflow-hidden text-white">
            <div className="h-full w-full scroll-smooth overflow-y-scroll snap-mandatory snap-y">
                <Intro />
                <Duration />
                <Companions />
                <Language />
                <Food />
                <Attractions />
                <Summary />
            </div>
        </div>
    )
}
