import { Fade } from "react-awesome-reveal";
import {
  FiCalendar,
  FiClock,
  FiMapPin,
  FiUsers,
  FiAward,
  FiArrowRight,
} from "react-icons/fi";
import { Link } from "react-router";

const EventsCard = ({ event }) => {
  const {
    _id,
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
  });
  const formattedYear = new Date(eventDate).getFullYear();
  const miniButton =
    "btn btn-primary btn-sm rounded px-3 shadow-md hover:shadow-lg hover:bg-primary-focus transition-all";

  return (
    <Fade delay={700}>
      <div className="card bg-gradient-to-br from-base-100 via-base-200 to-secondary/10 shadow-md hover:shadow-md border border-base-200/50 hover:border-secondary/30 transition-all duration-900 flex flex-col h-full group transform hover:-translate-y-2 rounded">
        {/* Image container */}
        <Fade>
          <figure className="relative h-52 overflow-hidden rounded rounded-b-none">
            <img
              src={eventImage}
              alt={eventName}
              className="w-full h-full rounded object-cover transition-transform duration-900 group-hover:scale-105"
              loading="lazy"
            />
            {/* Gradient overlay */}
            <div className="absolute transition transform duration-700 inset-0 hover:bg-gradient-to-t hover:from-secondary/50 hover:via-transparent hover:to-transparent" />

            {/* Date ribbon */}
            <div className="absolute top-4 left-4 flex flex-col items-center justify-center bg-primary text-white text-center px-3 py-2 rounded shadow-md">
              <span className="text-lg font-bold leading-none">
                {formattedDate.split(" ")[1]}
              </span>
              <span className="text-xs uppercase tracking-wider">
                {formattedDate.split(" ")[0]}
              </span>
            </div>

            {/* Event badges */}
            <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
              <span className="badge badge-secondary rounded badge-lg text-white px-2 py-2 shadow-md">
                {eventType}
              </span>
            </div>
          </figure>
        </Fade>

        {/* Content */}
        <div className="card-body flex-1 flex flex-col p-6">
          {/* Event title and year */}
          <div className="flex justify-between items-start mb-2">
            <h3 className="card-title text-2xl font-bold line-clamp-2 leading-tight text-primary">
              {eventName}
            </h3>
            <span className="text-sm text-base-content/60">
              {formattedYear}
            </span>
          </div>

          {/* Highlights */}
          {highlights && (
            <div className="flex items-center bg-secondary/10 rounded px-3 py-2 mb-3">
              <FiAward className="text-secondary mr-2" size={16} />
              <span className="text-sm font-medium text-secondary line-clamp-1">
                {highlights.slice(0, 35)}
                {highlights.length > 35 ? "..." : ""}
              </span>
            </div>
          )}

          {/* Meta info */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="flex items-center">
              <FiMapPin className="text-primary mr-2" size={16} />
              <span className="text-sm font-medium text-base-content line-clamp-1">
                {location}
              </span>
            </div>
            <div className="flex items-center">
              <FiClock className="text-primary mr-2" size={16} />
              <span className="text-sm font-medium text-base-content">
                {eventTime}
              </span>
            </div>
            <div className="flex items-center">
              <FiCalendar className="text-primary mr-2" size={16} />
              <span className="text-sm font-medium text-base-content">
                {difficulty}
              </span>
            </div>
            <div className="flex items-center">
              <FiUsers className="text-primary mr-2" size={16} />
              <span className="text-sm font-medium text-base-content">
                {participantLimit} spots
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-base-content/80 text-sm mb-5 line-clamp-3">
            {description}
          </p>

          {/* Footer */}
          <div className="mt-auto pt-4 border-t border-base-200">
            <div className="flex flex-wrap gap-3 justify-center sm:justify-between items-center">
              {/* Creator info */}
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="w-10 h-10 rounded-full ring-1 ring-primary ring-offset-base-100 ring-offset-2">
                    <img
                      src={creatorPhoto}
                      alt={creatorName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-xs text-base-content/60">Organized by</p>
                  <p className="text-sm font-semibold text-primary">
                    {creatorName}
                  </p>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-2">
                <button className={miniButton}>Join Now</button>
                <Link to={`/events/${_id}`}>
                  <button className={`${miniButton} btn-outline`}>
                    <span>Details</span>
                    <FiArrowRight size={14} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default EventsCard;
