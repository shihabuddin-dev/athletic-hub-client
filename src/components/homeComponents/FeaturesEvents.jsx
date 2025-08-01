import React from "react";
import { Link, useLoaderData } from "react-router";
import { Slide } from "react-awesome-reveal";
import EventsCard from "../event/EventsCard";
import Button from "../ui/Button";

const FeaturesEvents = () => {
  const events = useLoaderData();
  return (
    <div>
      <Slide triggerOnce direction="left" delay={300} duration={1000}>
        <h2 className="text-center text-3xl md:text-4xl font-semibold md:font-bold text-primary mb-2">
          Featured <span className="text-secondary">Events</span>
        </h2>
      </Slide>
      <Slide triggerOnce direction="right" delay={300} duration={1000}>
        <p className="text-accent mb-10 max-w-2xl mx-auto text-center">
          Discover, join, and experience our most exciting, trending, and
          upcoming featured events happening near you now!
        </p>
      </Slide>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
        {events.map((event) => (
          <Link to={`/events/${event._id}`} key={event._id} className="block group cursor-pointer h-full">
            <EventsCard event={event} hideFooter={true} />
          </Link>
        ))}
      </div>
      <Link to="/events" className="flex justify-center">
        <Button variant="outline" className="mt-10">
          See All Events
        </Button>
      </Link>
    </div>
  );
};

export default FeaturesEvents;
