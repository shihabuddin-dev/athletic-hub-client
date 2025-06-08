import React from "react";
import CountUp from "react-countup";
import {
  RiCalendarEventFill,
  RiUserStarFill,
  RiMedalFill,
  RiUserHeartFill,
  RiTeamFill,
} from "react-icons/ri";
import { Fade, Slide } from "react-awesome-reveal";

const AthleticStats = () => {
  const statsData = [
    {
      icon: <RiCalendarEventFill />,
      color: "primary",
      border: "border-primary/30",
      bg: "bg-gradient-to-br from-primary/10 to-primary/5",
      text: "text-primary",
      count: 1200,
      label: "Active Events",
      duration: 3,
    },
    {
      icon: <RiUserStarFill />,
      color: "warning",
      border: "border-warning/30",
      bg: "bg-gradient-to-br from-warning/10 to-warning/5",
      text: "text-warning",
      count: 35000,
      label: "Successful Bookings",
      duration: 3,
    },
    {
      icon: <RiMedalFill />,
      color: "success",
      border: "border-success/30",
      bg: "bg-gradient-to-br from-success/10 to-success/5",
      text: "text-success",
      count: 500,
      label: "Event Organizers",
      duration: 3,
    },
    {
      icon: <RiUserHeartFill />,
      color: "secondary",
      border: "border-secondary/30",
      bg: "bg-gradient-to-br from-secondary/10 to-secondary/5",
      text: "text-secondary",
      count: 15000,
      label: "Happy Athletes & Fans",
      duration: 3,
    },
    {
      icon: <RiTeamFill />,
      color: "info",
      border: "border-info/30",
      bg: "bg-gradient-to-br from-info/10 to-info/5",
      text: "text-info",
      count: 7500,
      label: "Community Members",
      duration: 3,
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="text-center">
        <Slide direction="left" delay={300} duration={1000}>
          <h2 className="text-3xl md:text-4xl font-semibold md:font-bold text-primary mb-2">
            Why <span className="text-secondary">Choose </span>Athletic Hub?
          </h2>
        </Slide>
        <Slide direction="right" delay={300} duration={1000}>
          <p className="text-accent mb-10 max-w-2xl mx-auto">
            The all-in-one platform for athletic event booking and management.
          </p>
        </Slide>
      </div>

      {/* Stats Cards */}
      <Fade direction="up" delay={500} duration={1500}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
          {statsData.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center py-6 px-6 bg-base-100 rounded space-y-2 border-2 ${stat.border} hover:shadow-lg hover:scale-103 duration-500 transform shadow min-w-[180px] min-h-[220px] w-full h-full relative overflow-hidden group`}
              style={{ maxWidth: "270px", margin: "0 auto" }}
            >
              {/* Animated Accent */}
              <span
                className={`absolute -top-8 -right-8 w-12 h-12 rounded-full opacity-10 ${stat.bg}`}
              ></span>
              <span
                className={`z-10 ${stat.bg} ${stat.text} rounded-full p-3 mb-3 text-3xl flex items-center justify-center shadow group-hover:scale-103 transition-transform duration-300`}
              >
                {stat.icon}
              </span>
              <h3
                className={`z-10 text-3xl md:text-4xl font-semibold ${stat.text}`}
              >
                <CountUp
                  start={0}
                  end={stat.count}
                  enableScrollSpy
                  duration={stat.duration}
                />
                +
              </h3>
              <p className="z-10 text-base-content/80 text-center">
                {stat.label}
              </p>
              <span
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1 rounded-full ${stat.bg} opacity-40`}
              ></span>
            </div>
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default AthleticStats;
