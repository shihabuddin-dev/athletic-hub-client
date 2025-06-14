import axios from "axios";
import Lottie from "lottie-react";
import { use, useState } from "react";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router";
import Swal from "sweetalert2";
import notFoundIn from "../../assets/lotti/notFoundIn.json";
import Button from "../ui/Button";

const MyEventsTable = ({ myEventsPromise }) => {
  const myEvents = use(myEventsPromise);
  const [events, setEvents] = useState(myEvents);

  // delete event using single id
  const handleDeleteEvent = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#5046E5",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_API_URL}/events/${id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              const remainingEvents = events.filter(
                (event) => event._id !== id
              );
              setEvents(remainingEvents);
              Swal.fire({
                title: "Deleted!",
                text: "Your Event has been deleted.",
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
          {events.length === 0 ? (
            <div className="bg-base-100 shadow rounded">
              <p className="pt-4 md:pt-6 text-center text-red-500 text-xl md:text-2xl">
                Event Data Not Found
              </p>

              <div>
                <Lottie
                  animationData={notFoundIn}
                  className="w-full max-w-md h-[100px] md:h-[200px] mx-auto"
                />
              </div>
              <div className="text-center pb-4 md:pb-6">
                <Link to="/create-event">
                  <Button variant="outline">Create Event</Button>
                </Link>
              </div>
            </div>
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
                <th className="px-4 py-3 border-b border-secondary/10 text-center">
                  Actions
                </th>
              </tr>
            </thead>
          )}
          <tbody>
            {events?.map((event) => (
              <tr
                key={event._id}
                className="hover:bg-secondary/5 transition duration-200"
              >
                <td className="px-4 py-3 border-b border-secondary/10">
                  <img
                    src={event?.eventImage}
                    className="h-16 w-24 object-cover rounded"
                  />
                </td>
                <td className="px-4 py-3 border-b border-secondary/10 font-medium text-primary">
                  {event?.eventName}
                </td>
                <td className="px-4 py-3 border-b border-secondary/10 font-medium text-primary">
                  {event?.eventType}
                </td>
                <td className="px-4 py-3 border-b border-secondary/10 font-medium text-primary">
                  {event?.eventDate}
                </td>

                <td className="px-4 py-3 border-b border-secondary/10 text-center space-y-1 lg:space-y-0 space-x-1 md:space-x-3  ">
                  <button>
                    <Link to={`/events/${event._id}`}>
                      {" "}
                      <FaEye className="text-lg text-secondary" />
                    </Link>
                  </button>
                  <button>
                    {" "}
                    <Link to={`/updateEvent/${event._id}`}>
                      <FaEdit className="text-lg text-primary" />
                    </Link>
                  </button>
                  <button onClick={() => handleDeleteEvent(event._id)}>
                    <FaTrashAlt className="text-red-500 cursor-pointer" />
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

export default MyEventsTable;
