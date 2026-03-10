import { useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { Map, Users, Globe, Award, ArrowRight, Train } from 'lucide-react';
import { Helmet } from "react-helmet";
import { useNavigate } from 'react-router-dom';
import video from "../video/train video.mp4";
export default function About() {
    const [expanded, setExpanded] = useState(false);

    const shortText =
        "From our humble beginnings to a modern transportation giant, every decade has brought innovation to the American railway.";

    const longText = `
    From our humble beginnings to becoming a modern transportation giant, our journey spans over a century of transformation.
    Each decade brought groundbreaking innovations — from expanding long-distance connectivity to introducing high-speed trains,
    building state-of-the-art rail infrastructure, adopting eco-friendly operations, and enhancing passenger experience through
    world-class service standards. What started as a simple mode of transport is now an icon of reliability, comfort, and
    technological advancement in the American transportation landscape.
    Our legacy continues to inspire future generations as we redefine mobility for tomorrow.
  `;

    const navigate = useNavigate();
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Parallax transform for hero text
    const yHero = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
    const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        <div ref={containerRef} className="bg-white font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
            <Helmet>
        <title>Train Ticket Booking Website USA | About Train Tickets USA</title>
        <meta name="description" content="Learn about our train ticket booking website in USA. We help travelers book train tickets online easily, securely, and at affordable prices." />
        <link rel="canonical" href="https://www.trainticketsusa.com/about-train-tickets-usa" />
      </Helmet>

            {/* --- 1. CINEMATIC HERO SECTION --- */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background with Zoom Effect */}
                <div className="absolute inset-0 z-0">
                    <motion.div
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 10, ease: "easeOut" }}
                        className="w-full h-full"
                    >
                        <img
                            src="https://i.postimg.cc/Qxn2hg1N/Banner_(1).jpg"
                            alt="Hero Train"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                    <div className="absolute inset-0 bg-linear-to-b from-slate-900/70 via-slate-900/40 to-white" />
                </div>

                {/* Floating Content */}
                <motion.div
                    style={{ y: yHero, opacity: opacityHero }}
                    className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-[-5vh]"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="flex items-center justify-center gap-3 mb-6"
                    >
                        <div className="h-px w-12 bg-white/50"></div>
                        <span className="text-blue-200 uppercase tracking-[0.3em] text-xs font-bold">Est. 1971</span>
                        <div className="h-px w-12 bg-white/50"></div>
                    </motion.div>

                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight leading-none">
                        About Train Tickets USA – Online Train Ticket Booking Platform

                    </h1>

                    <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed font-light">
                        An easy-to-use, secure online reservation system for booking train tickets throughout the USA.

                    </p>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
                >
                    <span className="text-[10px] uppercase tracking-widest">Scroll to Explore</span>
                    <div className="w-px h-12 bg-linear-to-b from-white/50 to-transparent"></div>
                </motion.div>
            </section>


            {/* --- 2. THE STATS STRIP (Glassmorphism) --- */}
            <section className="relative z-20 -mt-24 px-6 mb-32">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl mx-auto bg-white/80 backdrop-blur-xl border border-white/40 shadow-2xl rounded-4xl p-10 flex flex-col md:flex-row justify-between items-center gap-8 md:divide-x divide-slate-200"
                >
                    {[
                        { label: 'Annual Riders', value: '12.5M', icon: Users },
                        { label: 'Destinations', value: '500+', icon: Map },
                        { label: 'Daily Trains', value: '300+', icon: Train },
                        { label: 'Sustainability', value: '-83% CO₂', icon: Globe },
                    ].map((stat, idx) => (
                        <div key={idx} className="flex-1 px-6 text-center md:text-left flex items-center gap-4">
                            <div className="p-3 bg-blue-50 rounded-full text-blue-600">
                                <stat.icon size={24} />
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-slate-900">{stat.value}</h4>
                                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </section>

            <section className=''>
                <h2 className='text-center text-5xl '>Our Company & What We Do</h2>
                <div className='max-w-7xl py-6 px-3 mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        <div className='order-1 md:order-1 relative border rounded-2xl group overflow-hidden transition '>
                            <img src="/images/about Our Company & What We Do.jpg.jpeg" alt="" className='h-full w-full object-cover group-hover:scale-110' />
                        </div>
                        <div className='order-2 md:order-2 ms-3'>
                            <p className='text-xl text-justify  py-2'>
                                At <b className='font-bold'>TrainTickets USA</b>, we work hard to simplify the process of booking train tickets. Our primary motivation is to make it simple, easy, and secure for modern travelers to quickly reserve their train tickets.
                            </p>
                            <p className='text-xl text-justify  py-2'>
                                Using TrainTicketsUSA, you can find train <b className='font-bold'>routes all over the USA</b>, compare departure dates, times, and seats; search for current availability; and complete secure online reservations for your train tickets in just a few simple steps. Our simple-to-use system allows individuals, families, and businesses to easily make reservations and purchase train tickets.

                            </p>
                            <p className='text-xl text-justify  py-2'>
                                We worked hard to provide travelers with clear and reliable information needed when planning train travel. That is why we have built our booking process with transparency, an easy-to-use checkout system, and simple access to trip details, so travelers have everything they need to make an informed decision before making a final reservation for their train travel.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='my-5'>
                <h2 className='text-center text-5xl '>Moving America, One Journey at a Time</h2>
                <div className='max-w-7xl py-6 px-3 mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        <div className='order-2 md:order-2 relative border rounded-2xl group overflow-hidden transition '>
                            <img src="/images/Moving America, One Journey at a Time.jpg.jpeg" alt="" className='h-full w-full object-cover group-hover:scale-110' />
                        </div>
                        <div className='order-1 md:order-1 me-3'>
                            <p className='text-xl text-justify  py-2'>
                                At Train Tickets USA, we think that when people use the rail system, they interact with each other instead of just being about getting from point A to B. The platform enables users to easily and quickly locate train schedules (and purchase train tickets) throughout America.
                            </p>
                            <p className='text-xl text-justify  py-2'>
                                With a focus on customer experience, we combine advanced technology with a streamlined reservation process, allowing for complete access to information about different ways of traveling (locating/booking your trip), as well as making it easier to purchase and pay for tickets.
                            </p>
                            <p className='text-xl text-justify  py-2'>
                                Train Tickets USA is committed to providing our customers with the best experience possible when making a train reservation. Each step through the entire process will provide travelers with comfort, security, and clarity—enabling them to travel confidently.

                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10 py-5">
                    <div className="border rounded-2xl">
                        <div className="relative group  rounded-2xl overflow-hidden transition">
                            <img src="/images/mission image.jpg.jpeg" className='h-full w-full object-cover group-hover:scale-110' alt="" />
                        </div>
                        <div className='p-4 sm:p-5 md:p-6'>
                            <h3 className='text-center text-lg sm:text-xl md:text-2xl'>Our Mission</h3>
                            <p className='text-sm sm:text-base text-justify text-gray-600'>Our objective is to create a simple, quick, and easily accessible method for purchasing train tickets in the USA. To achieve this, we will develop and operate an efficient website (that is, a website accessible from anywhere) where users can easily search for/train routes/schedule/plan their online train ticket reservations in order to enable users to experience an easy and stress-free way to complete their rail journey within the United States.
                            </p>
                        </div>
                    </div>
                    <div className="border rounded-2xl">
                       <div className="relative group  rounded-2xl overflow-hidden transition">
                            <img src="/images/vision.jpeg" className='h-full w-full object-cover group-hover:scale-110' alt="" />
                        </div>
                        <div className='p-4 sm:p-5 md:p-6'>
                            <h3 className='text-center text-lg sm:text-xl md:text-2xl'>Our Vision</h3>
                            <p className='text-sm sm:text-base text-justify text-gray-600'>Our ambition is to become a credible website supporting customers in the purchase of train tickets online and therefore enabling them to make more informed decisions in their travel planning; we are committed to providing reliable, efficient, and user-friendly rail travel solutions in an effort to make train travel the preferred mode of transportation for the modern traveler.
                            </p>
                        </div>

                    </div>
                </div>

            </section>
            {/* --- 3. OUR LEGACY (Timeline Animation) --- */}
          



            <section className="py-32 bg-black/85 text-white relative overflow-hidden my-20">
                {/* Background Video */}
                <video
                    autoPlay
                    muted
                    loop
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                >
                    <source src={video} type="video/mp4" />
                </video>

                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <Award className="w-16 h-16 text-amber-400 mx-auto mb-8" />
                    <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
                        "The journey is not just about moving. It's about being moved."
                    </h2>
                    {/* <div className="flex justify-center gap-2">
                                    {[1, 2, 3, 4, 5].map((_, i) => (
                                        <div key={i} className="w-2 h-2 rounded-full bg-white/60"></div>
                                    ))}
                                </div> */}
                </div>
            </section>


            {/* --- 5. MEET THE LEADERSHIP (Minimal) --- */}
            {/* <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase mb-2 block">Our Leadership</span>
                        <h2 className="text-4xl font-bold text-slate-900">Meet the Conductors</h2>
                    </div>
                    <button className="hidden md:block text-slate-500 hover:text-blue-600 font-medium transition-colors">View all team members &rarr;</button>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { name: 'Ashish Kaintura', role: 'Chief Executive Officer', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop' },
                        { name: 'Sarah Jenkins', role: 'Head of Operations', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop' },
                        { name: 'Marcus Ray', role: 'Director of Sustainability', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop' }
                    ].map((person, idx) => (
                        <div key={idx} className="group cursor-pointer">
                            <div className="relative overflow-hidden rounded-2xl mb-4 aspect-3/4">
                                <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/20 transition-all duration-500 z-10" />
                                <img
                                    src={person.img}
                                    alt={person.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">{person.name}</h3>
                            <p className="text-slate-500 text-sm">{person.role}</p>
                        </div>
                    ))}
                </div>
            </section> */}


            {/* --- 6. CTA BANNER --- */}
            <section className="pb-24 px-6">
                <div className="max-w-7xl mx-auto relative rounded-[3rem] overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            src="/images/Train.jpg"
                            className="h-full w-full object-cover"
                            alt="Cityscape"
                        />
                        {/* <div className="absolute inset-0 bg-blue-900/90 mix-blend-multiply"></div> */}
                    </div>

                    <div className="relative z-10 p-16 md:p-24 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Your Next Train Journey Starts Here</h2>
                        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                           Discover comfortable, convenient, and affordable train ticket booking in the USA. Search routes, compare schedules, and plan your journey with ease through our simple online train reservation platform.

                        </p>
                        <button
                            onClick={() => navigate('/contact')}
                            className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 hover:scale-105 transition-all shadow-xl"
                        >
                            Book Your Ticket
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
}