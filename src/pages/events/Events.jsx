import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "../../components/ui/Button";
import bgEvents from "../../assets/bg-events.jpg";
import EventsCard from "../../components/event/EventsCard";
import { Fade, Slide } from "react-awesome-reveal";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios(`${import.meta.env.VITE_API_URL}/events?searchParams=${search}`).then(
      (res) => {
        setEvents(res.data);
      }
    );
  }, [search]);

  return (
    <div className="space-y-10 md:space-y-14">
      <title>Events | Athletic Hub</title>
      <Fade>
        <header
          className="w-full rounded h-auto min-h-[220px] sm:min-h-[300px] md:min-h-[400px] bg-cover bg-center py-10 sm:py-16 flex items-center justify-center shadow-md relative transition-transform duration-700 hover:scale-101 brightness-95 hover:brightness-100"
          style={{ backgroundImage: `url("${bgEvents}")` }}
        >
          <div className="absolute rounded inset-0 z-0 bg-gradient-to-br from-black/60 via-secondary/20 to-black/40" />
          <div className="w-full flex flex-col items-center justify-center py-4 sm:py-8 relative z-10 text-white">
            <Slide direction="left" delay={300} duration={1000}>
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-center tracking-wide drop-shadow">
                ALL Events
              </h1>
            </Slide>
            <br />
            <Slide direction="right" delay={300} duration={1000}>
              <p className="px-2 text-sm sm:text-base max-w-xs sm:max-w-lg text-center">
                The Ultimate Platform for Athletic Events. Effortlessly discover
                and manage your spot in local sports events.
              </p>
            </Slide>
          </div>
        </header>
      </Fade>

      <Fade>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-2 px-2">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            required
            placeholder="Search by Event Name or Location"
            className="w-full sm:w-auto border-2 border-base-content/40 px-4 py-2 rounded-md focus:outline-none focus:border-secondary transition duration-200 bg-base-100 text-base-content text-sm sm:text-base"
          />
          <Button className="w-full sm:w-auto">Search</Button>
        </form>
      </Fade>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 px-2">
        {events.map((event) => (
          <EventsCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
