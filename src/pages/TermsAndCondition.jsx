import { Home } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router'
import { Helmet } from "react-helmet";
export default function TermsAndCondition() {
  return (
    <>
      <section>
          <Helmet>
                    <title>Train Ticket Cancellation Policy USA | Terms & Conditions</title>
                    <meta name="description" content="Review our train ticket cancellation policy USA travelers must follow. Learn about booking rules, reservation time limits, and ticket conditions." />
                   <link rel="canonical"href="https://www.trainticketsusa.com/terms-conditions" />
                </Helmet>
        <div className='max-w-7xl mx-auto py-4 '>
          <div className='w-full flex  bg-blue-200 text-black p-5 text-xl'>
            <NavLink to={"/"} ><Home size={28} className=' hover:text-red-600 transition-all duration-300' /></NavLink>
            <NavLink to={"/"} className={'ms-4 hover:underline hover:decoration-1 hover:decoration-blue-700 hover:text-red-400 transition-all duration-300'}>Home</NavLink> / <NavLink>Term-And-Condition</NavLink>
          </div>
          <div className='p-4 sm:p-5 md:p-6'>
            <p className='text-sm sm:text-base md:text-lg text-justify'>
              Welcome to Train Tickets USA. These Terms & Conditions apply to your access and use of our website and services provided by Train Tickets USA. This includes browsing for train routes or making inquiries; booking train tickets will also be considered to be part of the services offered through this website. By accessing or using this website, you agree to the provisions of these Terms & Conditions and shall be deemed to have agreed to be bound by them. Please read these terms carefully before participating in any aspects of our services.
            </p>
          </div>
          <div className='p-4 sm:p-5 md:p-6'>
            <h2 className='text-xl sm:text-2xl md:text-3xl'>Company Information</h2>
            <p className='text-sm sm:text-base md:text-lg text-justify'>
              Train Tickets USA
              17662 Irvine Blvd, Suite 9, Tustin, CA 92780, USA


            </p>
            <p className='text-sm sm:text-base md:text-lg text-justify'>Email: <NavLink to={'mailto:trainticketsusa@gmail.com'} className={' text-blue-600 hover:underline hover:decoration-2 hover:decoration-blue-600 hover:text-red-300 transition'}>trainticketsusa@gmail.com</NavLink></p>
            <p className='text-sm sm:text-base md:text-lg text-justify'> Phone: <NavLink to={'tel:866-306-1219'} className={'text-blue-600 hover:underline hover:decoration-2 hover:decoration-blue-600 hover:text-red-300 transition'}>866-306-1219</NavLink></p>
            <p className='text-sm sm:text-base md:text-lg text-justify'>  Train Tickets USA operates as an online travel booking platform assisting customers in searching and reserving train travel services across the United States.</p>

          </div>
          <div className='p-4 sm:p-5 md:p-6'>
            <h2 className='text-xl sm:text-2xl md:text-3xl'>Acceptance of Terms</h2>
            <p className='text-sm sm:text-base md:text-lg text-justify'>You acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions when using this website or submitting a reservation request. If you do not agree to these Terms and Conditions, please stop using the website at once.
            </p>
          </div>

          <div className='p-4 sm:p-5 md:p-6'>
            <h2 className='text-xl sm:text-2xl md:text-3xl'>Services Provided</h2>
            <p className='text-sm sm:text-base md:text-lg text-justify'>Train Tickets USA includes:</p>
            <ul className='p-3 sm:p-4 md:p-5 list-disc list-inside pl-2'>

              <li> Information on train routes and travel</li>
              <li>Assistance with online purchase of train tickets</li>
              <li>Help with reserving tickets</li>
              <li>Customer assistance for travel purposes</li>
            </ul>
            <p className='text-sm sm:text-base md:text-lg text-justify'>Acting as an intermediary to help travelers and third-party businesses like rail companies and payment processors.</p>
          </div>







          <div className='p-4 sm:p-5 md:p-6'>
            <h2 className='text-xl sm:text-2xl md:text-3xl'>Booking and Payment Terms</h2>
            <ul className='p-3 sm:p-4 md:p-5 list-disc list-inside pl-2'>
              <li> All booking details must be submitted accurately in order for a valid/deliverable reservation.</li>
              <li>All prices are priced according to availability and are subject to change without notice until confirmed.</li>
              <li>Payment must be made via one of the approved payment options after the integration process has been completed.</li>
              <li>Your booking will only be confirmed after your payment is authorized.</li>
            </ul>
            <p className='text-sm sm:text-base md:text-lg text-justify'>Pricing practices that are clear and available will help meet the expectations of U.S. consumer protection laws regarding the disclosure of fees.</p>
          </div>








          <div className='p-4 sm:p-5 md:p-6'>
            <h2 className='text-xl sm:text-2xl md:text-3xl'>Changes, Cancellations & Travel Responsibility</h2>
            <ul className='p-3 sm:p-4 md:p-5 list-disc list-inside pl-2'>
              <li>Rail operator’s schedule changes or cancellations can occur for operational reasons.</li>
              <li>Delays, interruptions in service, or operational changes caused by other suppliers are not the responsibility of Train Tickets USA.</li>
              <li>It is the passenger’s responsibility to confirm the travel date, passenger details, and travel documentation before completing the reservation process.</li>
            </ul>
          </div>
          <div className='p-4 sm:p-5 md:p-6'>
            <h2 className='text-xl sm:text-2xl md:text-3xl'>User Responsibilities</h2>
            <p className='text-sm sm:text-base md:text-lg text-justify'>By using this site you agree:</p>
            <ul className='p-3 sm:p-4 md:p-5 list-disc list-inside pl-2'>
              <li>
                To provide correct personal information.</li>
              <li>
                To use the site in accordance with the law</li>
              <li>Not to misuse or try to gain unauthorized access to this site.</li>
              <li>To respect all laws and regulations concerning travel.</li>
            </ul>
          </div>



          <div className='p-4 sm:p-5 md:p-6'>
            <h2 className='text-xl sm:text-2xl md:text-3xl'> Intellectual Property</h2>
            <p className='text-sm sm:text-base md:text-lg text-justify'>All content on this website, including (but not limited to) logos, text, images, and design elements, is owned by Train Tickets USA and may not be copied or used without prior written consent.</p>
          </div>

          <div className='p-4 sm:p-5 md:p-6'>
            <h2 className='text-xl sm:text-2xl md:text-3xl'>User Responsibilities</h2>
            <p className='text-sm sm:text-base md:text-lg text-justify'></p>
            <ul className='p-3 sm:p-4 md:p-5 list-disc list-inside pl-2'>
              <li>Disruption of services by rail operators.</li>
              <li>Delays or cancellations of travel.</li>
              <li>Losses that arise due to the provision of incorrect customer information.
              </li>
              <li>Events beyond its reasonable control (force majeure).
              </li>
            </ul>
          </div>






          <div className='p-4 sm:p-5 md:p-6'>
            <h2 className='text-xl sm:text-2xl md:text-3xl'> Dispute Resolution & Governing Law</h2>
            <p className='text-sm sm:text-base md:text-lg text-justify'>These terms and conditions are governed by the laws of the state of California, United States. All disputes arising from your use of this website will be resolved in accordance with California state law.</p>
          </div>

          <div className='p-4 sm:p-5 md:p-6'>
            <h2 className='text-xl sm:text-2xl md:text-3xl'>Changes to Terms</h2>
            <p className='text-sm sm:text-base md:text-lg text-justify'>We may modify these terms and conditions at any time with or without notice, and your continued use of this site means you accept the most current version.</p>
          </div>
        </div>
      </section>
    </>
  )
}
