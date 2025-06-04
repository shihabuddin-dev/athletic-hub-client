import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import Button from "../../components/ui/Button";
import axios from "axios";
import Swal from "sweetalert2";
import {
  FiCalendar,
  FiClock,
  FiMapPin,
  FiUsers,
  FiAward,
} from "react-icons/fi";

const DetailsEvent = () => {
  const event = useLoaderData();
  const { id } = useParams();
  console.log(id);

  const { user } = useAuth();
  const [booking, setBooking] = useState(false);

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

  // Pre-fill participant details
  const participantName = user?.displayName || "";
  const participantEmail = user?.email || "";

  const handleBookNow = () => {
    if (!user) return;
    const currentEvent = { ...event, user_email: user.email };
    setBooking(true);
    axios
      .post(`${import.meta.env.VITE_API_URL}/bookings`, currentEvent)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Booking successful!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Booking failed!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .finally(() => {
        setBooking(false);
      });
  };

  return (
    <div className="max-w-4xl mx-auto my-10 bg-base-100 rounded shadow-sm border border-base-200 p-6 md:p-10">
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={eventImage}
          alt={eventName}
          className="w-full md:w-1/2 h-64 object-cover rounded-lg border border-base-200"
        />
        <div className="flex-1 flex flex-col gap-3">
          <h2 className="text-3xl font-bold text-primary mb-2">{eventName}</h2>
          <div className="flex flex-wrap gap-2 mb-2">
            <span className="badge badge-secondary text-white font-semibold px-3 py-1">
              {eventType}
            </span>
            <span className="badge badge-primary text-white font-semibold px-3 py-1">
              {difficulty}
            </span>
          </div>
          <div className="flex flex-col gap-1 text-base-content/80 mb-2">
            <span className="flex items-center gap-2">
              <FiCalendar /> {eventDate}
            </span>
            <span className="flex items-center gap-2">
              <FiClock /> {eventTime}
            </span>
            <span className="flex items-center gap-2">
              <FiMapPin /> {location}
            </span>
            <span className="flex items-center gap-2">
              <FiUsers /> {participantLimit} spots
            </span>
          </div>
          {highlights && (
            <div className="flex items-center bg-secondary/10 rounded px-3 py-2 mb-2">
              <FiAward className="text-secondary mr-2" size={16} />
              <span className="text-sm font-medium text-secondary line-clamp-1">
                {highlights}
              </span>
            </div>
          )}
          <p className="text-base-content/90 text-sm mb-2">{description}</p>
          <div className="flex items-center gap-5 mt-2">
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
        </div>
      </div>
      {/* Participant details */}
      <div className="mt-8 bg-base-200 rounded-lg p-5 flex flex-col md:flex-row gap-6 items-center">
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2 text-primary">
            Your Details
          </h3>
          <div className="flex flex-col gap-2">
            <input
              type="text"
              value={participantName}
              disabled
              className="input input-bordered w-full bg-base-100"
            />
            <input
              type="email"
              value={participantEmail}
              disabled
              className="input input-bordered w-full bg-base-100"
            />
          </div>
        </div>
        <Button
          className="mt-4 md:mt-0 w-full md:w-auto"
          onClick={handleBookNow}
          disabled={booking}
        >
          {booking ? "Booking..." : "Book Now"}
        </Button>
      </div>
    </div>
  );
};

export default DetailsEvent;
