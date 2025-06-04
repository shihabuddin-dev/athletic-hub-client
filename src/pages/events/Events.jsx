import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "../../components/ui/Button";
import bgEvents from "../../assets/bg-events.jpg";
import EventsCard from "../../components/event/EventsCard";
import { Fade } from "react-awesome-reveal";

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
      <Fade>
        <header
          className="w-full rounded h-100 bg-cover bg-center py-16 flex items-center justify-center shadow-md relative transition-transform duration-700 hover:scale-101 brightness-95 hover:brightness-100"
          style={{ backgroundImage: `url("${bgEvents}")` }}
        >
          <div className="absolute rounded inset-0 z-0 bg-gradient-to-br from-black/50 via-secondary/20 to-black/40"></div>
          <div className="b from-black/40 via-black/10 to-white/0"></div>
          <div className="w-full flex flex-col items-center justify-center py-8 relative z-10 text-white">
            <h1 className="text-4xl md:text-5xl font-semibold  text-center tracking-wide drop-shadow">
              ALL Events
            </h1>{" "}
            <br />
            <p>
              The Ultimate Platform for Athletic Events Effortlessly discover,
              and manage your spot in local sports events.
            </p>
          </div>
        </header>
      </Fade>

      <Fade>
        <form className="flex flex-col md:flex-row justify-center items-center gap-2">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            required
            placeholder="Search by Event Name or Location"
            className="md:w-sm border-2 border-base-content/40 px-4 py-1.5 rounded-md focus:outline-none focus:border-secondary transition duration-200 bg-base-100 text-base-content"
          />
          <Button>Search</Button>
        </form>
      </Fade>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {events.map((event) => (
          <EventsCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
