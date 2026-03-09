import React from 'react'
import { MapPin, Mail, Phone, Copyright, Send } from 'lucide-react'
import { FaWhatsapp,FaInstagram,FaFacebook,FaTwitter, FaPinterest, FaYoutube, FaLinkedin } from "react-icons/fa";
import { NavLink } from 'react-router'

export default function Footer() {
  return (
    <>
      <footer className='bg-gray-700 mt-5 text-light'>
        <div className="max-w-7xl mx-auto py-10 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <h3 className='mb-3 text-lg sm:text-xl md:text-2xl'>Contact-Us</h3>
              <div className='relative'>
                <div className='w-12 h-12 rounded-full bg-white flex items-center justify-center'>
                  <MapPin className='text-blue-500' size={28} />

                </div>
                <div className='absolute top-0  left-15'>
                  <h5 className='text-xl text-white ps-2'>Address:-</h5>
                  <NavLink className='text-sm text-white ps-2 hover:underline hover:decoration-2 hover:decoration-blue-600 hover:text-red-300 transition'>17662 Irvine Blvd, Suite 9 Tustin, CA 92780</NavLink>
                </div>
              </div>
              <div className='relative mt-6'>
                <div className='w-12 h-12 rounded-full bg-white flex items-center justify-center'>
                  <Phone className='text-blue-500' size={28} />

                </div>
                <div className='absolute top-0  left-15'>
                  <h5 className='text-xl text-white ps-2'>Phone:-</h5>
                  <NavLink to={'tel:8663061219'} className='text-sm text-white ps-2 hover:underline hover:decoration-2 hover:decoration-blue-600 hover:text-red-300 transition'>(866)306-1219</NavLink>
                </div>
              </div>
              <div className='relative mt-6'>
                <div className='w-12 h-12 rounded-full bg-white flex items-center justify-center'>
                  <Mail className='text-blue-500' size={28} />

                </div>
                <div className='absolute top-0  left-15'>
                  <h5 className='text-xl text-white ps-2'>Email:-</h5>
                  <NavLink className='text-sm text-white ps-2 hover:underline hover:decoration-2 hover:decoration-blue-600 hover:text-red-300 transition'>support@gmail.com</NavLink>
                </div>
              </div>
              <div className='relative mt-6'>
                <div className='w-12 h-12 rounded-full bg-white flex items-center justify-center'>
                  <FaWhatsapp className='text-blue-500 text-2xl' />

                </div>
                <div className='absolute top-0  left-15'>
                  <h5 className='text-xl text-white ps-2 '>Whatsapp:-</h5>
                  <NavLink to={'https://wa.me/8663061219'} className='text-sm text-white ps-2 hover:underline hover:decoration-2 hover:decoration-blue-600 hover:text-red-300 transition'>(866)306-1219</NavLink>
                </div>
              </div>

            </div>
            <div>
              <h3 className='mb-3 text-lg sm:text-xl md:text-2xl'>Quick Links</h3>
              <ul>
                <li><NavLink className={`hover:underline hover:decoration-2 hover:decoration-blue-600 hover:text-red-300 transition text-white`} to={"/"}>Home</NavLink></li>
                <li><NavLink className={`hover:underline hover:decoration-2 hover:decoration-blue-600 hover:text-red-300 transition text-white`} to={"/about-us"}>About Us</NavLink></li>
                <li><NavLink className={`hover:underline hover:decoration-2 hover:decoration-blue-600 hover:text-red-300 transition text-white`} to={"/faq"}>Faq</NavLink></li>
                <li><NavLink className={`hover:underline hover:decoration-2 hover:decoration-blue-600 hover:text-red-300 transition text-white`} to={"/feature"}>Features</NavLink></li>
                <li><NavLink className={`hover:underline hover:decoration-2 hover:decoration-blue-600 hover:text-red-300 transition text-white`} to={"/contact-us"}>Contact Us</NavLink></li>
                <li><NavLink className={`hover:underline hover:decoration-2 hover:decoration-blue-600 hover:text-red-300 transition text-white`} to={"/deals"}>Deals</NavLink></li>
                <li><NavLink className={`hover:underline hover:decoration-2 hover:decoration-blue-600 hover:text-red-300 transition text-white`} to={"/train-routes"}>Train-Routes</NavLink></li>
                <li><NavLink className={`hover:underline hover:decoration-2 hover:decoration-blue-600 hover:text-red-300 transition text-white`} to={"/"}>Blog</NavLink></li>
                <li><NavLink className={`hover:underline hover:decoration-2 hover:decoration-blue-600 hover:text-red-300 transition text-white`} to={"/"}>Privacy-Policy</NavLink></li>
                <li><NavLink className={`hover:underline hover:decoration-2 hover:decoration-blue-600 hover:text-red-300 transition text-white`} to={"/about-us"}>Term-and-Condition</NavLink></li>
                <li><NavLink className={`hover:underline hover:decoration-2 hover:decoration-blue-600 hover:text-red-300 transition text-white`} to={"/refund-policy"}>Refund & Cancellation</NavLink></li>
                <li><NavLink  className={`hover:underline hover:decoration-2 hover:decoration-blue-600 hover:text-red-300 transition text-white`} to={"/disclaimer"}>Disclaimer</NavLink></li>

              </ul>
            </div>
            {/* <div>
              <h3 className='mb-3 text-lg sm:text-xl md:text-2xl'>Supports</h3>
              <ul>
                
              </ul>
            </div> */}
            <div>
              <h3><h3 className='mb-3 text-lg sm:text-xl md:text-2xl'>Newsletters</h3></h3>
              <p className='text-sm sm:text-base text-white text-justify'>Subscribe to our newsletter for a premium travel experience.
                Receive updates on flight deals, top airlines, and exclusive offers for domestic and international routes. Be the first to discover special fares, limited-time discounts, and curated travel tips designed to make your journeys smoother—right in your inbox.</p>
                <div className='w-full py-5 '>
              <form action="#">
                <div className='relative flex items-center content-center border-0 w-full  flex-1'>
                  <input type="email" name="email" placeholder='Please enter your email' className='text-white bg-transparent p-2 border-1 border-white w-full outline-0 rounded' />
                  <button className='w-20  absolute right-1 rounded p-2 border-0 outline-0 bg-blue-600'><Send className='text-white m-auto' size={24} /></button>
                </div>
              </form>
            </div>
            <div className='max-w-7xl py-5 mx-auto'>
              <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                <div className='w-12 h-12 rounded-full bg-white flex items-center justify-center'>
                 <NavLink to={'https://www.instagram.com/trainticketusa/'}> <FaInstagram className='text-blue-500 text-2xl'  /></NavLink>

                </div>
                <div className='w-12 h-12 rounded-full bg-white flex items-center justify-center'>
                 
                  <NavLink to={'https://www.facebook.com/trainticketsusa/'}> <FaFacebook className='text-blue-500 text-2xl'  /></NavLink>

                </div>
                <div className='w-12 h-12 rounded-full bg-white flex items-center justify-center'>
                  <NavLink to={'https://in.pinterest.com/TrainTicketsUSA/'}><FaPinterest className='text-blue-500 text-2xl' /></NavLink>

                </div>
                <div className='w-12 h-12 rounded-full bg-white flex items-center justify-center'>
                 <NavLink to={'https://www.youtube.com/@TrainTicketUSA'}> <FaYoutube className='text-blue-500 text-2xl'  /></NavLink>

                </div>
                 <div className='w-12 h-12 rounded-full bg-white flex items-center justify-center'>
                 <NavLink to={'https://www.linkedin.com/company/us-railway-booking/'}> <FaLinkedin className='text-blue-500 text-2xl'  /></NavLink>

                </div>
              </div>

            </div>
            </div>
            
          </div>
        </div>
        <div className='max-w-6xl mx-auto p-6 flex  flex-col md:flex-row items-center justify-between text-sm text-slate-500'>
          <div className='flex'><Copyright size={24} /> 2026 US-TrainTicket.All Rights Reserved</div>
          <p>Your trusted online booking train tickets platform.</p>
          <div className="flex gap-8 mt-3 md:mt-0">
            <a href='/terms-and-condition' className="hover:underline">Terms</a>
            <a href='/privacy-policy' className="hover:underline">Privacy</a>
          </div>
        </div>
      </footer>
    </>

  )
}
