import { HomeIcon } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router'
import { Helmet } from "react-helmet";

export default function PrivacyPolicy() {
  return (
    <>
      <section>
          <Helmet>
                    <title>Privacy Policy | Train Reservation Availability Information</title>
                    <meta name="description" content="Read our Privacy Policy to understand how we collect, use, and protect your personal information when checking train reservation availability and booking tickets online." />
                 <link rel="canonical"href="https://www.trainticketsusa.com/privacy-policy" />
                </Helmet>
        <div className='max-w-7xl mx-auto py-4 '>
          <div className='w-full flex  bg-blue-200 text-black p-5 text-xl'>
            <NavLink to={"/"} ><HomeIcon size={28} className=' hover:text-red-600 transition-all duration-300' /></NavLink>
            <NavLink to={"/"} className={'ms-4 hover:underline hover:decoration-1 hover:decoration-blue-700 hover:text-red-400 transition-all duration-300'}>Home</NavLink> / <NavLink>Privacy Policy</NavLink>
          </div>
          <div className='p-4 sm:p-5 md:p-6'>
            <p className='text-sm sm:text-base md:text-lg text-justify'>
              Here at Train Tickets USA, your privacy is very important to us, and we are committed to protecting your personal information by using responsible data practices and secure systems. This Privacy Policy will explain to you how Train Tickets USA collects your information, how we use your information, how we store your information, and how we will protect your information when you visit our website or look for routes to book train travel, or if you request assistance in booking with Train Tickets USA. Train Tickets USA is committed to maintaining transparency around how your information will be handled so that you can feel confident in using the services we provide. By accessing or using this site, you agree and consent to the collection and use of information as set forth in this policy.

            </p>
          </div>
        
          <div className='p-4 sm:p-5 md:p-6'>
            <h2 className='text-xl sm:text-2xl md:text-3xl'>Information We Collect</h2>
            <p className='text-sm sm:text-base md:text-lg text-justify'>We will collect the following to provide accurate booking support and to enhance our service offerings:
            </p>
            <div className='ms-3 p-4 sm:p-5 md:p-6'>
              <h2 className='text-xl sm:text-2xl md:text-3xl'>Personal Information</h2>
              <ul className='p-3 sm:p-4 md:p-5 list-disc list-inside pl-2'>
                <li> Full name</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>Trip and booking information</li>
              </ul>

            </div>
            <div className='ms-3 p-4 sm:p-5 md:p-6'>
              <h2 className='text-xl sm:text-2xl md:text-3xl'></h2>
              <ul className='p-3 sm:p-4 md:p-5 list-disc list-inside pl-2'>
                <li>Passenger information provided when making your reservation</li>
                <li>IP Address</li>
                <li>Browser type and device info.</li>
                <li>Page(s) viewed and how long you were using this website.</li>
                <li>Cookies and Usage Data.</li>
              </ul>
            </div>
            <div className='ms-3 p-4 sm:p-5 md:p-6'>

              <h2 className='text-xl sm:text-2xl md:text-3xl'> Payment Information</h2>
              <p className='text-sm sm:text-base md:text-lg text-justify'>Information submitted during payment transactions is securely encrypted through authorized payment processors. We never retain full card details or other types of payment methods on our systems.</p>
            </div>
          </div>

          <div className='p-4 sm:p-5 md:p-6'>
            <h2 className='text-xl sm:text-2xl md:text-3xl'> How We Use Your Information</h2>
            <p className='text-sm sm:text-base md:text-lg text-justify'>Your information may be used for some or all of the following:
            </p>
            <ul className='p-3 sm:p-4 md:p-5 list-disc list-inside pl-2'>

              <li>To process requests for bookings and confirmations</li>
              <li>To provide customers with support and assistance related to all aspects of their bookings</li>
              <li>To notify customers regarding updates to their bookings or services</li>
              <li>Customer assistance for travel purposes</li>
              <li>To analyze the performance of our website and to improve customers' experience on our site</li>
              <li>To detect and prevent fraudulent activity and to adhere to the security standards to minimize risks of fraud
              </li>
            </ul>

          </div>

          <div className='p-4 sm:p-5 md:p-6'>
            <h2 className='text-xl sm:text-2xl md:text-3xl'>Sharing of Information
            </h2>
            <p className='text-sm sm:text-base md:text-lg text-justify'>When we provide services, we only disclose information when we are either legally required to do so or when we need to do so to provide those services. Some examples of these instances are</p>
            <ul className='p-3 sm:p-4 md:p-5 list-disc list-inside pl-2'>
              <li> Transportation providers or service operators.</li>
              <li>Payment card processors (who process payments on behalf of customers) and technology partners.</li>
              <li>Government agencies, as required by law.</li>
              <li>We will not provide your private information for marketing purposes to any 3rd party.</li>
            </ul>

          </div>
          <div className='p-4 sm:p-5 md:p-6'>
            <h2 className='text-xl sm:text-2xl md:text-3xl'>Cookies and Tracking Technologies</h2>
            <p className='text-sm sm:text-base md:text-lg text-justify'>To improve the functionality of our website, to store user preferences, and to analyze traffic to our website, we use cookies. Your browser will allow you to disable cookies, but some parts of our site may not function correctly without cookies.</p>
          </div>
          <div className='p-4 sm:p-5 md:p-6'>
            <h2 className='text-xl sm:text-2xl md:text-3xl'>Data Security</h2>
            <p className='text-sm sm:text-base md:text-lg text-justify'>We have implemented appropriate technical and organizational safeguards to protect your data against unauthorized access, misuse, or disclosure. Only authorized personnel have access to personal data.</p>

          </div>



          <div className='p-4 sm:p-5 md:p-6'>
            <h2 className='text-xl sm:text-2xl md:text-3xl'>User Rights and Choices</h2>
            <p className='text-sm sm:text-base md:text-lg text-justify'>Depending on the laws in your jurisdiction, you may request the following items:
            </p>
            <ul className='p-3 sm:p-4 md:p-5 list-disc list-inside pl-2'>
              <li>Access to your personal data that we have.</li>
              <li>A correction of any errors or inaccuracies in your personal data.</li>
              <li>The deletion of your personal information, to the extent that it is legally allowed.</li>
              <li>Withdrawal of your consent to send you certain communications.</li>
              <li>You can submit a request using the contact information provided below.</li>
            </ul>
          </div>

          <div className='p-4 sm:p-5 md:p-6'>
            <h2 className='text-xl sm:text-2xl md:text-3xl'>Policy Updates</h2>
            <p className='text-sm sm:text-base md:text-lg text-justify'>The Privacy Policy might be updated occasionally to incorporate operational/legal modifications that were required. Any such changes will be documented on this page, and each revised policy will have its own effective date.</p>

          </div>
            <div className='p-4 sm:p-5 md:p-6'>
            <h2 className='text-xl sm:text-2xl md:text-3xl'>Contact Information</h2>
            <p className='text-sm sm:text-base md:text-lg text-justify'>
              Contact us if you have an inquiry related to your privacy:
             
            </p>
            <p className='text-sm sm:text-base md:text-lg text-justify'> Train Tickets USA
              17662 Irvine Blvd, Suite 9, Tustin, CA 92780, USA</p>
            <p className='text-sm sm:text-base md:text-lg text-justify'>Email: <NavLink to={'mailto:trainticketsusa@gmail.com'} className={' text-blue-600 hover:underline hover:decoration-2 hover:decoration-blue-600 hover:text-red-300 transition'}>trainticketsusa@gmail.com</NavLink></p>
            <p className='text-sm sm:text-base md:text-lg text-justify'> Phone: <NavLink to={'tel:866-306-1219'} className={'text-blue-600 hover:underline hover:decoration-2 hover:decoration-blue-600 hover:text-red-300 transition'}>866-306-1219</NavLink></p>
            
          </div>

        </div>
      </section>
    </>
  )
}
