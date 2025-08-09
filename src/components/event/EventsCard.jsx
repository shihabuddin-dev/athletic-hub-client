import { Fade } from "react-awesome-reveal";
import {
  FiArrowRight,
} from "react-icons/fi";
import { Link } from "react-router";

const EventsCard = ({ event }) => {
  const {
    _id,
    eventName,
    eventType,
    eventDate,
    description,
    eventImage,
  } = event || {};

  const formattedDate = new Date(eventDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
  const miniButton =
    "btn btn-primary btn-sm rounded px-3 shadow-md hover:shadow-lg hover:bg-primary-focus transition-all";

  return (
    <Fade triggerOnce>
      <div className="bg-gradient-to-br from-base-100 via-base-200 to-secondary/10 shadow-md hover:shadow-lg border border-base-200/50 hover:border-secondary/30 transition-all duration-900 flex flex-col h-full group transform hover:-translate-y-2 rounded w-full max-w-[340px] min-w-[260px] min-h-[350px] max-h-[480px] mx-auto">
        {/* Image container */}
        <Fade triggerOnce>
          <figure className="relative h-38 sm:h-42 overflow-hidden rounded-t">
            <img
              src={eventImage}
              alt={eventName}
              className="w-full h-full object-cover rounded-t border-b-2 border-secondary/70 transition-transform duration-900 group-hover:scale-105"
              loading="lazy"
            />
            {/* Gradient overlay */}
            <div className="absolute transition transform duration-700 inset-0 hover:bg-gradient-to-t hover:from-secondary/50 hover:via-transparent hover:to-transparent" />

            {/* Date ribbon */}
            <div className="absolute top-3 left-3 flex flex-col items-center justify-center bg-secondary text-white text-center px-2 py-1 rounded shadow-md">
              <span className="text-xs leading-none">
                {formattedDate.split(" ")[1]}
              </span>
              <span className="text-xs">
                {formattedDate.split(" ")[0]}
              </span>
            </div>

            {/* Event badges */}
            <div className="absolute top-3 right-3 flex flex-col gap-2 items-end">
              <span className="badge badge-sm badge-primary rounded text-white px-2 py-1 shadow-md text-xs">
                {eventType}
              </span>
            </div>
          </figure>
        </Fade>

        {/* Content */}
        <div className="flex-1 flex flex-col p-4 sm:p-6">
          {/* Event title and year */}
          <div className="min-h-[48px] flex items-center">
            <h3
              className="font-bold line-clamp-2 leading-tight text-secondary text-lg text-center w-full"
            >
              {eventName}
            </h3>
          </div>

          {/* Short Description */}
          {description && (
            <p className="text-base-content/80 text-sm mb-4 line-clamp-2 text-center">
              {description.length > 80 ? description.slice(0, 80) + '...' : description}
            </p>
          )}

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-2 justify-center">
            <Link to={`/events/${_id}`}>
              <button className={miniButton}>
                <span>See more</span>
                <FiArrowRight size={14} />
              </button>
            </Link>
          </div>

        </div>
      </div>
    </Fade>
  );
};

export default EventsCard;
