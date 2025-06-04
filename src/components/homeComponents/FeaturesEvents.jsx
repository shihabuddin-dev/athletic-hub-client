import React from "react";
import { Link, useLoaderData } from "react-router";
import EventsCard from "../event/EventsCard";
import Button from "../ui/Button";

const FeaturesEvents = () => {
  const events = useLoaderData();
  return (
    <div>
      <h2 className="text-center text-2xl text-primary md:text-4xl font-semibold mb-10">
        Featured <span className="text-secondary">Events</span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {events.map((event) => (
          <EventsCard event={event} />
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
