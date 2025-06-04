import React from "react";
import { FiCalendar, FiClock, FiMapPin, FiUsers, FiAward, FiArrowRight } from "react-icons/fi";

const EventsCard = ({ event }) => {
  const {
    eventName,
    eventType,
    eventDate,
    eventTime,
    location,
    participantLimit,
    difficulty,
    highlights,
    description,
    eventImage,
    creatorName,
    creatorPhoto,
  } = event || {};

  const formattedDate = new Date(eventDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-primary/30 flex flex-col h-full">
      {/* Image container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={eventImage}
          alt={eventName}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        
        {/* Event type badge */}
        <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-primary text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide">
          {eventType}
        </span>
        
        {/* Difficulty level */}
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-2.5 py-1 rounded-full">
          {difficulty}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 p-5 flex flex-col">
        {/* Event title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 leading-tight">
          {eventName}
        </h3>
        
        {/* Highlights */}
        {highlights && (
          <div className="flex items-center text-sm text-primary mb-2">
            <FiAward className="mr-1" size={14} />
            <span className="line-clamp-1">{highlights}</span>
          </div>
        )}
        
        {/* Meta info */}
        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="flex items-center text-sm text-gray-600">
            <FiCalendar className="mr-1 text-primary" size={14} />
            {formattedDate}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <FiClock className="mr-1 text-primary" size={14} />
            {eventTime}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <FiMapPin className="mr-1 text-primary" size={14} />
            <span className="line-clamp-1">{location}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <FiUsers className="mr-1 text-primary" size={14} />
            {participantLimit} spots
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Footer */}
        <div className="mt-auto pt-3 border-t border-gray-100">
          <div className="flex justify-between items-center">
            {/* Creator info */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-primary">
                <img 
                  src={creatorPhoto} 
                  alt={creatorName} 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm font-medium text-gray-700">{creatorName}</p>
            </div>

            {/* CTA buttons */}
            <div className="flex gap-2">
              <button className="flex items-center text-sm font-medium text-primary hover:text-primary-dark transition-colors">
                View Details
                <FiArrowRight className="ml-1" size={16} />
              </button>
              <button className="btn btn-sm btn-primary rounded-full px-4 shadow-md hover:shadow-lg transition-shadow">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;