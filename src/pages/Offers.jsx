import { motion } from "framer-motion";
import { BadgePercent, GraduationCap, Gift, Users, Sparkles, Link } from "lucide-react";
import { Helmet } from "react-helmet";
export default function Offers() {
    const offers = [
        {
            title: " Student & Senior Train Ticket Discounts ",
            subtitle: "Check Eligibility →",
            desc: "Eligible travelers can enjoy special savings on train ticket booking in the USA. Students and seniors can access reduced fares on selected routes, making rail travel more affordable and convenient.Save more on your next online train reservation with verified discount options.",
            tag: "20% OFF",
            icon: GraduationCap,
            img: "https://i.postimg.cc/qM89D6vw/studentoffer.png"
        },
        {
            title: "Group & Family Train Travel Offers",
            subtitle: "Plan Group Travel →",
            desc: "Planning a trip with friends or family? Unlock special group train ticket discounts on selected routes. Enjoy flexible booking options and affordable fares for multiple passengers traveling together.Ideal for vacations, events, and family gatherings across the United States.",
            tag: "30% OFF",
            icon: Users,
            img: "https://i.postimg.cc/8zNx2kFg/senior.png"
        },
        {
            title: "Seasonal Train Deals & Holiday Offers",
            subtitle: " Explore Seasonal Deals →",
            desc: " Save more on train tickets in the USA during Christmas, New Year, and summer travel seasons. Discover limited-time train ticket deals, holiday discounts, and special fares on popular train routes across the United States.",
            tag: "UP TO 40% OFF",
            icon: Sparkles,
            img: "https://i.postimg.cc/65RCHR6c/Banner-(2).jpg"
        },
        {
            title: "Exclusive Train Ticket Coupon Codes",
            subtitle: " Get Coupon Codes →",
            desc: " Apply verified coupon codes at checkout and save instantly on online train ticket booking. Enjoy additional discounts on selected routes and travel classes.",
            tag: "SAVE NOW",
            icon: Gift,
            img: "https://i.postimg.cc/yYFwp3N8/dicount.png"
        }
    ];

    return (
        <div className="bg-white font-sans overflow-hidden">
             <Helmet>
                    <title>Train Ticket Deals USA | Cheap Train Travel Offers</title>
                    <meta name="description" content="Find the latest train ticket deals USA travelers love. Save on family trips, holiday travel, and cheap train bookings across the country." />
                   <link rel="canonical"href="http://www.trainticketsusa.com/train-booking-deals " />
                   <script type="application/ld+json">
                   {`
                   
{
"@context":"https://schema.org",
"@type":"Service",
"name":"Train Ticket Deals USA",
"url":"http://www.trainticketsusa.com/train-booking-deals",
"description":"Find affordable train ticket deals and travel offers across the United States.",
"provider":{
"@type":"Organization",
"name":"Train Tickets USA",
"url":"https://www.trainticketsusa.com/",
"sameAs":[
"https://www.facebook.com/trainticketsusa/",
"https://www.instagram.com/trainticketusa/",
"https://in.pinterest.com/trainticketsusa/",
"https://www.youtube.com/@TrainTicketsUSA/",
"https://www.linkedin.com/company/us-railway-booking/"
]
},
"areaServed":{
"@type":"Country",
"name":"United States"
}
}

                   `}
                   </script>
                </Helmet>
                

            {/* === HERO SECTION === */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <motion.img
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 10 }}
                        src="https://i.postimg.cc/dtBPD7vB/Gemini-Generated-Image-oxhyveoxhyveoxhy.png"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-white"></div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 text-center text-white px-6"
                >
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <BadgePercent className="w-6 h-6 text-amber-300" />
                        <span className="tracking-widest text-xs uppercase">Special Offers</span>
                    </div>

                    <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                       All Train Routes in the USA

                       
                    </h1>

                    <p className="text-lg text-blue-100 max-w-xl mx-auto mt-4">
                        Explore popular and frequently traveled train routes across the United States. Compare destinations, discover major railway connections, and plan your journey easily with our simple <b>train ticket booking USA</b> platform.

                    </p>
                </motion.div>
            </section>

      
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        Current Deals & Discounts
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        These offers help millions of travelers explore the world more affordably.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {offers.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.6 }}
                            className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all group"
                        >

                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={item.img}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    alt={item.title}
                                />
                                <span className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                                    {item.tag}
                                </span>
                            </div>


                            <div className="p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <item.icon className="w-7 h-7 text-blue-600" />
                                    <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                                </div>

                                 <button className="mt-6 inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 cursor-pointer transition-all">{item.subtitle}</button>
                                <p className="text-slate-600">{item.desc}</p>

                               
                            
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* === CTA BANNER === */}
            <section className="pb-24 px-6">
                <div className="max-w-7xl mx-auto relative rounded-[3rem] overflow-hidden">
                    <img
                        src="https://i.postimg.cc/w3K6dCC0/wmremove-transformed.jpg"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black-900/90 mix-blend-multiply"></div>

                    <div className="relative z-10 p-16 md:p-24 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Ready to Claim Your Offer?
                        </h2>
                        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                            Book now and enjoy exclusive discounts on your next train journey.
                        </p>
                        <Link to="/contact">
                        <button className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 hover:scale-105 transition-all shadow-xl">
                            Book Tickets Now
                        </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
