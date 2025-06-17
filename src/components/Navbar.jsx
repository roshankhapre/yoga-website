import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import WorkshopHighlights from "./WorkshopHighlights";
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef();

  const whatsappNumber = "918281094117";
  const whatsappMessage =
    "Hello! I'm interested in the YogaSteni kids yoga workshops. Could you please share the details, schedules, and how to enroll?";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="h-16 max-h-full object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-8 text-gray-700 font-medium text-lg">
            <a
              href="/WorkshopHighlights"
              className="hover:text-pink-600 transition hover:underline underline-offset-4"
            >
              Workshops
            </a>
            <a
              href="/AboutUS"
              className="hover:text-pink-600 transition hover:underline underline-offset-4"
            >
              About Us
            </a>
            <a
              href="/TestimonialSection"
              className="hover:text-pink-600 transition hover:underline underline-offset-4"
            >
              Reviews
            </a>
            <a
              href="/Register"
              className="hover:text-pink-600 transition hover:underline underline-offset-4"
            >
              Contact
            </a>
          </div>

          {/* WhatsApp CTA Button (Same for Desktop & Mobile) */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-5 py-2 rounded-full font-semibold shadow-lg hover:from-pink-600 hover:to-purple-700 transition transform hover:scale-105 flex items-center gap-2"
          >
            <FaWhatsapp className="text-xl" />
            Enroll Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <FaBars className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/30 z-40 flex flex-col">
          <div
            ref={menuRef}
            className="bg-white w-full px-6 py-6 space-y-4 shadow-lg z-50"
          >
            <a
              href="#workshops"
              className="block text-lg font-medium text-gray-800 hover:text-pink-600 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Workshops
            </a>
            <a
              href="/AboutUS"
              className="block text-lg font-medium text-gray-800 hover:text-pink-600 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="#testimonials"
              className="block text-lg font-medium text-gray-800 hover:text-pink-600 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Reviews
            </a>
            <a
              href="#contact"
              className="block text-lg font-medium text-gray-800 hover:text-pink-600 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 text-white bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-3 rounded-full font-semibold shadow-md hover:from-pink-600 hover:to-purple-700 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FaWhatsapp className="text-xl" />
              Enroll Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
