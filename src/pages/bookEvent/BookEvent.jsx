import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import {
  FaRegCalendarCheck,
  FaUserEdit,
  FaCreditCard,
  FaSmileBeam,
} from "react-icons/fa";
import Button from "../../components/ui/Button";
import { Link } from "react-router";

const steps = [
  {
    icon: <FaRegCalendarCheck className="text-2xl text-secondary" />,
    title: "Choose Event",
    desc: "Browse and select your favorite sports event from our vibrant calendar.",
    color: "from-primary/10 to-secondary/10",
  },
  {
    icon: <FaUserEdit className="text-2xl text-primary" />,
    title: "Fill Details",
    desc: "Enter your information and preferences for a personalized experience.",
    color: "from-secondary/10 to-primary/10",
  },
  {
    icon: <FaCreditCard className="text-2xl text-warning" />,
    title: "Secure Payment",
    desc: "Pay safely and instantly with our trusted payment gateway.",
    color: "from-warning/10 to-success/10",
  },
  {
    icon: <FaSmileBeam className="text-2xl text-success" />,
    title: "Enjoy Event",
    desc: "Get ready to participate and make memories at your chosen event!",
    color: "from-success/10 to-info/10",
  },
];

const BookEvent = () => {
  return (
    <div>
      <title>Book Event | Athletic Hub</title>
      <div className="text-center mb-8 sm:mb-12">
        <Slide triggerOnce direction="right" delay={300} duration={1000}>
          <h2 className="text-3xl md:text-4xl font-semibold md:font-bold text-primary mb-2 sm:mb-3 text-center drop-shadow-lg">
            Book <span className="text-secondary">Event</span> Steps
          </h2>
        </Slide>
        <Slide triggerOnce direction="left" delay={300} duration={1000}>
          <p className="text-accent text-center max-w-xs sm:max-w-xl md:max-w-2xl mx-auto">
            Discover, book, and join your next sports adventure with ease.
            Athletic Hub makes every step simple, secure, and exciting!
          </p>
        </Slide>
      </div>
      {/* Steps Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
        {steps.map((step, idx) => (
          <Fade triggerOnce>
            <div
              key={step.title}
              className={`relative bg-gradient-to-br ${step.color} rounded-xl shadow-lg p-7 flex flex-col items-center group transition-all duration-500 hover:scale-105 border-b-4 border-secondary/30 hover:border-secondary`}
              style={{ minHeight: "260px" }}
            >
              {/* Animated Accent */}
              <span
                className={`absolute -top-6 right-4 w-14 h-14 rounded-full opacity-10 bg-secondary group-hover:scale-110 transition-transform duration-500`}
              ></span>
              <span className="z-10 mb-4 flex items-center justify-center bg-base-100 rounded-full p-4 shadow-lg group-hover:bg-secondary/10 transition-all duration-300">
                {step.icon}
              </span>
              <h3 className="z-10 text-lg font-bold text-primary mb-2 text-center group-hover:text-secondary transition-colors duration-300">
                {idx + 1}. {step.title}
              </h3>
              <p className="z-10 text-accent text-center text-sm">
                {step.desc}
              </p>
              {/* Decorative line */}
              {idx < steps.length - 1 && (
                <span className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-2 h-24 bg-gradient-to-b from-secondary/20 to-primary/10 rounded-full opacity-60 group-hover:opacity-90 transition-all duration-300"></span>
              )}
            </div>
          </Fade>
        ))}
      </div>
      <Fade triggerOnce>
        {" "}
        <div className="mt-8 sm:mt-12 text-center">
          <Link to="/events">
            <Button variant="outline">Book Event</Button>
          </Link>
        </div>
      </Fade>
    </div>
  );
};

export default BookEvent;
