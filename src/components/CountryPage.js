import Image from 'next/image'
import React from "react";
import CountrySideBar from '../components/shared/CountrySidebar'
import CountryEntry from './shared/CountryEntry';
import ExploreList from './shared/ExploreList';
import { useState } from 'react'

const CountryPage = ({ country }) => {

    const [isMyExploreList, setIsMyExploreList] = useState(true);
    const [isMyCountryEntry, setIsMyCountryEntry] = useState(false);

    const displayPage = (page) => {
        setIsMyExploreList(page === "exploreList" ? true : false)
        setIsMyCountryEntry(page === "countryEntry" ? true : false)
    }

    return (
        <div className="h-screen">
            {/* Country Header */}
            <div style={{ width: '100%', height: '20%', position: 'relative' }} className="w-full relative">
                <div className="absolute bg-gray-600 w-full h-full opacity-60 top-0 left-0 z-10"></div>
                <div className="absolute z-20 flex flex-col items-center w-full justify-center h-full">
                    <div className="text-white font-bold text-6xl">{country.name}</div>
                </div>
                <Image src={country.imageUrl} layout='fill' objectFit='cover' />
            </div>

            {/* Sidebar, Explore & Entry Page */}
            <div className="flex items-center h-full">
                <CountrySideBar />

                <div className="h-full flex-grow w-9/12">
                    <button className={`${isMyExploreList ? "bg-purple-400 font-bold text-white" : "bg-gray-300 font-bold text-black"} px-8 py-3 mt-3 ml-3`} onClick={() => displayPage("exploreList")}>Explore</button>
                    <button className={`${isMyCountryEntry ? "bg-purple-400 font-bold text-white" : "bg-gray-300 font-bold text-black"} px-8 py-3 mt-3`} onClick={() => displayPage("countryEntry")}>My Entries</button>

                    {isMyExploreList && <ExploreList />}
                    {isMyCountryEntry && <CountryEntry />}
                </div>
            </div>
        </div>
    );
};



export default CountryPage