import Image from 'next/image'
import React from "react";
import CountrySideBar from '../components/shared/CountrySidebar'
import MyCountryEntryList from './shared/MyCountryEntryList';
import ExploreList from './shared/ExploreList';
import { useState } from 'react'

const CountryPage = ({ country }) => {

    const [isMyExploreList, setIsMyExploreList] = useState(true);
    const [isMyCountryEntryList, setIsMyCountryEntryList] = useState(false);

    const displayPage = (page) => {
        setIsMyExploreList(page === "exploreList" ? true : false)
        setIsMyCountryEntryList(page === "myCountryEntryList" ? true : false)
    }

    return (
        <div style={{ height: 'calc(100vh - 3.5rem)' }}>
            {/* Country Header */}
            <div style={{ width: '100%', height: '20%', position: 'relative' }} className="w-full relative">
                <div className="absolute bg-gray-600 w-full h-full opacity-60 top-0 left-0 z-10"></div>
                <div className="absolute z-20 flex flex-col items-center w-full justify-center h-full">
                    <div className="text-white font-bold text-7xl font-display">{country.name}</div>
                </div>
                <Image src={country.imageUrl} layout='fill' objectFit='cover' />
            </div>

            {/* Sidebar, Explore & Entry Page */}
            <div className="flex items-center h-full" style={{ height: 'calc(100vh - 3.5rem - 20%)' }}>
                <CountrySideBar />

                <div className="h-full flex-grow w-9/12 overflow-y-auto" style={{ height: 'calc(100vh - 3.5rem - 20%)' }}>

                    {isMyExploreList && <ExploreList />}

                </div>
            </div>
        </div>
    );
};



export default CountryPage