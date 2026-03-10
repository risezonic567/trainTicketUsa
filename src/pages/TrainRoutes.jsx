import React, { useState } from 'react';
import { ArrowRight, Clock, IndianRupee, TrainIcon } from 'lucide-react';
// import { internationalTrains } from "../data/internationalTrains";
import { regiontrain } from '../data/regiontrain'
import { NavLink } from 'react-router-dom';
import { Helmet } from "react-helmet";

export default function TrainRoutes() {
    console.log(regiontrain)
    let [selected, setSelected] = useState("Northeast")
    let filter = regiontrain.find(i => i.region === selected)
    console.log(regiontrain)
    console.log(selected)
    return (
        <>
            <section>
                <Helmet>
                    <title>Best Train Routes in USA | Explore All Train Routes</title>
                    <meta name="description" content="Discover the best train routes in USA. Explore popular train journeys, compare ticket options, and plan your train travel across the country." />
                    <link rel="canonical" href="http://www.trainticketsusa.com/all-train-routes" />
                    <script type="application/ld+json">
                    {`
{
"@context":"https://schema.org",
"@type":"CollectionPage",
"name":"All Train Routes in the USA",
"url":"http://www.trainticketsusa.com/all-train-routes",
"description":"Explore popular train routes across the United States and find the best train travel options.",
"publisher":{
"@type":"Organization",
"name":"Train Tickets USA",
"logo":"https://www.trainticketsusa.com/lOGO-Final-Train-Tickets-usa.png"
},
"about":{
"@type":"Service",
"name":"Train Route Information",
"provider":{
"@type":"Organization",
"name":"Train Tickets USA"
}
}
}
`}
</script>
                </Helmet>
                <div className="w-full h-full ">
                    <div className=' overflow-hidden relative'>
                        <img src="/images/All Train Routes in the USA banner.jpg.jpeg" alt="All Train Routes in the USA banner" className='w-full h-full object-cover' />
                        <div className='absolute top-50 left-150 text-center m-auto'>
                            <h2 className=' text-blue-100 max-w-xl mx-auto mt-4 text-center text-xl sm:text-2xl md:text-3xl'> All Train Routes in the USA
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
            <div className='max-w-7xl mx-auto py-5 px-4'>
                <h2 className='text-center text-xl sm:text-2xl md:text-3xl'>All Train Routes in the USA</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                    <div className='order-2 md:order-2' >
                        <p className='text-justify text-lg sm:text-xl'>Find details on popular train routes through the USA and see how to book a train ticket to/from any city in the United States. We help make it easy for travelers to search for major train routes and other travel options between cities in the USA.
                        </p>
                        <p className='text-justify text-lg sm:text-xl'>Traveling on Amtrak can be one of the most enjoyable and convenient modes of transportation for seeing the USA. Our complete list of Amtrak railroads will help you find a connection between two cities, compare popular corridors, and make an easy and fast online reservation.
                        </p>
                        <p className='text-justify text-lg sm:text-xl'>
                            Whether you are traveling from one business location to another or taking an enjoyable scenic trip, you can find routes by the different major cities of departure and destination.
                        </p>
                    </div>
                    <div className='order-1 md:order-1 rounded-2xl relative border group overflow-hidden transition'>
                        <img src="/images/All Train Routes in the USA 1.jpg.jpeg" className='h-full w-full group-hover:scale-110' alt="All Train Routes in the USA" />
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto py-7 px-4">
                <h2 className='text-center text-xl sm:text-2xl md:text-3xl'>Most Popular Train Routes in the USA</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
                    <div className='relative border group overflow-hidden rounded-2xl transition'>
                        <div>
                            <img src="/images/New York to Boston.jpg.jpeg" className='h-full w-full group-hover:scale-110' alt="New York to Boston" />
                            <span className="inline-flex absolute top-0 items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">New York</span>
                            <span className="inline-flex absolute top-0 right-0 items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">Boston</span>
                        </div>
                        <div className='p-4 sm:p-5 md:p-6'>
                            <h2 className='text-lg sm:text-xl md:text-2xl mb-2 text-black'>New York to Boston Train</h2>
                            <p className='text-sm sm:text-base text-gray-600 mb-4'>A popular Northeast Corridor route that provides many trips each day, providing a good schedule of train times between large metropolitan areas;
                            </p>
                            <NavLink className={' mb-3  text-center  text-lg sm:text-xl md:text-2xl text-blue-600 hover:text-red-400 rounded-2xl flex'}>View Details <ArrowRight size={24} className='ms-2 mt-1' /></NavLink>
                        </div>

                    </div>
                    <div className='relative border group overflow-hidden rounded-2xl transition'>
                        <div>
                            <img src="/images/Chicago to Detroit.jpg.jpeg" className='h-full w-full group-hover:scale-110' alt="Chicago to Detroit" />
                            <span className="inline-flex absolute top-0 items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">Chicago</span>
                            <span className="inline-flex absolute top-0 right-0 items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">Detroit</span>
                        </div>
                        <div className='p-4 sm:p-5 md:p-6'>
                            <h2 className='text-lg sm:text-xl md:text-2xl mb-2 text-black'>Chicago to Detroit Train
                            </h2>
                            <p className='text-sm sm:text-base text-gray-600 mb-4'>An attractive option in the Midwest, providing time and comfort on a great rail connection for business trips and weekend getaways;

                            </p>
                            <NavLink className={' mt-4  text-center  text-lg sm:text-xl md:text-2xl text-blue-600 hover:text-red-400 rounded-2xl flex'}>View Details <ArrowRight size={24} className='ms-2 mt-1' /></NavLink>
                        </div>
                    </div>

                    <div className='relative border group overflow-hidden rounded-2xl transition'>
                        <div>
                            <img src="/images/Los Angeles to San Diego.jpg.jpeg" className='h-full w-full group-hover:scale-110' alt="Los Angeles to San Diego" />
                            <span className="inline-flex absolute top-0 items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">Los Angeles</span>
                            <span className="inline-flex absolute top-0 right-0 items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">San Diego</span>

                        </div>

                        <div className='p-4 sm:p-5 md:p-6'>
                            <h2 className='text-lg sm:text-xl md:text-2xl mb-2 text-black'>Los Angeles to San Diego Train
                            </h2>
                            <p className='text-sm sm:text-base text-gray-600 mb-4'>A beautiful rail route along the West Coast, enjoyed by commuters and tourists a like.

                            </p>
                            <NavLink className={' mb-3  text-center  text-lg sm:text-xl md:text-2xl text-blue-600 hover:text-red-400 rounded-2xl flex'}>View Details <ArrowRight size={24} className='ms-2 mt-1' /></NavLink>
                        </div>

                    </div>
                </div>
            </div>
            <div className='max-w-7xl mx-auto py-5 px-4'>
                <h2 className='text-center text-xl sm:text-2xl md:text-3xl'>Explore Train Routes by Region</h2>
                <div className="w-full text-center p-2 sm:p-3 md:p-4 ">
                    {
                        ["Northeast", "Midwest", "South", "West Coast"].map((item, id) => (
                            <button key={id} onClick={() => setSelected(item)} className={`  bg-blue-600 cursor-pointer text-white p-1 sm:p-2 md:p-3 mt-2 rounded gap-10 ms-5 ${selected === item ? 'bg-red-500 transition duration-300 cursor-pointer' : ""}`} >
                                {item}
                            </button>
                        ))
                    }
                </div>
                <div className="grid grid-cols-1 gap-4 py-4">
                    {filter?.routes?.map((item) => (
                        <div
                            key={item.routeId}
                            className="group border rounded-2xl p-4 md:p-5 bg-white hover:shadow-xl transition duration-300 hover:-translate-y-1"
                        >
                            <div className="flex items-center justify-between flex-wrap gap-4">

                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                                    <div>
                                        <h2 className="text-lg font-semibold text-gray-800">
                                            {item.startTime}
                                        </h2>
                                        <p className="text-sm text-gray-500">{item.from}</p>
                                    </div>
                                </div>


                                <div className="flex-1 flex items-center gap-3 px-3">
                                    <div className="hidden md:block h-[2px] bg-gray-300 flex-1 relative">
                                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-2 text-xs text-gray-500">
                                            {item.duration}
                                        </span>
                                    </div>
                                    <span className="text-xs md:text-sm text-blue-600 font-medium">
                                        <TrainIcon size={24} /> {item.trainName}
                                    </span>
                                </div>


                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div>
                                        <h2 className="text-lg font-semibold text-gray-800">
                                            {item.endTime}
                                        </h2>
                                        <p className="text-sm text-gray-500">{item.to}</p>
                                    </div>
                                </div>


                                <div className="text-right">
                                    <p className="text-lg font-bold text-green-600">${item.fare}</p>
                                    <button className="mt-2 px-4 py-1.5 rounded-xl bg-blue-600 text-white text-sm hover:bg-red-500 transition">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <div className='max-w-7xl mx-auto py-5 px-4'>
                <h2 className='text-center text-xl sm:text-2xl md:text-3xl'>Why Choose Rail Travel?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">

                    <div className='order-2 md:order-2 '>
                        <p className='text-justify text-lg sm:text-xl'>When you take a trip on the train, you can:</p>

                        <ul className='p-3 sm:p-4 md:p-5 list-disc list-inside pl-2'>
                            <li>Take advantage of comfortable seating (and space) in the cabin.</li>
                            <li>Leave from downtown areas.</li>
                            <li>Be eco-friendly with your travel plans.</li>
                            <li>Have flexibility in your travel schedule.</li>
                            <li>Choose between reliable forms of travel for short or long distances.</li>
                        </ul>
                        <p className='text-justify text-lg sm:text-xl'>In addition, this section will contain information about key phrases such as</p>

                        <ul className='p-3 sm:p-4 md:p-5 list-disc list-inside pl-2'>
                            <li>Benefits of Train Travel</li>
                            <li>Rail Travel in the United States</li>
                            <li>Comfortable Train Travel
                            </li>
                        </ul>
                    </div>

                    <div className='order-1 md:order-1 rounded-2xl relative border group overflow-hidden transition'>
                        <img src="/images/Why Choose Rail Travel.jpg.jpeg" className='w-full h-full group-hover:scale-110' alt="Why Choose Rail Travel" />
                    </div>
                </div>
            </div>
            <div className='max-w-7xl mx-auto py-5 px-4'>
                <h2 className='text-center text-xl sm:text-2xl md:text-3xl'>Explore City-to-City Train Travel Options</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                    <div className='order-1 md:order-1 '>
                        <p className='text-justify text-lg sm:text-xl'>Finding the right train route is the first step toward a smooth travel experience. Our site allows people to see all of the significant train routes within the USA and compare different route options so they can plan effectively. When returning home, travelers can look for connecting options, or if taking long-distance trains, users can find continuing route options, all according to their travel plans. We assist users in searching for popular train routes or helping with weekend getaways throughout the country via our route directory, simplifying the trip planning process.

                        </p>

                    </div>
                    <div className='order-2 md:order-2 rounded-2xl relative border group overflow-hidden transition'>
                        <img src="/images/City to city.jpg.jpeg" className='w-full h-full group-hover:scale-110' alt="/City to city" />
                    </div>
                </div>
            </div>
        </>
    );
}
