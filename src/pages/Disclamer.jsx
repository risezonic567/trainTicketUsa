import { HomeIcon } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router'
import { Helmet } from "react-helmet";

export default function Disclamer() {
    return (
        <>
            <section>
                  <Helmet>
                    <title>Disclaimer | Train Availability Information & Policies</title>
                    <meta name="description" content="Read our disclaimer regarding train availability, ticket information accuracy, third-party services, and website usage limitations." />
                   <link rel="canonical"href="https://www.trainticketsusa.com/disclaimer" />
                </Helmet>
                <div className='max-w-7xl mx-auto py-4 '>
                    <div className='w-full flex  bg-blue-200 text-black p-5 text-xl'>
                        <NavLink to={"/"} ><HomeIcon size={28} className=' hover:text-red-600 transition-all duration-300' /></NavLink>
                        <NavLink to={"/"} className={'ms-4 hover:underline hover:decoration-1 hover:decoration-blue-700 hover:text-red-400 transition-all duration-300'}>Home</NavLink> / <NavLink>Disclaimer</NavLink>
                    </div>
                    <div className='p-4 sm:p-5 md:p-6'>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>
                           The primary purpose of this website and the information contained within is to help educate and assist with booking train tickets. We attempt to maintain the most accurate and current information available regarding train schedules, ticket prices, train availability, and all other travel-related information. However, we do not promise that any of the information provided is complete, reliable, or 100% accurate. The accuracy of the information can change daily, as we are entirely dependent upon the train operators and service provider companies to provide updated information to us. Therefore, we recommend that users independently verify all of the important travel information necessary to make a final decision regarding train ticket purchases before committing to buy a train ticket. Using our site, you agree that all reliance by you on the information provided by us shall be solely at your risk.

                        </p>
                    </div>

                    <div className='p-4 sm:p-5 md:p-6'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl'>Third-Party Services Disclaimer</h2>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>Train Tickets USA is an independent assistance platform for booking travel on trains within the United States. All information about train schedules, fares, availability, and operations is under the control of third-party providers. We do not have an obligation to provide assistance with any operational decision made by these providers.
                        </p>
                    
                    </div>

                    <div className='p-4 sm:p-5 md:p-6'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl'>Accuracy of Information</h2>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>All travel schedules, fares, and availability are subject to change at any time without notice, so it is recommended that you check your booking details thoroughly before making a reservation.

                        </p>
                       

                    </div>

                    <div className='p-4 sm:p-5 md:p-6'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl'>External Links Disclaimer


                        </h2>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>Our site may have links that lead to other sites to help you with your search, but we are not responsible for the contents of the third-party website, what they do with your personal data, how they use cookies, or anything else.
</p>

                    </div>
                   
                    <div className='p-4 sm:p-5 md:p-6'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl'>Limitation of Liability</h2>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>Train Tickets USA will not be responsible for:
</p>
                        <ul className='p-3 sm:p-4 md:p-5 list-disc list-inside pl-2'>
                            <li>Delays in travel, cancellations, or interruption of services
</li>
                            <li>Losses incurred from third-party services.</li>
                            <li>Technical issues or temporary downtime with their website
.</li>
                            <li>Any indirect or consequential loss due to use of their website.
                            </li>

                        </ul>

                    </div>



                    <div className='p-4 sm:p-5 md:p-6'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl'>No Professional Advice</h2>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>Traveling at Content on this website should not be considered legal, financial, or professional travel advice. Customers must make their own determination of their own travel needs based upon independent evaluation of their own situation.

                        </p>

                    </div>

                   


                </div>
            </section>
        </>
    )
}
