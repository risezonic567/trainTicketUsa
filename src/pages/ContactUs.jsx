import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router'
import { Helmet } from "react-helmet";
export default function ContactUs() {
    return (
        <>
            <section>
                 <Helmet>
                    <title>Train Booking USA Support | Contact Us</title>
                    <meta name="description" content="Need help with train booking USA services? Contact our support team for assistance with reservations, availability, and ticket inquiries." />
                  <link rel="canonical"href="https://www.trainticketsusa.com/contact-us" />
                </Helmet>
                <div className="w-full h-full ">
                    <div className=' overflow-hidden relative'>
                        <img src="/images/contactus.jpg.jpeg" alt="contact image" className='w-full h-full object-cover' />
                        <div className='absolute top-50 left-150 text-center m-auto'>
                            <h1 className=' text-blue-100 max-w-xl mx-auto mt-4 text-center text-xl sm:text-2xl md:text-3xl'> All Train Routes in the USA
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
            <div className='max-w-7xl mx-auto py-5 px-4'>
                <div className='max-w-3xl m-auto'>
                    <h2 className='text-center text-xl sm:text-2xl md:text-3xl'>Get In Touch</h2>
                    <p className='text-center text-sm sm:text-base text-gray-600 text-wrap'>Get in touch with our friendly team to get help with train routes, schedules, fares, bookings, and travel planning for a smooth, stress-free journey across the United States today.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6">
                    <div className='order-1 md:order-1 '>
                        <div className='border-0 flex  bg-blue-100 z-10 box- p-7 w-full rounded-2xl my-3 shadow-lg shadow-red-500/40 transition duration-300  hover:-translate-x-3 cursor-pointer'>
                            <div className='h-14 w-14 bg-white text-blue-600 rounded-full flex items-center justify-center '>
                                <MapPin className='text-3xl' />
                            </div>
                            <h2 className=' text-lg  md:text-xl ms-2'>Address:-</h2>
                            <NavLink className='text-sm sm:text-base text-wrap text-justify font-semibold text-gray-600 mt-2 ms-2'>17662 Irvine Blvd, Suite 9 Tustin, CA 92780</NavLink>
                        </div>
                        <div className='border-0 flex  ms-2 bg-blue-100 z-10 box- p-7 w-full rounded-2xl my-3  shadow-lg shadow-red-500/40 transition duration-300  hover:-translate-x-3 cursor-pointer'>
                            <div className='h-14 w-14 bg-white text-blue-600 rounded-full flex items-center justify-center '>
                                <Mail className='text-3xl' />
                            </div>
                            <h2 className=' text-xl sm:text-2xl md:text-3xl ms-2'>Email:-</h2>
                            <NavLink className={'ms-2 mt-2 text-blue-800 text-sm  ps-2 hover:underline hover:decoration-2 hover:decoration-blue-600 hover:text-red-300 transition'} to={'mailto:support@gmail.com'}>support@gmail.com</NavLink>
                        </div>
                        <div className='flex border-0 bg-blue-100 z-10 box- p-7 w-full rounded-2xl my-3  shadow-lg shadow-red-500/40 transition duration-300  hover:-translate-x-3 cursor-pointer'>
                            <div className='h-14 w-14 bg-white text-blue-600 rounded-full flex items-center justify-center '>
                                <Phone className='text-3xl' />
                            </div>
                            <h2 className=' text-xl sm:text-2xl md:text-3xl ms-2'>Phone:-</h2>
                            <NavLink className={'ms-2 mt-2 text-blue-800 text-sm  ps-2 hover:underline hover:decoration-2 hover:decoration-blue-600 hover:text-red-300 transition'} to={'tel:8663061219'}>8663061219</NavLink>
                        </div>

                    </div>
                    <div className="order-2 md:order-2 rounded-2xl relative border bg-white shadow-lg p-6 sm:p-8 overflow-hidden transition ">
                        <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center">
                            Have Any Query ?
                        </h3>

                        <form className="space-y-4">

                            <div>
                                <label className="block mb-1 text-sm font-medium text-gray-700">
                                    Name*
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    className="w-full rounded-xl border border-gray-300 px-4 py-2.5 outline-none transition focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 text-sm font-medium text-gray-700">
                                    Phone*
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Enter your phone number"
                                    className="w-full rounded-xl border border-gray-300 px-4 py-2.5 outline-none transition focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 text-sm font-medium text-gray-700">
                                    Email*
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="w-full rounded-xl border border-gray-300 px-4 py-2.5 outline-none transition focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 text-sm font-medium text-gray-700">
                                    Message*
                                </label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    placeholder="Write your message..."
                                    className="w-full rounded-xl border border-gray-300 px-4 py-2.5 outline-none transition focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full mt-2 rounded-xl bg-blue-600 text-white py-3 font-semibold transition hover:bg-red-500 hover:shadow-lg cursor-pointer"
                            >
                                Send Message
                            </button>

                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}
