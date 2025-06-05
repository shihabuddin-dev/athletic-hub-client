import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import {
  FaFutbol,
  FaSwimmer,
  FaRunning,
  FaBasketballBall,
  FaTableTennis,
  FaVolleyballBall,
  FaBaseballBall,
  FaHockeyPuck,
  FaBiking,
  FaGolfBall,
  FaDumbbell,
  FaSkiing,
} from "react-icons/fa";

const sports = [
  {
    name: "Football",
    icon: <FaFutbol />,
    color: "bg-gradient-to-br from-emerald-500 to-green-600",
  },
  {
    name: "Swimming",
    icon: <FaSwimmer />,
    color: "bg-gradient-to-br from-blue-400 to-blue-600",
  },
  {
    name: "Running",
    icon: <FaRunning />,
    color: "bg-gradient-to-br from-red-400 to-red-600",
  },
  {
    name: "Basketball",
    icon: <FaBasketballBall />,
    color: "bg-gradient-to-br from-orange-500 to-amber-600",
  },
  {
    name: "Table Tennis",
    icon: <FaTableTennis />,
    color: "bg-gradient-to-br from-cyan-400 to-cyan-600",
  },
  {
    name: "Volleyball",
    icon: <FaVolleyballBall />,
    color: "bg-gradient-to-br from-pink-400 to-pink-600",
  },
  {
    name: "Baseball",
    icon: <FaBaseballBall />,
    color: "bg-gradient-to-br from-amber-400 to-amber-600",
  },
  {
    name: "Hockey",
    icon: <FaHockeyPuck />,
    color: "bg-gradient-to-br from-indigo-400 to-indigo-600",
  },
  {
    name: "Cycling",
    icon: <FaBiking />,
    color: "bg-gradient-to-br from-teal-400 to-teal-600",
  },
  {
    name: "Golf",
    icon: <FaGolfBall />,
    color: "bg-gradient-to-br from-lime-400 to-lime-600",
  },
  {
    name: "Gym",
    icon: <FaDumbbell />,
    color: "bg-gradient-to-br from-rose-400 to-rose-600",
  },
  {
    name: "Skiing",
    icon: <FaSkiing />,
    color: "bg-gradient-to-br from-sky-400 to-sky-600",
  },
];

const PopularSports = () => (
  <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
    <Slide direction="left" delay={300} duration={1000}>
      <h2 className="text-3xl md:text-4xl font-semibold md:font-bold text-primary mb-2 text-center">
        <span className="text-secondary">Popular</span> Sports
      </h2>
    </Slide>
    <Slide direction="right" delay={300} duration={1000}>
      <p className="text-accent mb-12 max-w-2xl mx-auto text-center">
        Explore, enjoy your favorite sports activities with friends, family, and
        our vibrant community today!
      </p>
    </Slide>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
      {sports.map((sport, idx) => {
        // Alternate between Fade and Slide (directional)
        if (idx % 2 === 0) {
          return (
            <Fade key={sport.name} duration={700} delay={idx * 80}>
              <div className="group relative flex flex-col items-center bg-base-100 rounded p-6 shadow-md hover:shadow-xl transition-all duration-900 border border-base-200 cursor-pointer overflow-hidden hover:-translate-y-1">
                {/* Gradient background overlay on hover */}
                <div
                  className={`absolute inset-0 ${sport.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded`}
                ></div>
                {/* Icon container */}
                <div
                  className={`relative z-10 mb-4 rounded-full p-4 ${sport.color} text-white shadow-md group-hover:bg-base-100 transition-all duration-300`}
                >
                  {React.cloneElement(sport.icon, { className: "text-2xl" })}
                </div>
                {/* Sport name */}
                <span className="relative z-10 mt-1 text-lg font-semibold text-base-content transition-colors duration-300 text-center">
                  {sport.name}
                </span>
              </div>
            </Fade>
          );
        } else {
          // Alternate direction for Slide
          const directions = ["left", "right", "up", "down"];
          const direction = directions[(idx / 2) % directions.length];
          return (
            <Slide
              key={sport.name}
              direction={direction}
              duration={700}
              delay={idx * 80}
            >
              <div className="group relative flex flex-col items-center bg-base-100 rounded p-6 shadow-md hover:shadow-xl transition-all duration-900 border border-base-200 cursor-pointer overflow-hidden hover:-translate-y-1">
                {/* Gradient background overlay on hover */}
                <div
                  className={`absolute inset-0 ${sport.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded`}
                ></div>
                {/* Icon container */}
                <div
                  className={`relative z-10 mb-4 rounded-full p-4 ${sport.color} text-white shadow-md group-hover:bg-base-100 transition-all duration-300`}
                >
                  {React.cloneElement(sport.icon, { className: "text-2xl" })}
                </div>
                {/* Sport name */}
                <span className="relative z-10 mt-1 text-lg font-semibold text-base-content transition-colors duration-300 text-center">
                  {sport.name}
                </span>
              </div>
            </Slide>
          );
        }
      })}
    </div>
  </div>
);

export default PopularSports;
