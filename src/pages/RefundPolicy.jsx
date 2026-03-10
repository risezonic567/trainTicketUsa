import { HomeIcon } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router'
import { Helmet } from "react-helmet";
export default function RefundPolicy() {
    return (
        <>
            <section>
                <Helmet>
                    <title>Train Ticket Refund Policy USA | Refund Information</title>
                    <meta name="description" content="Read our train ticket refund policy USA travelers should know. Understand refund eligibility, processing time, and cancellation procedures." />
                    <link rel="canonical" href="https://www.trainticketsusa.com/refund-policy" />
                </Helmet>
                <div className='max-w-7xl mx-auto py-4 '>
                    <div className='w-full flex  bg-blue-200 text-black p-5 text-xl'>
                        <NavLink to={"/"} ><HomeIcon size={28} className=' hover:text-red-600 transition-all duration-300' /></NavLink>
                        <NavLink to={"/"} className={'ms-4 hover:underline hover:decoration-1 hover:decoration-blue-700 hover:text-red-400 transition-all duration-300'}>Home</NavLink> / <NavLink>Refund Policy</NavLink>
                    </div>
                    <div className='p-4 sm:p-5 md:p-6'>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>
                            Our Refund Policy lays out the rules you will need to follow regarding cancellations and refund requests when you use Train Tickets USA's Booking Assistance Services. Train Tickets USA will work with your train operator to provide you with accurate adjudication timelines, processes, and service fees so that you can make the best decision possible before you make an appointment. Refund eligibility is established by the fare rules and company policies of third-party rail operators; thus, it is important for you to thoroughly review your reservation detail to check for possible ways to be ineligible to receive a refund. By creating this policy, we are able to provide users of Train Tickets USA's Booking Assistance Services clarity and reduce any potential confusion while providing a fair, consistent, and user-friendly way to make exemption requests and to ensure every user has a positive booking experience.
                        </p>
                    </div>

                    <div className='p-4 sm:p-5 md:p-6'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl'>General Refund Terms</h2>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>The refund eligibility and requirements will depend on the policies of the individual train owners or service providers that have been established for their respective trains. Refundable tickets vary by type, so they may be:

                        </p>
                        <ul className='p-3 sm:p-4 md:p-5 list-disc list-inside pl-2'>
                            <li> Fully refundable
                            </li>
                            <li>Partially refundable
                            </li>
                            <li>Non-refundable
                            </li>

                        </ul>

                        <p className='text-sm sm:text-base md:text-lg text-justify'>Depending upon the conditions associated with each of the respective fares. Booking fees, service fees, and assistance fees are also not typically refundable once the booking has been finalized.
                        </p>
                    </div>

                    <div className='p-4 sm:p-5 md:p-6'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl'>Cancellation Policy</h2>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>Customers may request cancellations before the scheduled departure time. Cancellation approval and refund amounts are subject to operator rules and ticket conditions at the time of purchase.
                        </p>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>Late cancellation requests or missed departures may not qualify for refunds.
                        </p>

                    </div>

                    <div className='p-4 sm:p-5 md:p-6'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl'>Refund Processing Time

                        </h2>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>Customers can cancel their reservation before they are meant to arrive; however, the ability to cancel and get a refund will be determined by the operator's rules and ticket policy at the time of purchase.</p>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>Late cancellation request(s) and customers who do not make their scheduled time will not be entitled to refunds.</p>

                    </div>
                    <div className='p-4 sm:p-5 md:p-6'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl'>Non-Refundable Situations</h2>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>Examples of when a refund will not be issued are the following:</p>
                    </div>
                    <div className='p-4 sm:p-5 md:p-6'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl'>Data Security</h2>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>We have implemented appropriate technical and organizational safeguards to protect your data against unauthorized access, misuse, or disclosure. Only authorized personnel have access to personal data.</p>
                        <ul className='p-3 sm:p-4 md:p-5 list-disc list-inside pl-2'>
                            <li>The passenger did not show up for their flight or missed their train departure.</li>
                            <li>The passenger provided incorrect information at the time of booking.</li>
                            <li>The ticket was part of an irredeemable fare class.</li>
                            <li>The request was received after the schedule's departure.
                            </li>

                        </ul>

                    </div>



                    <div className='p-4 sm:p-5 md:p-6'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl'>Booking Modifications</h2>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>Traveling at different times, using different routes, or specifying different passengers for your booking will require checking availability and the operators' policies on these changes and will incur any applicable fees or fare differences.

                        </p>

                    </div>

                    <div className='p-4 sm:p-5 md:p-6'>
                        <h2 className='text-xl sm:text-2xl md:text-3xl'>Contact for Refund Requests
                        </h2>
                        <p className='text-sm sm:text-base md:text-lg text-justify'>Customers can reach out to our support team for assistance with cancellations or refunds via any of the contact details found on our website.
                        </p>

                    </div>


                </div>
            </section>
        </>
    )
}
