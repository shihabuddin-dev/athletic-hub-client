import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "../../components/ui/Button";
import Event from "../../components/event/Event";
import bgEvents from "../../assets/bg-events.jpg";

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
    <div>
      <header
        className="w-full rounded h-100 bg-cover bg-center py-16 flex items-center justify-center shadow-md mb-10 relative"
        style={{ backgroundImage: `url("${bgEvents}")` }}
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-black/50 via-secondary/20 to-black/40"></div>
        <div className="b from-black/40 via-black/10 to-white/0"></div>
        <div className="w-full flex items-center justify-center py-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-semibold text-white text-center tracking-wide drop-shadow">
            ALL Events
          </h1>
        </div>
      </header>

      <form className="pb-8 flex flex-col md:flex-row justify-center items-center gap-2">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          required
          placeholder="Search by Event Name"
          className="max-w-sm border-2 border-base-content/20 px-4 py-1.5 md:py-2 rounded-md focus:outline-none focus:border-secondary transition duration-200 bg-base-100 text-base-content"
        />
        <Button>Search</Button>
      </form>
      <div>
        {events.map((event) => (
          <Event key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
