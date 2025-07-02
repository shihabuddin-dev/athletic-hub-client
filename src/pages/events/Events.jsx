import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "../../components/ui/Button";
import bgEvents from "../../assets/bg-events.jpg";
import EventsCard from "../../components/event/EventsCard";
import { Fade, Slide } from "react-awesome-reveal";

const sortOptions = [
  { value: "date", label: "Date (Upcoming)" },
  { value: "name", label: "Name (A-Z)" },
  { value: "location", label: "Location (A-Z)" },
];

const Events = () => {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [eventType, setEventType] = useState("");
  const [allEventTypes, setAllEventTypes] = useState([]);

  useEffect(() => {
    axios(`${import.meta.env.VITE_API_URL}/events?searchParams=${search}`).then(
      (res) => {
        setEvents(res.data);
        // Extract unique event types for filtering
        const types = Array.from(new Set(res.data.map(e => e.eventType).filter(Boolean)));
        setAllEventTypes(types);
      }
    );
  }, [search]);

  // Sorting and filtering logic
  const getFilteredSortedEvents = () => {
    let filtered = [...events];
    if (eventType) {
      filtered = filtered.filter(e => e.eventType === eventType);
    }
    if (sortBy === "date") {
      filtered.sort((a, b) => new Date(a.eventDate) - new Date(b.eventDate));
    } else if (sortBy === "name") {
      filtered.sort((a, b) => a.eventName.localeCompare(b.eventName));
    } else if (sortBy === "location") {
      filtered.sort((a, b) => a.location.localeCompare(b.location));
    }
    return filtered;
  };

  return (
    <div className="space-y-10 md:space-y-14">
      <title>Events | Athletic Hub</title>
      <Fade triggerOnce>
        <header
          className="w-full rounded h-auto min-h-[220px] sm:min-h-[300px] md:min-h-[400px] bg-cover bg-center py-10 sm:py-16 flex items-center justify-center shadow-md relative transition-transform duration-700 hover:scale-101 brightness-95 hover:brightness-100"
          style={{ backgroundImage: `url("${bgEvents}")` }}
        >
          <div className="absolute rounded inset-0 z-0 bg-gradient-to-br from-black/60 via-secondary/20 to-black/40" />
          <div className="w-full flex flex-col items-center justify-center py-4 sm:py-8 relative z-10 text-white">
            <Slide triggerOnce direction="left" delay={300} duration={1000}>
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-center tracking-wide drop-shadow">
                ALL Events
              </h1>
            </Slide>
            <br />
            <Slide triggerOnce direction="right" delay={300} duration={1000}>
              <p className="px-2 text-sm sm:text-base max-w-xs sm:max-w-lg text-center">
                The Ultimate Platform for Athletic Events. Effortlessly discover
                and manage your spot in local sports events.
              </p>
            </Slide>
          </div>
        </header>
      </Fade>

      <Fade triggerOnce>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-2 px-2">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            required
            placeholder="Search by Event Name or Location"
            className="w-full sm:w-auto md:w-sm border-2 border-base-content/40 px-4 py-2 rounded-md focus:outline-none focus:border-secondary transition duration-200 bg-base-100 text-base-content text-sm sm:text-base"
          />
          <Button className="w-full sm:w-auto">Search</Button>
        </form>
        {/* Sorting and Filtering Controls */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-4 px-2">
          <div>
            <label className="mr-2 font-medium text-base-content">Sort by:</label>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="border rounded px-2 py-1 focus:outline-none focus:border-secondary"
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="mr-2 font-medium text-base-content">Filter by Type:</label>
            <select
              value={eventType}
              onChange={e => setEventType(e.target.value)}
              className="border rounded px-2 py-1 focus:outline-none focus:border-secondary"
            >
              <option value="">All</option>
              {allEventTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>
      </Fade>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 px-2">
        {getFilteredSortedEvents().map((event) => (
          <EventsCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
