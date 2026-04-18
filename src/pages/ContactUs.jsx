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
                <div className="w-full ">
                    <div className=' overflow-hidden relative'>
                        <img src="/images/contactus.jpg.jpeg" alt="contact image" className='w-full h-full brightness-75' />
                        <div className='absolute top-50 left-150 text-center m-auto'>
                            <h1 className=' text-white text-shadow-lg text-shadow-black max-w-xl mx-auto mt-4 text-center text-xl sm:text-2xl md:text-3xl'>Have Any Query please contact us 
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
            <div className='max-w-7xl mx-auto py-10 px-4'>
                <div className='max-w-3xl m-auto'>
                    <h2 className='text-center text-xl sm:text-2xl md:text-3xl'>Get In Touch</h2>
                    <p className='text-center text-sm sm:text-base text-gray-600 text-wrap py-5'>Get in touch with our friendly team to get help with train routes, schedules, fares, bookings, and travel planning for a smooth, stress-free journey across the United States today.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
                    <div className="grid gap-5">

  {/* CARD */}
  <div className="group flex items-start gap-4 p-5 rounded-2xl bg-white/80 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-gray-100">

    <div className="h-14 w-14 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
      <MapPin className="text-2xl" />
    </div>

    <div>
      <h2 className="text-lg font-semibold text-gray-800">Address</h2>
      <p className="text-sm text-gray-600 mt-1 leading-relaxed">
        17662 Irvine Blvd, Suite 9 Tustin, CA 92780
      </p>
    </div>

  </div>

  {/* EMAIL */}
  <div className="group flex items-start gap-4 p-5 rounded-2xl bg-white/80 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-gray-100">

    <div className="h-14 w-14 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
      <Mail className="text-2xl" />
    </div>

    <div>
      <h2 className="text-lg font-semibold text-gray-800">Email</h2>
      <a
        href="mailto:support@gmail.com"
        className="text-sm text-blue-600 hover:text-red-500 hover:underline transition mt-1 inline-block"
      >
        support@gmail.com
      </a>
    </div>

  </div>

  {/* PHONE */}
  <div className="group flex items-start gap-4 p-5 rounded-2xl bg-white/80 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-gray-100">

    <div className="h-14 w-14 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
      <Phone className="text-2xl" />
    </div>

    <div>
      <h2 className="text-lg font-semibold text-gray-800">Phone</h2>
      <a
        href="tel:+18663061219"
        className="text-sm text-blue-600 hover:text-red-500 hover:underline transition mt-1 inline-block"
      >
        +1 866-306-1219
      </a>
    </div>

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
