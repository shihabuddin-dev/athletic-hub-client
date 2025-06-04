import React from "react";
import { FiCalendar, FiArrowRight } from "react-icons/fi";

const Event = ({ event }) => {
  const {
    eventName,
    eventType,
    eventDate,
    description,
    eventImage,
    creatorName,
    creatorPhoto,
  } = event || {};

  return (
    <div className="group bg-base-100 rounded overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-base-content/10 hover:border-secondary/30 flex flex-col h-full">
      {/* Image with overlay */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={eventImage}
          alt={eventName}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />

        {/* Event type badge */}
        <span className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg uppercase tracking-wide">
          {eventType}
        </span>

        {/* Date badge */}
        <div className="absolute bottom-4 left-4 bg-white text-primary flex items-center gap-1 text-sm font-semibold px-3 py-1.5 rounded-lg shadow">
          <FiCalendar className="text-primary" />
          {new Date(eventDate).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col">
        <h3 className="text-xl font-bold text-secondary mb-2 line-clamp-2 leading-tight">
          {eventName}
        </h3>
        <p className="text-base-content/80 text-sm mb-4 line-clamp-3">
          {description}
        </p>

        <div className="mt-auto pt-4 border-t border-base-content/10">
          <div className="flex justify-between items-center">
            {/* User info */}
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="w-9 h-9 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-base-100">
                  <img src={creatorPhoto} alt={creatorName} />
                </div>
              </div>
              <p className="text-sm font-medium text-primary">{creatorName}</p>
            </div>

            {/* CTA button */}
            <button className="btn btn-sm btn-primary rounded-full px-4 shadow-md hover:shadow-lg transition-shadow">
              Join Event
              <FiArrowRight className="ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
