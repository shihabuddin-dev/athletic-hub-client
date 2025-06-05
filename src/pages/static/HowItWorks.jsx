import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import athleticLogo from "../../assets/athletic-logo.png";

const HowItWorks = () => (
  <section className="max-w-7xl mx-auto px-4">
    <title>How It Works | Athletic Hub</title>
    <Slide direction="left" delay={300} duration={1000}>
      <h2 className="text-center text-3xl md:text-4xl font-semibold md:font-bold text-primary mb-2">
        How <span className="text-secondary">Athletic Hub</span> Works
      </h2>
    </Slide>
    <Slide direction="right" delay={300} duration={1000}>
      <p className="text-center text-accent mb-12 max-w-2xl mx-auto">
        Discover, book, and join your favorite sports events in just a few
        steps. Athletic Hub makes participation{" "}
        <span className="text-secondary font-semibold">easy</span>,{" "}
        <span className="text-primary font-semibold">secure</span>, and{" "}
        <span className="text-secondary font-semibold">fun</span> for athletes
        and fans alike.
      </p>
    </Slide>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
      {/* Left: Steps 1 & 2 */}
      <div className="flex flex-col gap-8">
        <Slide direction="left" delay={300} duration={1000}>
          <div className="flex items-start gap-4 bg-secondary/8 rounded-md shadow-md p-6 border-l-4 hover:border-secondary border-secondary/15 hover:scale-102 transition-all">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary/15 text-2xl font-bold text-secondary shadow-sm">
              1
            </div>
            <div>
              <h3 className="font-bold text-lg text-primary mb-1">
                Create Your Account
              </h3>
              <p className="text-accent text-sm">
                Sign up quickly and set up your athlete or fan profile to get
                started.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-secondary/8 rounded-md shadow-md p-6 border-l-4 hover:border-primary border-primary/15 hover:scale-102 transition-all">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary shadow-sm">
              2
            </div>
            <div>
              <h3 className="font-bold text-lg text-primary mb-1">
                Browse Events
              </h3>
              <p className="text-accent text-sm">
                Explore a wide range of local and national sports events or
                search for your favorites.
              </p>
            </div>
          </div>
        </Slide>
      </div>
      {/* Center: Image */}
      <div className="hidden md:block">
        <Fade duration={3000} delay={300}>
          <div className="hidden md:flex justify-center items-center">
            <img
              src={athleticLogo}
              alt="How Athletic Hub Works"
              className="w-64 h-64 p-2 object-contain rounded-md shadow-md border-4 border-secondary/15 bg-secondary/8 transition-all duration-300 hover:grayscale-30"
            />
          </div>
        </Fade>
      </div>
      {/* Right: Steps 3 & 4 */}
      <Slide direction="right" delay={300} duration={1000}>
        <div className="flex flex-col gap-8">
          <div className="flex items-start gap-4 bg-secondary/8 rounded-md shadow-md p-6 border-l-4 hover:border-secondary border-secondary/15 hover:scale-102 transition-all">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary/15 text-2xl font-bold text-secondary shadow-sm">
              3
            </div>
            <div>
              <h3 className="font-bold text-lg text-primary mb-1">
                Book Your Spot
              </h3>
              <p className="text-accent text-sm">
                Reserve your place instantly and receive confirmation details in
                your inbox.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-secondary/8 rounded-md shadow-md p-6 border-l-4 hover:border-primary border-primary/15 hover:scale-102 transition-all">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary shadow-sm">
              4
            </div>
            <div>
              <h3 className="font-bold text-lg text-primary mb-1">
                Join & Compete
              </h3>
              <p className="text-accent text-sm">
                Attend the event, connect with fellow athletes, and enjoy the
                thrill of competition!
              </p>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  </section>
);

export default HowItWorks;
