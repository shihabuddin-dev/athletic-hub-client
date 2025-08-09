import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import athleticLogo from "../../assets/athletic-logo.png";

const HowItWorks = () => (
  <section className="max-w-7xl mx-auto px-2 sm:px-4 md:px-8">
    <Slide triggerOnce direction="left" delay={300} duration={1000}>
      <h2 className="text-center text-3xl md:text-4xl font-semibold md:font-bold text-primary mb-2">
        How <span className="text-secondary">Athletic Hub</span> Works
      </h2>
    </Slide>
    <Slide triggerOnce direction="right" delay={300} duration={1000}>
      <p className="text-center text-accent mb-8 sm:mb-12 max-w-xs sm:max-w-xl md:max-w-2xl mx-auto text-sm sm:text-base">
        Discover, book, and join your favorite sports events in just a few
        steps. Athletic Hub makes participation{" "}
        <span className="text-secondary font-semibold">easy</span>,{" "}
        <span className="text-primary font-semibold">secure</span>, and{" "}
        <span className="text-secondary font-semibold">fun</span> for athletes
        and fans alike.
      </p>
    </Slide>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-center">
      {/* Left: Steps 1 & 2 */}
      <div className="flex flex-col gap-4 sm:gap-6">
        <Slide triggerOnce direction="left" delay={300} duration={1000}>
          <div className="flex items-start gap-3 sm:gap-4 bg-secondary/8 rounded-md shadow-md p-4 sm:p-6 border-l-4 hover:border-secondary border-secondary/15 hover:scale-102 transition-all">
            <div className="text-xl sm:text-2xl font-bold text-secondary">
              1
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg text-primary mb-1">
                Create Your Account
              </h3>
              <p className="text-accent text-xs sm:text-sm">
                Sign up quickly and set up your athlete or fan profile to get
                started.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 sm:gap-4 bg-secondary/8 rounded-md shadow-md p-4 sm:p-6 border-l-4 hover:border-primary border-primary/15 hover:scale-102 transition-all">
            <div className="  text-xl sm:text-2xl font-bold text-primary">
              2
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg text-primary mb-1">
                Browse Events
              </h3>
              <p className="text-accent text-xs sm:text-sm">
                Explore a wide range of local and national sports events or
                search for your favorites.
              </p>
            </div>
          </div>
        </Slide>
      </div>
      {/* Center: Image */}
      <div className="hidden md:block">
        <Fade triggerOnce duration={3000} delay={300}>
          <div className="hidden md:flex justify-center items-center">
            <img
              src={athleticLogo}
              alt="How Athletic Hub Works"
              className="w-40 h-40 md:w-64 md:h-64 p-2 object-contain rounded-md shadow-md border-4 border-secondary/15 bg-secondary/8 transition-all duration-400 hover:grayscale-30 hover:scale-110"
            />
          </div>
        </Fade>
      </div>
      {/* Right: Steps 3 & 4 */}
      <Slide triggerOnce direction="right" delay={300} duration={1000}>
        <div className="flex flex-col gap-4 sm:gap-6">
          <div className="flex items-start gap-3 sm:gap-4 bg-secondary/8 rounded-md shadow-md p-4 sm:p-6 border-l-4 hover:border-secondary border-secondary/15 hover:scale-102 transition-all">
            <div className="  text-xl sm:text-2xl font-bold text-secondary">
              3
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg text-primary mb-1">
                Book Your Spot
              </h3>
              <p className="text-accent text-xs sm:text-sm">
                Reserve your place instantly and receive confirmation details in
                your inbox.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 sm:gap-4 bg-secondary/8 rounded-md shadow-md p-4 sm:p-6 border-l-4 hover:border-primary border-primary/15 hover:scale-102 transition-all">
            <div className="text-xl sm:text-2xl font-bold text-primary">
              4
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg text-primary mb-1">
                Join & Compete
              </h3>
              <p className="text-accent text-xs sm:text-sm">
                Attend the event, connect with fellow athletes, and enjoy competition!
              </p>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  </section>
);

export default HowItWorks;
