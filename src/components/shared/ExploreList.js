// import { exploreData } from "../../../exploreData";
import React from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import { useRouter, Router } from 'next/router'
import { useState } from 'react';
import { useContext } from 'react';
import HeaderContext from '../../contexts/HeaderContext';
import ExploreEntry from './ExploreEntry';

export const ExploreList = () => {
    const [isLoading, setLoading] = useState(true);
    const [entries, setEntries] = useState();

    const router = useRouter();
    const country_name = router.query.name
    const API = "http://localhost:3001"
    const { loggedInUser } = useContext(HeaderContext)
    console.log(country_name)

    useEffect(() => {
        if (!router.isReady) return
        axios({
            method: 'GET',
            url: `${API}/api/v1/entries/country/${country_name}`,
        })
            .then(function (response) {
                console.log(response.data)
                setEntries(response.data);
                setLoading(false);
            });
    }, [router.isReady]);

    if (isLoading) {
        return <div className="App">Loading...</div>;
    }

    return (
        < div className="h-screen pr-3" >
            {
                entries.map((entry) =>
                    <ExploreEntry key={entry.id} exploreEntry={entry} />
                )
            }
        </div >
    )
}

export default ExploreList