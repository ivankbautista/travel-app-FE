import React from "react";

const CountrySideBar = ({ color, country }) => {
    const [openTab, setOpenTab] = React.useState(1);

    return (
        <div className="h-full w-3/12 ml-1 mt-3 flex flex-col self-start">
            <div className="bg-white max-w-sm ml-3 mr-3 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl">
                <div className="w-full">
                    <ul
                        className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                        role="tablist"
                    >
                        <li className="-mb-px m-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 1
                                        ? "text-white bg-atlas-300"
                                        : "text-black bg-white")
                                }
                                onClick={() => {
                                    // e.preventDefault();
                                    setOpenTab(1);
                                }}
                                data-toggle="tab"
                                // href="#link1"
                                role="tablist"
                            >🏠 Accomodation
                            </a>
                        </li>
                        <li className="-mb-px m-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal mr-3 " +
                                    (openTab === 2
                                        ? "text-white bg-atlas-300"
                                        : "text-black bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                data-toggle="tab"
                                // href="#link2"
                                role="tablist"
                            >🗺️Activities
                            </a>
                        </li>
                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">
                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                    <div>
                                        <div className="flex justify-between text-center">
                                            <a href="https://www.booking.com" className="p-2 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-green-700 m-2">
                                                Hotels
                                            </a>
                                            <a href="https://www.airbnb.com" className="p-2 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 m-2">
                                                AirBnb
                                            </a>
                                            <a href="https://www.hostelworld.com" className="p-2 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 m-2">
                                                Hostels
                                            </a>
                                        </div>
                                        <br />
                                        <p className="text-center">Find out more from other users using the Explore tab!</p>
                                        <button className="mt-4 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md w-full">
                                            Create Entry
                                        </button>
                                    </div>
                                </div>
                                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                    <div>
                                        <div className="flex justify-between text-center">
                                            <a href="https://www.getyourguide.com/" className=" p-2 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-green-700 m-2">
                                                Tours
                                            </a>
                                            <a href="https://www.airbnb.com/s/experiences" className="p-2 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 m-2">
                                                Experiences
                                            </a>
                                            <a href="https://www.klook.com/about/" className="p-2 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 m-2">
                                                Klook
                                            </a>
                                        </div>
                                        <br />
                                        <p className="text-center">Find out more from other users using the Explore tab!</p>
                                        <button className="mt-4 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md w-full">
                                            Create Entry
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountrySideBar