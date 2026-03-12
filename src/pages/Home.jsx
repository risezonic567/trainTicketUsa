import React, { useState } from 'react'
import { Helmet } from "react-helmet";
import SearchBox from '../components/SearchBox'
import FeatureCard from '../components/FeatureCard'
import { motion } from 'framer-motion'
import HeroSlider from '../components/HeroSlider'
import { ArrowRight, Clock, Search, Shield, Sparkles, Train } from 'lucide-react'
import PopularRoute from '../components/PopularRoute'
import Whyus from '../components/Whyus'
import Testimonials from '../components/Testimonials'
import TrainSearchBar from '../components/TrainSearchBar'
import { Link } from 'react-router-dom'
// import Faq from '../components/Faq'

const faqs = [
  {
    q: "How long does delivery take?",
    a: "Delivery usually takes 3–5 business days depending on your location.",
  },
  {
    q: "Can I return a product?",
    a: "Yes, you can return products within 7 days if they are unused.",
  },
  {
    q: "Do you offer cash on delivery?",
    a: "Yes, COD is available in selected locations.",
  },
  {
    q: "Is my payment secure?",
    a: "Yes, we use SSL encryption and trusted payment gateways.",
  },
];

export default function Home() {
  const [openIndex, setOpenIndex] = useState(null);
  return (

    <section className="">
      <Helmet>
        <title>Book Train Tickets in USA | Cheap & Easy Online Booking</title>
        <meta name="description" content="Book train tickets in USA quickly and securely. Compare routes, check availability, and find cheap train tickets online with easy reservation options." />
        <link rel="canonical" href="https://www.trainticketsusa.com" />
        <script type="application/ld+json">
        {`
        
{
"@context":"https://schema.org",
"@graph":[
{
"@type":"Organization",
"name":"Train Tickets USA",
"url":"https://www.trainticketsusa.com/",
"logo":"https://www.trainticketsusa.com/lOGO-Final-Train-Tickets-usa.png",
"description":"Train Tickets USA is an online platform helping travelers search train routes and book train tickets across the United States.",
"sameAs":[
"https://www.facebook.com/trainticketsusa/",
"https://www.instagram.com/trainticketusa/",
"https://in.pinterest.com/trainticketsusa/",
"https://www.youtube.com/@TrainTicketsUSA/",
"https://www.linkedin.com/company/us-railway-booking/"
],
"contactPoint":{
"@type":"ContactPoint",
"telephone":"+1-866-306-1219",
"contactType":"customer support",
"areaServed":"US",
"availableLanguage":"English"
}
},
{
"@type":"LocalBusiness",
"name":"Train Tickets USA",
"image":"https://www.trainticketsusa.com/lOGO-Final-Train-Tickets-usa.png",
"url":"https://www.trainticketsusa.com/",
"telephone":"+1-866-306-1219",
"address":{
"@type":"PostalAddress",
"streetAddress":"17662 Irvine Blvd, Suite 9",
"addressLocality":"Tustin",
"addressRegion":"CA",
"postalCode":"92780",
"addressCountry":"US"
},
"areaServed":"United States",
"priceRange":"$$"
},
{
"@type":"WebSite",
"name":"Train Tickets USA",
"url":"https://www.trainticketsusa.com/",
"potentialAction":{
"@type":"SearchAction",
"target":"https://www.trainticketsusa.com/?s={search_term_string}",
"query-input":"required name=search_term_string"
}
},
{
"@type":"WebPage",
"name":"Book Train Tickets in the USA",
"url":"https://www.trainticketsusa.com/",
"description":"Search train routes, compare schedules, and book train tickets across the United States with Train Tickets USA."
}
]
}
`}
</script>
      </Helmet>
      
      <HeroSlider />
      <div className='w-full bg-blue-50 opacity-100 h-auto py-5'>
        <div className='p-3 sm:p-4 md:p-5'>
          <h2 className='text-lg sm:text-xl md:text-2xl mb-2 items-center text-center  text-dark'>
            Search and Book Train Tickets Online Across the USA
          </h2>
          <p className='text-justify text-gray-600 text-sm sm:text-base '>
            Our <b className='text-dark-800'> train ticket booking platform</b> makes planning your trip on the rail system within the USA easy and convenient; use our site to search schedules, compare routes, and search for low-cost tickets (for large metropolitan areas and popular tourist destinations) in just several clicks. Our site offers an excellent way for people to search for both advanced and last-minute tickets and provides you with a level of security that allows you to pay for and completely process your transaction online.

          </p>
          <p className='text-justify my-4 text-gray-600 text-sm sm:text-base '>
            <b className='text-dark-800'>Train tickets USA</b> is provided  to help travelers quickly search train tickets in the USA, check availability, and choose the best routes based on schedule, price, and comfort.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className='text-2xl sm:text-3xl md:text-4xl mb-2 text-center '>A Faster and Smarter Way to Book Train Tickets
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:p-5 sm:p-7'>
          <div className="order-2 md:order-1 relative group border rounded-xl transition overflow-hidden">
            <img src="/images/A Faster and Smarter Way to Book Train Tickets.jpg.jpeg" alt="" className='w-full h-full  group-hover:scale-110 transition duration-300 object-cover' />
          </div>
          <div className='order-1 sm:order-2'>

            <ul className='list-decimal text-xl'>
              <li>
                <h5 className='text-lg sm:text-xl md:text-2xl mb-2'> Instant Train Ticket Search with Smart Suggestions
                </h5>
                <p className='ms-3 text-sm sm:text-base text-gray-600 text-justify'>
                  Find the departure and arrival stations quickly and compare options for travel time and route information, all in seconds.

                </p>
              </li>
              <li>
                <h5 className='text-lg sm:text-xl md:text-2xl mb-2'> Real-Time Train Schedules and Availability
                </h5>
                <p className='ms-3 text-sm sm:text-base text-gray-600 text-justify'>
                  Check the departure and arrival schedule or timeline for train/coach availability prior to confirming your ticket purchase.

                </p>
              </li>
              <li>
                <h5 className='text-lg sm:text-xl md:text-2xl mb-2'> Easy Online Reservations & Digital Tickets

                </h5>
                <p className='ms-3 text-sm sm:text-base text-gray-600 text-justify'>
                  Use your credit/debit cards to purchase tickets online and have access to your mobile-friendly ticket confirmation at all times.


                </p>
              </li>
              <li>
                <h5 className='text-lg sm:text-xl md:text-2xl mb-2'> Secure Train Booking and Payment Protection

                </h5>
                <p className='ms-3 text-sm sm:text-base text-gray-600 text-justify'>
                  Have your purchase and your money safe from thieves with our secure checkout process and the latest in data protection.


                </p>
              </li>
            </ul>

          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto mt-12 p-4">
        <div>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Book in 60 seconds or less
          </div>
          <h2 className="text-5xl font-extrabold mb-6 leading-tight">
            Search Train And Book_ {" "}

            <span className="bg-linear-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              ACROSS THE NORTHEAST & MORE
            </span>
          </h2>
          <p className="text-slate-600 mb-8 text-lg">
            Search schedules, pick seats, and complete secure checkout in minutes. Mobile-friendly, accessible, and optimized for performance.
          </p>

          <div className="space-y-4 mb-8">
            {[
              { icon: Search, text: 'Instant search with smart suggestions' },
              { icon: Clock, text: 'Real-time availability and live updates' },
              { icon: Train, text: 'Interactive seat maps & QR e-tickets' },
              { icon: Shield, text: 'Bank-level security & encryption' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-slate-700 font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <a href="/" className="sm:px-8 px-4 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-colors flex items-center gap-2 shadow-lg shadow-blue-600/30">
              Search Tickets
              <ArrowRight className="w-5 h-5" />
            </a>
            <button className="px-8 py-4 border-2 border-slate-300 hover:border-slate-400 rounded-full font-semibold transition-colors">
              View Offers
            </button>
          </div>
        </div>

        <motion.div initial={{ x: 10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="bg-white rounded-2xl shadow p-6">
          {/* <SearchBox /> */}
          <TrainSearchBar />
        </motion.div>
      </div>
      <PopularRoute />
      <Whyus />
      <Testimonials />

      <div className="my-12 grid md:grid-cols-3 gap-6">
        <FeatureCard title="Popular routes" desc="Quick access to commonly traveled journeys." />
        <FeatureCard title="Secure payments" desc="PCI-compliant integrations like Stripe or Razorpay." />
        <FeatureCard title="Mobile-friendly" desc="Designed for fast, thumb-first booking on phones." />
      </div>
      {/* <Faq /> */}
      <div className="max-w-5xl mx-auto px-4 py-12">

        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="border rounded-xl overflow-hidden">

                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className={`w-full flex justify-between items-center p-4 md:p-5 text-left font-medium ${isOpen ? "bg-red-400 text-white" : ""}`}
                >
                  <span>{item.q}</span>


                  <span
                    className={`inline-block text-xl transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"
                      }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                  <div className={`overflow-hidden px-4 md:px-5 pb-4 text-gray-600 ${isOpen ? "bg-blue-100 text-dark-400" : ""}`}>
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h3>
          <p className="text-xl text-slate-300 mb-8">Join millions of travelers who choose Train Tickets USA Reaservation every year</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-colors">
                Book Your Trip Now
              </button>
            </Link>

            <a className="px-8 py-4 border-2 border-white hover:bg-white hover:text-slate-900 font-semibold rounded-full transition-colors" href="tel:8663061219">
              Call Us expert help
            </a>
          </div>
        </div>
      </section>
    </section>
  )
}
