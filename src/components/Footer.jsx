import React from "react";
import { MapPin, Mail, Phone, Copyright, Send } from "lucide-react";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaPinterest,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white mt-10">

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

        {/* CONTACT */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 border-b border-gray-600 pb-2">
            Contact Us
          </h3>

          <div className="space-y-6">

            <div className="flex gap-4 items-start group">
              <MapPin className="text-blue-400 group-hover:scale-110 transition" />
              <div>
                <h4 className="font-semibold">Address</h4>
                <NavLink className="text-sm text-gray-300 hover:text-red-300 transition">
                  17662 Irvine Blvd, Suite 9 Tustin, CA 92780
                </NavLink>
              </div>
            </div>

            <div className="flex gap-4 items-start group">
              <Phone className="text-blue-400 group-hover:scale-110 transition" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <NavLink
                  to={"tel:+18663061219"}
                  className="text-sm text-gray-300 hover:text-red-300 transition"
                >
                  (866)306-1219
                </NavLink>
              </div>
            </div>

            <div className="flex gap-4 items-start group">
              <Mail className="text-blue-400 group-hover:scale-110 transition" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <NavLink to={`mailto: support@gmail.com`} className="text-sm text-gray-300 hover:text-red-300 transition">
                  support@gmail.com
                </NavLink>
              </div>
            </div>

            {/* <div className="flex gap-4 items-start group">
              <FaWhatsapp className="text-green-400 text-xl group-hover:scale-110 transition"/>
              <div>
                <h4 className="font-semibold">Whatsapp</h4>
                <NavLink
                  to={"https://wa.me/+18663061219"}
                  className="text-sm text-gray-300 hover:text-red-300 transition"
                >
                  (866)306-1219
                </NavLink>
              </div>
            </div> */}

          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 border-b border-gray-600 pb-2">
            Quick Links
          </h3>

          <ul className="grid grid-cols-2 gap-3 text-sm">

            <li><NavLink to="/" className="hover:text-red-300">Home</NavLink></li>
            <li><NavLink to="/about-train-tickets-usa" className="hover:text-red-300">About Us</NavLink></li>
            <li><NavLink to="/faq" className="hover:text-red-300">Faq</NavLink></li>
            {/* <li><NavLink to="/feature" className="hover:text-red-300">Features</NavLink></li> */}
            <li><NavLink to="/contact-us" className="hover:text-red-300">Contact Us</NavLink></li>
            <li><NavLink to="/train-booking-deals" className="hover:text-red-300">Deals</NavLink></li>
            <li><NavLink to="/all-train-routes" className="hover:text-red-300">Train Routes</NavLink></li>
            <li><NavLink to="/blog" className="hover:text-red-300">Blog</NavLink></li>
            <li><NavLink to="/privacy-policy" className="hover:text-red-300">Privacy Policy</NavLink></li>
            <li><NavLink to="/terms-conditions" className="hover:text-red-300">Terms</NavLink></li>
            <li><NavLink to="/refund-policy" className="hover:text-red-300">Refund & Cancellation</NavLink></li>
            <li><NavLink to="/disclaimer" className="hover:text-red-300">Disclaimer</NavLink></li>

          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>

          <h3 className="text-2xl font-semibold mb-6 border-b border-gray-600 pb-2">
            Newsletter
          </h3>

          <p className="text-sm text-gray-300 mb-6 leading-relaxed">
            Subscribe to our newsletter for a premium travel experience.
            Receive updates on flight deals, top airlines, and exclusive offers
            for domestic and international routes.
          </p>

          {/* Newsletter Input */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-3 flex items-center">

            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent outline-none text-white placeholder-gray-400 px-2"
            />

            <button className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition">
              <Send size={18}/>
            </button>

          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-8 text-xl">

            <NavLink to="https://www.instagram.com/trainticketusa/" className="hover:text-pink-500 transition">
              <FaInstagram/>
            </NavLink>

            <NavLink to="https://www.facebook.com/trainticketsusa/" className="hover:text-blue-500 transition">
              <FaFacebook/>
            </NavLink>

            <NavLink to="https://in.pinterest.com/TrainTicketsUSA/" className="hover:text-red-500 transition">
              <FaPinterest/>
            </NavLink>

            <NavLink to="https://www.youtube.com/@TrainTicketsUSA/" className="hover:text-red-500 transition">
              <FaYoutube/>
            </NavLink>

            <NavLink to="https://www.linkedin.com/company/train-ticket-usa/" className="hover:text-blue-400 transition">
              <FaLinkedin/>
            </NavLink>

          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700 py-6">

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-3">

          <div className="flex items-center gap-2">
            <Copyright size={16}/>
            2026 US-TrainTicket. All Rights Reserved.
          </div>

          <p>Your trusted online booking train tickets platform.</p>

          <div className="flex gap-6">
            <NavLink to="/terms-conditions" className="hover:text-white">Terms</NavLink>
            <NavLink to="/privacy-policy" className="hover:text-white">Privacy</NavLink>
          </div>

        </div>

      </div>

    </footer>
  );
}