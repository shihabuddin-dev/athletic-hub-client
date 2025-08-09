import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaDev,
} from "react-icons/fa";
import { Link } from "react-router";
import athleticLogo from "../../assets/athletic-logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-secondary/8 via-base-100 to-secondary/8 text-base-content pt-12 pb-0 border-t-2 border-secondary/15 ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-5 lg:gap-10">
        {/* Brand Info */}
        <div className="md:col-span-2 flex flex-col gap-2">
          <div className="flex items-center gap-2 mb-2">
            <img
              src={athleticLogo}
              alt="Athletic Hub Logo"
              className="w-10 h-10 object-contain"
            />
            <h2 className="text-2xl font-bold text-secondary">Athletic Hub</h2>
          </div>
          <p className="text-base text-primary font-semibold">
            The Ultimate Platform for Athletic Events
          </p>
          <p className="text-sm text-base-content/80">
            Effortlessly discover, book, and manage your spot in local sports
            events.
            <br />
            <span className="text-secondary font-semibold">
              Empowering athletes, organizers, and sports fans to connect and
              compete.
            </span>
          </p>
          <div className="flex gap-3 mt-3">
            <a
              href="https://shihab-dev.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 transition-transform text-secondary bg-base-100 p-2 rounded-full border border-secondary"
              aria-label="Website"
            >
              <FaDev size={18} />
            </a>
            <a
              href="https://www.facebook.com/shihabuddinReal/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 transition-transform text-secondary bg-base-100 p-2 rounded-full border border-secondary"
              aria-label="Facebook"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://x.com/shihabuddinReal"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 transition-transform text-secondary bg-base-100 p-2 rounded-full border border-secondary"
              aria-label="Twitter"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="https://www.instagram.com/shihabuddin.real"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 transition-transform text-secondary bg-base-100 p-2 rounded-full border border-secondary"
              aria-label="Instagram"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/shihab-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 transition-transform text-secondary bg-base-100 p-2 rounded-full border border-secondary"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-bold mb-3 text-secondary">
            Useful Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-secondary font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link to="/events" className="hover:text-secondary font-medium">
                Browse Events
              </Link>
            </li>
            <li>
              <Link
                to="/eventOrganizers"
                className="hover:text-secondary font-medium"
              >
                Event Organizers
              </Link>
            </li>
            <li>
              <Link
                to="/howItWorks"
                className="hover:text-secondary font-medium"
              >
                How It Works
              </Link>
            </li>
            <li>
              <Link
                to="/terms&Conditions"
                className="hover:text-secondary font-medium"
              >
                Terms & Conditions
              </Link>
            </li>
          
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-bold mb-3 text-secondary">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/blog" className="hover:text-secondary font-medium">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-secondary font-medium">
                FAQs
              </Link>
            </li>

            <li>
              <Link to="/support" className="hover:text-secondary font-medium">
                Support
              </Link>
            </li>
            
              <li>
              <a
                href="https://michalsnik.github.io/aos/"
                className="hover:text-secondary font-medium"
              >
                Animation (Aos)
              </a>
            </li>
            <li>
              <a
                href="https://www.freepik.com/"
                className="hover:text-secondary font-medium"
              >
                Freepik
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="font-medium">
          <h3 className="text-lg font-bold mb-3 text-secondary">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-secondary" /> info@ah.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-secondary" /> +880 124-56890
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-secondary" /> Bogura, Bangladesh
            </li>
            <li className="flex items-center gap-2">
              <FaDev className="text-secondary" /> Develop by <a href="https://shihab-dev.web.app/" target="blank" className="text-secondary">Shihab</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-12 py-4 border-t-2 border-secondary/15 border-dashed text-center text-sm">
        <p className="font-medium text-primary text-center">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-secondary font-bold">Athletic Hub</span>. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
