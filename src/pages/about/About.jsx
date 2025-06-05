import React from "react";
import athleticLogo from "../../assets/athletic-logo.png";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-router";
import { FaArrowDown } from "react-icons/fa";

const About = () => {
  // Reusable InfoCard component
  const InfoCard = ({
    icon,
    title,
    description,
    to,
    btnText,
    delay = 0,
    direction = "up",
  }) => (
    <Slide direction={direction} delay={delay}>
      <div className="bg-base-100 rounded-xl shadow-sm p-6 flex flex-col items-center hover:shadow-md transition-all border-l-4 border-secondary/30 hover:border-secondary">
        <span className="text-secondary text-3xl mb-3">{icon}</span>
        <h3 className="font-bold text-secondary mb-1">{title}</h3>
        <p className="text-accent text-center text-sm mb-2">{description}</p>
        <Link
          to={to}
          className="btn btn-sm bg-gradient-to-r from-secondary to-primary text-white rounded mt-2"
        >
          {btnText}
        </Link>
      </div>
    </Slide>
  );

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 relative">
      <title>About Us | Athletic Hub</title>
      {/* Decorative background shapes */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-primary/30 to-secondary/20 rounded-full blur-2xl z-0 animate-pulse" />
      <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-gradient-to-tr from-secondary/30 to-primary/20 rounded-full blur-2xl z-0 animate-pulse" />
      <div className="relative z-10">
        <div className="text-center mb-12">
          <Slide direction="right" delay={300} duration={1000}>
            <h2 className="text-3xl md:text-4xl font-semibold md:font-bold text-primary mb-3 text-center drop-shadow-lg">
              Discover <span className="text-secondary">Athletic</span> Hub
            </h2>
          </Slide>
          <Slide direction="left" delay={300} duration={1000}>
            <p className="text-accent text-center max-w-2xl mx-auto">
              Athletic Hub is your gateway to a world of sports. Effortlessly
              create, manage, and join events—anytime, anywhere.
            </p>
          </Slide>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8 animate-fade-in-left">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">🌟</span>
              <h2 className="text-2xl font-semibold text-primary">
                Our Vision
              </h2>
            </div>
            <p className="text-base-content/80 ">
              Athletic Hub is built on the belief that sports can transform
              lives. We strive to break barriers, foster friendships, and
              empower every athlete and organizer to shine—on and off the field.
            </p>
            <div className="flex items-center gap-3 mb-2 mt-8">
              <span className="text-2xl">🎯</span>
              <h2 className="text-2xl font-semibold text-primary">
                What Makes Us Different?
              </h2>
            </div>
            <ul className="list-none space-y-3 text-base-content/90 ">
              <li className="flex items-center gap-2">
                <span className="text-secondary">✔️</span> Animated, interactive
                event discovery
              </li>
              <li className="flex items-center gap-2">
                <span className="text-secondary">✔️</span> Effortless event
                creation & management
              </li>
              <li className="flex items-center gap-2">
                <span className="text-secondary">✔️</span> Real-time updates &
                community highlights
              </li>
              <li className="flex items-center gap-2">
                <span className="text-secondary">✔️</span> Inclusive,
                accessible, and mobile-first design
              </li>
            </ul>
          </div>
          <div className="flex justify-center animate-fade-in-right">
            <div className="relative group">
              <img
                src={athleticLogo}
                alt="Athletic Hub Logo"
                className="w-54 md:w-72 h-54 md:h-72 object-contain rounded shadow-md border-5 border-secondary group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
        <div className="mt-20 bg-gradient-to-r from-primary/8 to-secondary/8 rounded p-10 shadow-md animate-fade-in-up">
          <h2 className="text-3xl font-semibold text-center text-primary mb-8">
            Why Choose Athletic Hub?
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl mb-3 animate-bounce">🏅</span>
              <h3 className="font-semibold text-xl mb-2 text-secondary">
                Elite Experience
              </h3>
              <p className="text-base-content/70">
                Enjoy a seamless, visually stunning platform trusted by top
                organizers and athletes worldwide.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl mb-3 animate-bounce">🌍</span>
              <h3 className="font-semibold text-xl mb-2 text-secondary">
                Global Community
              </h3>
              <p className="text-base-content/70">
                Connect, compete, and collaborate with a diverse, supportive
                network of sports lovers.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl mb-3 animate-bounce">💡</span>
              <h3 className="font-semibold text-xl mb-2 text-secondary">
                Cutting-Edge Features
              </h3>
              <p className="text-base-content/70">
                Benefit from the latest tech—real-time notifications, animated
                UI, and mobile-first design.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center animate-fade-in">
          <h2 className="text-3xl font-semibold text-primary mb-3">
            Ready to Join the Movement?
          </h2>
          <p className="text-base-content/80 max-w-2xl mx-auto mb-8 ">
            Sign up today, create your first event, or explore what’s happening
            near you. Athletic Hub is your ticket to a more connected, active,
            and inspiring sports world.
          </p>

          <button className="btn bg-gradient-to-r from-secondary to-primary text-white rounded mt-2">
            Explore Here <FaArrowDown className="animate-bounce" />
          </button>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <InfoCard
            icon="📝"
            title="Blog"
            description="Read the latest stories, tips, and updates from Athletic Hub."
            to="/blog"
            btnText="Go to Blog"
            direction="up"
          />
          <InfoCard
            icon="❓"
            title="FAQs"
            description="Find answers to common questions about using Athletic Hub."
            to="/faq"
            btnText="Go to FAQs"
            direction="left"
            delay={100}
          />
          <InfoCard
            icon="💬"
            title="Support"
            description="Need help? Reach out to our support team for assistance."
            to="/support"
            btnText="Go to Support"
            direction="right"
            delay={200}
          />
          <InfoCard
            icon="⚙️"
            title="How It Works"
            description="Learn how to get the most out of Athletic Hub's features."
            to="/howItWorks"
            btnText="How It Works"
            direction="left"
            delay={300}
          />
          <InfoCard
            icon="📜"
            title="Terms & Conditions"
            description="Review our terms and policies for using Athletic Hub."
            to="/terms&Conditions"
            btnText="View Terms"
            direction="down"
            delay={400}
          />
          <InfoCard
            icon="👥"
            title="Event Organizers"
            description="Meet the passionate organizers behind our vibrant events."
            to="/eventOrganizers"
            btnText="Meet Organizers"
            direction="up"
            delay={500}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
