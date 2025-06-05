import React, { useState } from "react";
import { useLoaderData } from "react-router";
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
  FiUser,
  FiMail,
  FiHeart,
  FiShare2,
  FiChevronRight,
  FiCheckCircle,
} from "react-icons/fi";

const DetailsEvent = () => {
  const event = useLoaderData();
  const { user } = useAuth();
  const [booking, setBooking] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

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

  const participantName = user?.displayName || "";
  const participantEmail = user?.email || "";

  const handleBookNow = () => {
    if (!user) return;
    if (isBooked) {
      Swal.fire({
        icon: "warning",
        title: "Already booked!",
        text: "You have already booked this event.",
        showConfirmButton: true,
      });
      return;
    }
    const { _id, ...eventWithoutId } = event;
    const currentEvent = { ...eventWithoutId, user_email: user.email };
    setBooking(true);
    axios
      .post(`${import.meta.env.VITE_API_URL}/bookings`, currentEvent)
      .then(() => {
        setIsBooked(true);
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
    <div className="max-w-5xl mx-auto my-6">
      {/* Hero Section */}
      <div className="relative h-96 w-full overflow-hidden rounded shadow-lg">
        <img
          src={eventImage}
          alt={eventName}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-8 text-white">
          <div className="flex items-center gap-3 mb-3">
            <span className="badge badge-primary rounded text-sm font-semibold">
              {eventType}
            </span>
            <span className="badge badge-secondary rounded text-sm font-semibold">
              {difficulty}
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-2">{eventName}</h1>
          <p className="text-gray-300 max-w-2xl">{highlights}</p>
        </div>
        <div className="absolute top-6 right-6 flex gap-3">
          <button
            type="button"
            className={`btn btn-circle btn-secondary ${
              isLiked && " border-0 text-white"
            }`}
            onClick={() => setIsLiked(!isLiked)}
            aria-label="Like"
          >
            <FiHeart className={isLiked ? "fill-current" : ""} />
          </button>
          <button
            type="button"
            className="btn btn-circle bg-primary border-0 text-white "
            aria-label="Share"
          >
            <FiShare2 />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 -mt-16 px-6">
        {/* Left Column - Event Details */}
        <div className="lg:col-span-2 space-y-8">
          {/* About Section */}
          <div className="bg-base-100 rounded shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-base-content">
              About the Event
            </h2>
            <p className="text-base-content/70 leading-relaxed mb-6">
              {description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded text-primary">
                  <FiCalendar size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-base-content/60">Date</h3>
                  <p className="text-base-content">{eventDate}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded text-blue-600">
                  <FiClock size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-base-content/60">Time</h3>
                  <p className="text-base-content">{eventTime}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 rounded text-purple-600">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-base-content/60">
                    Location
                  </h3>
                  <p className="text-base-content">{location}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-100 rounded text-green-600">
                  <FiUsers size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-base-content/60">
                    Available Spots
                  </h3>
                  <p className="text-base-content">{participantLimit}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Organizer Section */}
          <div className="bg-base-100 rounded shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-base-content">
              Organizer
            </h2>
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-6">
              <div className="relative">
                <img
                  src={creatorPhoto}
                  alt={creatorName}
                  className="w-20 h-20 rounded-full object-cover border-4 border-base-100 shadow-md"
                />
                <div className="absolute bottom-2 -right-1 bg-primary text-white p-1 rounded-full">
                  <FiCheckCircle className="w-5 h-5" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-base-content">
                  {creatorName}
                </h3>
                <p className="text-base-content/60 mb-3">Event Organizer</p>
                <Button>View profile</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Booking Card */}
        <div className="sticky top-6 h-fit">
          <div className="bg-base-100 rounded shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-primary/90 to-secondary/90 p-6 text-white">
              <h3 className="text-xl font-bold">Join This Event</h3>
              <p className="text-white/80">Secure your spot now</p>
            </div>

            <div className="p-6">
              <div className="space-y-4 mb-6">
                <div className="relative">
                  <label className="block text-sm font-medium text-base-content mb-1">
                    Your Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiUser className="text-base-content/40" />
                    </div>
                    <input
                      type="text"
                      value={participantName}
                      disabled
                      className="pl-10 w-full px-4 py-3 rounded border border-base-200 focus:ring-2 focus:ring-primary focus:border-transparent bg-base-100"
                    />
                  </div>
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-base-content mb-1">
                    Your Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiMail className="text-base-content/40" />
                    </div>
                    <input
                      type="email"
                      value={participantEmail}
                      disabled
                      className="pl-10 w-full px-4 py-3 rounded border border-base-200 focus:ring-2 focus:ring-primary focus:border-transparent bg-base-100"
                    />
                  </div>
                </div>
              </div>

              <Button
                className="w-full rounded shadow-md flex items-center justify-center gap-2"
                onClick={handleBookNow}
                disabled={booking}
              >
                {booking ? (
                  <span className="flex items-center gap-2">
                    <FiClock className="animate-spin" /> Processing...
                  </span>
                ) : isBooked ? (
                  <span className="flex items-center gap-2">
                    <FiCheckCircle className="text-white " /> Booked
                    Successfully
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <FiUsers className="text-white" /> Reserve Your Spot
                  </span>
                )}
              </Button>

              {isBooked && (
                <div className="mt-4 p-3 bg-green-50 rounded border border-green-100">
                  <p className="text-green-700 text-sm flex items-center gap-2">
                    <FiCheckCircle className="text-green-600" /> Confirmation
                    details sent to your email
                  </p>
                </div>
              )}

              <div className="mt-6 pt-6 border-t border-base-200">
                <h4 className="font-semibold text-base-content mb-3">
                  What's included
                </h4>
                <ul className="space-y-2 text-base-content/70">
                  <li className="flex items-center gap-2">
                    <FiCheckCircle className="h-5 w-5 text-green-500" />
                    Access to all event activities
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheckCircle className="h-5 w-5 text-green-500" />
                    Event materials and resources
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheckCircle className="h-5 w-5 text-green-500" />
                    Networking opportunities
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheckCircle className="h-5 w-5 text-green-500" />
                    Refreshments during breaks
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsEvent;
