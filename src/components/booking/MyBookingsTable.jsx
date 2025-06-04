import React, { use, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";

const MyBookingsTable = ({ myBookingsPromise }) => {
  const myBookings = use(myBookingsPromise);
  const [bookings, setBookings] = useState(myBookings);

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
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Delete failed!",
              text: error?.message || "Something went wrong.",
              showConfirmButton: true,
            });
          });
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="overflow-x-auto shadow-md rounded">
        <table className="min-w-full bg-base-200 overflow-x-scroll text-left border border-secondary/10">
          {bookings.length === 0 ? (
            <p className="text-center bg-base-100 text-red-500 text-xl md:text-2xl py-4">
              Bookings Data Not Found
            </p>
          ) : (
            <thead className="bg-secondary/10 text-secondary text-sm">
              <tr>
                <th className="px-4 py-3 border-b border-secondary/10">
                  Event Photo
                </th>
                <th className="px-4 py-3 border-b border-secondary/10">
                  Event Name
                </th>
                <th className="px-4 py-3 border-b border-secondary/10">
                  Event Type
                </th>
                <th className="px-4 py-3 border-b border-secondary/10">
                  Event Date
                </th>
                <th className="px-4 py-3 border-b border-secondary/10">
                  Status
                </th>
                <th className="px-4 py-3 border-b border-secondary/10 text-center">
                  Actions
                </th>
              </tr>
            </thead>
          )}
          <tbody>
            {bookings?.map((booking) => (
              <tr
                key={booking._id}
                className="hover:bg-secondary/5 transition duration-200"
              >
                <td className="px-4 py-3 border-b border-secondary/10">
                  <img
                    src={booking?.eventImage}
                    className="h-16 w-24 object-cover rounded"
                  />
                </td>
                <td className="px-4 py-3 border-b border-secondary/10 font-medium text-primary">
                  {booking?.eventName}
                </td>
                <td className="px-4 py-3 border-b border-secondary/10 font-medium text-primary">
                  {booking?.eventType}
                </td>
                <td className="px-4 py-3 border-b border-secondary/10 font-medium text-primary">
                  {booking?.eventDate}
                </td>
                <td className="px-4 py-3 border-b border-secondary/10 font-medium text-success">
                  Booked
                </td>
                <td className="px-4 py-3 border-b border-secondary/10 text-center">
                  <button onClick={() => handleDeleteBooking(booking._id)}>
                    <FaTrashAlt className="text-red-500 cursor-pointer text-lg" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookingsTable;
