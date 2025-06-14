import React, { use, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";
import { Fade } from "react-awesome-reveal";
import Lottie from "lottie-react";
import notFoundIn from "../../assets/lotti/notFoundIn.json";
import { Link } from "react-router";
import Button from "../ui/Button";

const MyBookingsCard = ({ myBookingsPromise }) => {
  const myBookings = use(myBookingsPromise);
  const [bookings, setBookings] = useState(() => myBookings);

  // Delete booking by id
  const handleDeleteBooking = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#5046E5",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_API_URL}/bookings/${id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              const remaining = bookings.filter(
                (booking) => booking._id !== id
              );
              setBookings(remaining);
              Swal.fire({
                title: "Cancelled!",
                text: "Your booking has been cancelled.",
                icon: "success",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      }
    });
  };

  if (!bookings.length) {
    return (
      <div className="bg-base-100 shadow rounded">
        <p className="pt-4 md:pt-6 text-center text-red-500 text-xl md:text-2xl">
          Bookings Data Not Found
        </p>

        <div>
          <Lottie
            animationData={notFoundIn}
            className="w-full max-w-md h-[100px] md:h-[200px] mx-auto"
          />
        </div>
        <div className="text-center pb-4 md:pb-6">
          <Link to="/events">
            <Button variant="outline">Book Event</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-6xl mx-auto px-4">
      {bookings.map((booking, idx) => (
        <Fade triggerOnce key={booking._id} duration={700} delay={idx * 80}>
          <div className="card bg-gradient-to-br from-base-100 via-base-200 to-base-100 shadow-md border border-base-200 rounded flex flex-col h-full group relative duration-700 transition-all hover:-translate-y-2">
            <div className="relative">
              <img
                src={booking.eventImage}
                alt={booking.eventName}
                className="w-full h-36 object-cover rounded-t-sm border-b border-base-200 group-hover:brightness-95 transition"
              />
            </div>
            <div className="card-body flex-1 flex flex-col px-5 pt-3 pb-4 gap-0.5">
              <h3 className="card-title text-lg font-extrabold text-primary mb-1 line-clamp-2">
                {booking.eventName}
              </h3>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="badge badge-secondary rounded text-white font-semibold px-2 py-1 text-xs shadow">
                  {booking.eventType}
                </span>
                <span className="badge badge-primary rounded text-white font-semibold px-2 py-1 text-xs shadow">
                  {booking.eventDate}
                </span>
              </div>
              <div className="flex items-center gap-2 text-success text-xs font-bold mb-2">
                <span className="text-primary">Status:</span>
                <span className="inline-block w-2 h-2 rounded-full bg-success animate-pulse"></span>
                Booked
              </div>
              <div className="mt-1 text-xs text-base-content/70 italic line-clamp-2">
                {booking.description?.slice(0, 60)}
                {booking.description?.length > 60 ? "..." : ""}
              </div>
              <div className="flex gap-2 mt-3">
                <button
                  className="btn btn-xs bg-red-500 rounded flex-1 font-semibold text-white cursor-pointer"
                  onClick={() => handleDeleteBooking(booking._id)}
                  title="Cancel Booking"
                >
                  <FaTrashAlt className="inline mr-1" /> Cancel
                </button>
              </div>
            </div>
          </div>
        </Fade>
      ))}
    </div>
  );
};

export default MyBookingsCard;
